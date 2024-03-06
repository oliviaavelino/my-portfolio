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
    <Project info={p} />
    {/each}
</div>
