<article>
    <svelte:element this={"h" + hlevel}>{ p.title }</svelte:element>
    <img src={p.image} alt="">
    <p>{p.description}</p>
</article>
<script>
    export let info = {};
    export let hlevel = 2;
    let p = info;
</script>