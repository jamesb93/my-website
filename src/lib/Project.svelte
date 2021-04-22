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
        padding-left: 30px;
        max-width: 400px;
    }

    :global(img) {
        width: 130px;
        max-height: 130px;
        display: block;
    }
</style>

