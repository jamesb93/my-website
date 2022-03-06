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
	ephemeral and gentle nature that is embedded in the detritus produced by computers.
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

<p>
	I began writing this album by scraping raw data from my hard drive and converting it to WAV audio
	files. I originally performed this with the <a href="http://sox.sourceforge.net"
		>SoX command-line program</a
	>
	and eventually <a href="https://github.com/jamesb93/mosh">mosh</a>, a tool I wrote with the help
	of Francesco Cameli. This generated around 20000 files of mostly noise. The album emerged from
	this self inflincted problem as I developed methods for filtering, searching and querying this
	unwieldy corpus of sounds for those with novel qualities, morphologies and sonic behaviours.
</p>
<p>
	This technology-led creative process spawned the first version of <a
		href="https://github.com/jamesb93/ftis">FTIS (Finding Things In Stuff)</a
	>, a framework for orchestrating machine listening and machine learning for computer-aided
	composition.
</p>

<p>
	You can read more about the creative process in my thesis: <a
		target="_blank"
		href="https://harnessing.xyz/projects/reconstruction-error"
		>https://harnessing.xyz/projects/reconstruction-error</a
	>. Below is my presentation from the 2020 AI Music Creativity Conference.
</p>

<iframe
	height="256"
	width="1000"
	src="https://www.youtube.com/embed/-FNO0QovfsI"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
/>

<style>
	iframe {
		max-width: 100%;
		padding-top: 10px;
	}
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
