<script>
    import projects from '$lib/projects.json';
    import Project from "$lib/Projects.svelte";
</script>

<h1>Olivia Avelino</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, similique! Voluptatibus, voluptatem? Qui dicta accusamus aperiam voluptatem quaerat dolor inventore cumque nemo consequuntur laudantium numquam, temporibus veniam cum, atque vero.</p>
<img class = "dog" src="./images/download.jpg" alt="Picture of a dog">

<h2>Latest Projects</h2>
<div class="projects">
    {#each projects.slice(0,3) as p}
    <Project info={p} hlevel=3/>
    {/each}
</div>
<h2>Github Stats</h2>

{#await fetch("https://api.github.com/users/oliviaavelino") }
	<p>Loading...</p>
{:then response}
	{#await response.json()}
		<p>Decoding...</p>
	{:then data}
		<dl>
			<dt>Public Repos: </dt>
			<dd>{ data.public_repos }</dd>

			<dt>Followers: </dt>
			<dd>{ data.followers }</dd>

			<dt>Following: </dt>
			<dd>{ data.following }</dd>

			<dt>Public Gists: </dt>
			<dd>{ data.public_gists }</dd>
		
		</dl>
	{:catch error}
		<p class="error">
			Something went wrong: {error.message}
		</p>
	{/await}
{:catch error}
	<p class="error">
		Something went wrong: {error.message}
	</p>
{/await}
