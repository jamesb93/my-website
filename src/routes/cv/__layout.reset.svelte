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
		min-width: 30%;
		max-width: 700px;
		margin: 0 auto;
		padding: 15px;
		padding-top: 50px;
		line-height: 2.0;
	}
</style>
