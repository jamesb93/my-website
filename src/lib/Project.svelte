<script>

    import Container from '$lib/Container.svelte';
    export let url = "" 

    function handleClick() {
        window.location.href = "projects/"+url
    }
</script>

<Container click={handleClick}>
    <slot name="image" />
    <div class="writing">
        <slot name="title">No Title</slot>
        <slot name="caption">No Caption</slot>
    </div>
</Container>


<style>
    .writing {
        display: flex;
        flex-direction: column;
        padding-left: 15px;
        padding-right: 15px;
        /* max-width: 400px; */
        text-align: justify;
        text-justify: inter-word;
    }

    :global(img) {
        width: 130px;
        max-height: 130px;
        display: block;
    }
</style>

