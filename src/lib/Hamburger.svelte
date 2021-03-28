<script>
    export let func;
</script>

<button class="btn" on:click={func}>
    <svg width=24 height=20>
        <line x1=0 y1=4  x2=24 y2=4/>
        <line x1=0 y1=11  x2=24 y2=11/>
        <line x1=0 y1=18 x2=24  y2=18/>
    </svg>
</button>

<style>
    .btn {
		background-color: white;
		border: none;
	}

    svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}
	
	svg line {
		stroke: rgb(94, 94, 94);
		stroke-width: 2;
		transition: transform 0.3s ease-in-out
	}
</style>