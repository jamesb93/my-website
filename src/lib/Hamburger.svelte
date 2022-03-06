<script>
	export let expanded = false;
</script>

<div class="btn" on:click>
	{#if !expanded}
	<svg width=15 height=15 id="hamburger">
		<line x1=0 y1=4  x2=15 y2=4 id="hamburger" />
		<line x1=0 y1=8 x2=15 y2=8 id="hamburger" />
		<line x1=0 y1=12 x2=15 y2=12 id="hamburger" />
	</svg>
	{:else}
	<svg width=15 height=15 id="hamburger">
		<line x1=3 y1=4  x2=12 y2=12 id="hamburger" />
		<line x1=3 y1=12 x2=12 y2=4 id="hamburger" />
	</svg>
	{/if}
</div>

<style>
	.btn {
		background-color: white;
		border: none;
		padding-top: 10px;
	}

	.btn:hover > svg line {
		stroke: var(--feature-color);
	}

	.btn:active > svg line {
		stroke: black;
	}

	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}

	svg line {
		stroke: rgb(139, 139, 139);
		stroke-width: 2;
		transition: transform 0.3s ease-in-out;
	}
</style>
