<div id="container">
    <div class="left">
        <slot name="left" />
    </div>
    
    <div class="right">
        <slot name="right" />
    </div>
</div>

<style>
    #container {
        display: flex;
        flex-direction: row;
        padding-top: 5px;
        gap: 1em;
    }
    .left {
        max-width: 85px;
        min-width: 85px;
    }
</style>