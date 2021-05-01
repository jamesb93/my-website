<script>
	import '../../app.scss';
</script>

<main class="wrapper">
	<article class="content">
		<slot></slot>
	</article>
</main>

<style media="print">
	.content {
		justify-content: center;
		height: 100%;
	}

	main {
		min-width: 50%;
		max-width: 600px;
		margin: 0 auto;
		padding: 15px;
		padding-top: 50px;
	}
</style>
