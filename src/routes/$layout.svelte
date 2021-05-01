<script>
	import Header from "$lib/Header.svelte";
	import '../app.scss';
	let w;
</script>

<svelte:window bind:innerWidth={w} />

<Header />
<main class="wrapper">
	<article class="content">
		<slot></slot>
	</article>
</main>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
	}

	.content {
		justify-content: center;
		height: 100%;
	}

	main {
		min-width: 30%;
		max-width: 550px;
		margin: 0 auto;
		padding: 15px; 
		padding-top: 100px;
	}
</style>
