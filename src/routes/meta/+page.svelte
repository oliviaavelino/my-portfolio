<script>
    import * as d3 from "d3";
    import { onMount } from "svelte";

    let data = [];
    let commits = [];
    let averageFileLength;
    let width = 1000, height = 600;

    onMount(async () => {
	    data = await d3.csv("loc.csv", row => ({
	        ...row,
	        line: Number(row.line), // or just +row.line
	        depth: Number(row.depth),
	        length: Number(row.length),
	        date: new Date(row.date + "T00:00" + row.timezone),
	        datetime: new Date(row.datetime)
        }));

        commits = d3.groups(data, d => d.commit).map(([commit, lines]) => {
            let first = lines[0];
            let {author, date, time, timezone, datetime} = first;
            let ret = {
                id: commit,
                url: "https://github.com/vis-society/lab-7/commit/" + commit,
                author, date, time, timezone, datetime,
                hourFrac: datetime.getHours() + datetime.getMinutes() / 60,
                totalLines: lines.length
            };

            // Like ret.lines = lines
            // but non-enumerable so it doesn’t show up in JSON.stringify
            Object.defineProperty(ret, "lines", {
                value: lines,
                configurable: true,
                writable: true,
                enumerable: false,
            });

            return ret;
        });
        xScale = d3.scaleTime()
		.domain([0, d3.max(commits, (d) => d.date)])
		.range([0, width]);

        yScale = d3.scaleLinear()
		.domain([0, d3.max(commits, (d) => commits.time)])
		.range([0, height]);


        let fileLengths = d3.rollups(data, v => d3.max(v, v => v.line), d => d.file);
        averageFileLength = d3.mean(fileLengths, d => d[1]);
        
    });

</script>

<style>
    dl{
    display: block;
    grid-template-columns: auto 1fr;
    grid-row: span 2;
    gap: 1em;
    }

    dd{
    text-align: left;
    }

    dt{
    font-size: smaller;
    }

	svg {
		overflow: visible;
	}
</style>

<svelte:head>
    <title>Meta</title>
</svelte:head>

<h1>Meta</h1>
<p>This page includes stats about the code of this website.</p>
<h2>Summary</h2>
<dl class="stats">
    <dt>Commits</dt>
    <dd>{commits.length}</dd>
	<dt>Total <abbr title="Lines of code">LOC</abbr></dt>
	<dd>{data.length}</dd>
    <dt>Number of Files</dt>
    <dd>{d3.group(data, d => d.file).size}</dd>
    <dt>Avg Lines/Commit</dt>
    <dd>{Math.round(d3.mean(commits, d => d.totalLines))}</dd>
    <dt>Avg File Length</dt>
    <dd>{Math.round(averageFileLength)}</dd>
</dl>
<svg viewBox="0 0 {width} {height}">
    <g class="dots">
        {#each commits as commit, index }
            <circle
                cx={ xScale(commit.datetime) }
                cy={ yScale(commit.hourFrac) }
                r="5"
                fill="steelblue"
            />
        {/each}
    </g>
</svg>

