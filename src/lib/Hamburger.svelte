<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click')
	}
</script>

<button class="btn" on:click={handleClick} id='hamburger'>
    <svg width=24 height=20 id='hamburger'>
        <line x1=0 y1=4  x2=24 y2=4 id='hamburger'/>
        <line x1=0 y1=11  x2=24 y2=11 id='hamburger'/>
        <line x1=0 y1=18 x2=24  y2=18 id='hamburger'/>
    </svg>
</button>

<style>
    .btn {
		background-color: white;
		border: none;
	}

	.btn:hover > svg line {
		stroke: rgb(57, 57, 57);
	}

	.btn:active > svg line {
		stroke: rgb(0, 0, 0);
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