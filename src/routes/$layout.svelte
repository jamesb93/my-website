<!-- https://daveceddia.com/svelte-with-sass-in-vscode/ -->
<!-- https://stackoverflow.com/questions/32378953/keep-the-middle-item-centered-when-side-items-have-different-widths -->
<!-- https://css-tricks.com/full-bleed/ -->

<script>
	import Header from "../lib/Header.svelte";
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
		min-width: 50%;
		max-width: 600px;
		margin: 0 auto;
		padding: 15px; 
		padding-top: 100px;
	}
</style>
