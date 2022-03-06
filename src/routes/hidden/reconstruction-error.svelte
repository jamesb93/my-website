<script>
	const tunes = [
		{ name: '--isn', src: 'https://user.fm/files/v2-26f14ca8e87d3f410ae16349712332e8/--isn.mp3' },
		{
			name: '_.dotmaxwave',
			src: 'https://user.fm/files/v2-70a3b1ca4565c347d8b3c0d5e3d8d993/_.dotmaxwave.mp3'
		},
		{
			name: 'segmentoittet',
			src: 'https://user.fm/files/v2-1c0886e7261041008ba9162b3d80cce4/segmnoittet.mp3'
		},
		{
			name: 'sys.ji_',
			src: 'https://user.fm/files/v2-de908a727bacf12593547a94c912e9a6/sys.ji_.mp3'
		},
		{
			name: 'X86Desc.a',
			src: 'https://user.fm/files/v2-eb62b97d078a3d3127ef9601e8a55e7f/X86Desc.a.mp3'
		}
	];
</script>

<h1>Reconstruction Error</h1>

<p>
	Reconstruction Error focuses on the harnessing of microscopic clicks, fuzzes and glitches
	harvested from my converting raw data on my computer into audio files. The album is an artefact,
	and a momentary capture of my engagement with these sounds — drawing to the foreground the
	ephemeral and gentle nature that is embedded in the unrelenting detritus produced by computers.
</p>

<div id="music-container">
	{#each tunes as tune}
		<div id="item">
			<h2>{tune.name}</h2>
			<audio controls>
				<source type="audio/mp3" src={tune.src} />
				<track kind="captions" />
			</audio>
		</div>
	{/each}
</div>

<style>
	#music-container {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	#item {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}
</style>
