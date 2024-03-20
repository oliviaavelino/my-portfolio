
<script>
    let pages = [
        {url: "./", title: "Home"},
        {url: "projects", title: "Projects"},
        {url: "resume", title: "Resume"},
        {url: "contact", title: "Contact"},
        {url: "https://github.mit.edu/oavelino", title: "Github"}
    ]
</script>

<nav>
	{#each pages as p }
		<a href={p.url}>{p.title}</a>
	{/each}
</nav>

