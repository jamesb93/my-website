<script>
    export let links;
    export let hide;
    export let func;
</script>

<nav class='links' class:hide={hide}>
    {#each links as link}
        <a on:click={func} href=/{link}>
            {link}
        </a>
    {/each}
</nav>

<style>

.links {
    background-color: rgba(255, 255, 255, 0.906);
    display: flex;
    flex-direction: column;
    width: 100%;
}

.links > a {
    font-size: 24px;
    display: block;
    text-align: center;
    margin: 0 auto;
    margin: 20px;
    max-width: 50%;
    align-self: center;
}

.hide {
    display: none;
}

a {
    color: rgb(127, 127, 127)
}
	
a:hover {
    color: rgb(178, 178, 178)
}
</style>