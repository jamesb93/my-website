<script>
	import Header from "$lib/Header.svelte";
	import '../app.scss';
	let w;
</script>

<svelte:window bind:innerWidth={w} />

<Header />
<main class="wrapper">
	<slot />
</main>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 30px;
	}

	main {
		max-width: 130ch;
		margin: 0 auto;
		padding: 15px; 
		padding-top: 100px;
	}
</style>
