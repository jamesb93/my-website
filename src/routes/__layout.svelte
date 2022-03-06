<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import { expand } from '$lib/app';
</script>

<svelte:head><title>james bradbury | sound & code</title></svelte:head>

<div class="main">
	<Header />
	<div class="container">
		<Navigation />

		<div class="main" class:fade={$expand}>
			<slot />
		</div>

		<div class="empty-right" />
	</div>
</div>

<style>
	.fade {
		opacity: 0.2;
		touch-action: none;
		pointer-events: none;
	}
	.main {
		display: grid;
		grid-template-rows: auto auto;
		gap: 1em;
	}
	.container {
		display: grid;
		justify-content: center;
		gap: 90px;
	}

	/* Media Queries */
	@media (min-width: 1100px) {
		.container {
			grid-template-columns: auto min(70ch, 100%) auto;
			grid-template-areas: 'navigation main empty-right';
		}
	}
	@media (max-width: 1100px) {
		.container {
			grid-template-rows: auto auto;
			grid-template-areas:
				'navigation'
				'main';
			gap: 0;
			padding-left: 2em;
			padding-right: 2em;
		}

		.empty-right {
			display: none;
		}
	}

	.main {
		grid-area: main;
		min-width: 1px;
	}
	.empty-right {
		grid-area: empty-right;
		width: 20ch;
	}
</style>
