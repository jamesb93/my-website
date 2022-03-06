<script>
	import { onMount } from 'svelte';
	export let src= '';
	export let label = '';
	export let waveform = true;
	export let data = '';

	let Peaks, instance, overview, audio;

	onMount(async() => {
		if (waveform) {
			const module = await import("peaks.js");
			Peaks = module.default;
			const audioContext = new (AudioContext || webkitAudioContext)()
			let options = {
				mediaElement: audio,
				containers: {
					overview: overview
				},
				waveformColor: 'rgba(104, 105, 172, 0.9)',
				playheadColor: 'rgba(0, 0, 0, 1)',
				playheadTextColor: '#aaa',
			}
			if (data === '') {
				options.webAudio = {
					audioContext: audioContext,
					scale: 1024,
					multiChannel: false
				}
			} else {
				options.dataUri = {
					arraybuffer: data
				}
			}

			instance = Peaks.init(options, (err, p) => {
				if (err) {
					console.log(err)
				} else {
					instance = p
				}
			});
		}
	})
</script>

<div class="container">
	{#if waveform}
	<div class='waveform' bind:this={overview} />
	{/if}
	
	<div class='audio'>
		<audio controls bind:this={audio} src={src} type="audio/mp3" />
		<div class="label">{ label }</div>
	</div>
</div>


<style lang="postcss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
		width: 100%;
		margin-top: 1em;
		margin-bottom: 1em;
		gap: 2em;
	}

	.audio {
		display: flex;
		flex-direction: column;
		place-items: center;
		gap: 0.5em;
	}

	.label {
		font-size: 1rem;
	}

	.waveform {
		width: 100%;
        height: 65px;
    }
</style>
