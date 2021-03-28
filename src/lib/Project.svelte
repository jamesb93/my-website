<script>
    export let url = ""
</script>

<div class="container">
    <a href="projects/{url}">
        <slot name="image"></slot>
    </a>
    <div class="writing">
        <slot name="title">No Title</slot>
        <slot name="caption">No Caption</slot>
    </div>
</div>

<style>
    .container {
        padding-top: 20px;
        display: flex;
    }

    .writing {
        display: flex;
        flex-direction: column;
        padding-left: 30px;
        max-width: 400px;
    }

    .container :global(img) {
        width: 130px;
        max-height: 130px;
        display: block;
    }

    a {color: black}
    a:link {color: black}
    a:hover {text-decoration: none}
    a:visited {color: black;}
</style>

