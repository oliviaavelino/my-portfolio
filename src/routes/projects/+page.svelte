<script>
    import projects from '$lib/projects.json';
    import Project from "$lib/Projects.svelte";
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>
    <h1>
        {projects.length} Projects
    </h1>
    <div class="projects">
        {#each projects as p}
        <Project info={p} />
        {/each}
    </div>
