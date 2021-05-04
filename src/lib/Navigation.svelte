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

a, a:visited, a:link {
    color:black;
    text-justify: right;
    font-size: 24px;
}

a, a:visited:hover, a:link:hover {
    color: white;
}

.hide {
    display: none;
}
</style>