<script>
    export let links;
    export let hide;
    export let func;
</script>

<nav class='links' class:hide={hide}>
    {#each links as link}
        <a target='_top' on:click={func} href=/{link}>
            {link}
        </a>
    {/each}
</nav>

<style>
a, a:visited, a:link {
    color:black;
    max-width: fit-content;
    font-size: 24px;
    padding-left: 2.5px;
    padding-right: 2.5px;
}

a, a:visited:hover, a:link:hover {
    color: white;
}

.hide {
    display: none;
}
</style>