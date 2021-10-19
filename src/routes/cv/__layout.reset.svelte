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
		height: 100%;
		line-height: 1.5em;
	}

	main {
			min-width: 30%;
			max-width: 750px;
			margin: 0 auto;
			padding: 15px;
			padding-top: 50px;
	}
</style>
