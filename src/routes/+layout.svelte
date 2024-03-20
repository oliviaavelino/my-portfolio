
<script>
    import { page } from '$app/stores';
    let pages = [
        {url: "./", title: "Home"},
        {url: "projects", title: "Projects"},
        {url: "resume", title: "Resume"},
        {url: "contact", title: "Contact"},
        {url: "https://github.mit.edu/oavelino", title: "Github"}
    ]

    let colorScheme = "light dark"
    let root = globalThis?.document?.documentElement;
    $: root?.style.setProperty("color-scheme", colorScheme);
</script>

<style>
    label.color-scheme{
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 80%;
        font-family: inherit;
        display:grid;
        grid-template-columns: subgrid;
        grid-column: 1 / -1;
    }
</style>

<label class="color-scheme">
    Theme:
    <select bind:value={ colorScheme }>
        <option value="light dark">Default</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select>
</label>`

<nav>
	{#each pages as p }
        <a href={ p.url } class:current={ "." + $page.route.id === p.url } target={ p.url.startsWith("http") ? "_blank" : null }>{ p.title }</a>
	{/each}
</nav>

<slot />