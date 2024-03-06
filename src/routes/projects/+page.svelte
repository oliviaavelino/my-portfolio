<script>
    import projects from '$lib/projects.json';
</script>
<svelte:head>
    <title>Projects</title>
</svelte:head>
    <h1>
        Projects
    </h1>
    {#each projects as p}
    <div class="projects">
        <article>
            <h2>{p.title}</h2>
            <img src={p.image} alt="">
            <p>{p.description}</p>
        </article>
    </div>
    {/each}
