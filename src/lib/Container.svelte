<script>
    export let click=()=>{}
</script>

<div class="container" on:click={click}>
    <slot />
</div>

<style>
    .container {
        position: relative;
        width: 100%;
        display: flex;
        background-color: #fff;
        border-radius: 5px;
        border-radius: 5px;
        padding: 20px;
        z-index: 1;
        -webkit-transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .container:hover {
        -webkit-transform: scale(1.05, 1.05);
        transform: scale(1.05, 1.05);
        z-index: 50;
    }

    .container::after {
        content: "";
        border-radius: 5px;
        position: absolute;
        z-index: 50;
        top: 0;
        left: 0;
        width: 100%;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        opacity: 0;
        -webkit-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .container::hover::after {
        opacity: 1;
    }

    .container:active {
        background:rgba(231, 231, 231, 0.3)
    }
</style>