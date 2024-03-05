<svelte:head>
    <title>Contact Me</title>
</svelte:head>
    <h1>Contact</h1>
    <form action="mailto:oavelino@mit.edu" method="POST" enctype="text/plain">
        <label for="Email">Email <input type="email" name="email"></label>
        <label for="Subject">Subject <input type="text" name="subject"></label>
        <label for="Body">Body <textarea name="body" id="" cols="30" rows="10"></textarea></label>
        <button>Submit</button>
    </form>
