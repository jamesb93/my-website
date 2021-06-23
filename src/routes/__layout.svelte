<script>
	import Header from "$lib/Header.svelte";
	import '../app.scss';
	let w;
</script>

<svelte:window bind:innerWidth={w} />
<svelte:head>
	<base target="_blank">
</svelte:head>

<Header />
<main class="wrapper">
	<article class="content">
		<slot />
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
		max-width: 75ch;
		margin: 0 auto;
		padding: 15px; 
		padding-top: 100px;
	}
</style>
