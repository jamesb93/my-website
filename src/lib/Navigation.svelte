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

.links > a {
    text-justify: right;
    font-size: 24px;
}

.hide {
    display: none;
}
</style>