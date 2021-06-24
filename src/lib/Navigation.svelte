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

    .links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        white-space: nowrap;
    }

    a, a:visited, a:link {
        color:black;
        max-width: fit-content;
        font-size: 24px;
        padding: 3px;
        text-decoration: none;
    }

    a, a:visited:hover, a:link:hover {
        color: white;
        text-decoration: underline;

    }

    .hide {
        display: none;
    }
</style>