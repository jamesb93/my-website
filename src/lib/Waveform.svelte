<script>
    import { onMount } from "svelte";
    let Peaks;
    let instance;
    let overview;
    let zoom;
    let audio;
    let controls;
    let peaksControls;
    let zoomIn;
    let zoomOut;
    let playing = false;
    let playPause;
    export let title = "title";
    export let subtitle = null;
    export let performer = null;
    export let perfLink = null;
    export let file;
    export let buffer;

    const handleZoomIn=()=>{instance.zoom.zoomIn()}

    const handleZoomOut=()=>{instance.zoom.zoomOut()}

    const handlePlay=()=>{
        if (playing){
            playing = false;
            instance.player.pause()
        } else {
            playing = true;
            instance.player.play()
        }     
    }

    onMount (async () => {
        try {
            // SSR Compatability
            const module = await import("peaks.js");
            Peaks = module.default;

            // Generate an instance form factory
            instance = Peaks.init({
                containers: {
                    zoomview: zoom,
                    overview: overview
                },
                dataUri: {arraybuffer: buffer},
                mediaElement: audio,
                height: 30,
                zoomWaveformColor: 'rgba(0, 30, 128, 0.65)',
                overviewWaveformColor: 'rgba(0, 15, 100, 1.0)',
                overviewHighlightColor: 'grey',
                overviewHighlightOffset: 11,
                playheadColor: 'rgba(0, 0, 0, 1)',
                playheadTextColor: 'rgba(150, 0, 0, 1)',
                showPlayheadTime: true,
                fontFamily: 'sans-serif',
                pointMarkerColor: 'rgba(0, 0, 0, 0.0)',
                axisGridlineColor: 'rgba(0, 0, 0, 0.0)',
                randomizeSegmentColor: true,
            })
        } catch (err) {
            console.error(err);
        }

    });
</script>

<style>
    .audio-box {
        padding-top: 1em;
        padding-bottom: 1em;
    }

    .audio-controls {
        display: flex;
        flex-direction: row;
		flex-wrap: nowrap;
		flex-basis: auto;
        justify-content: center;
    }

    .pp-button {
        width: 5em;
    }

    .title {
        font-size: 13px;
        font-weight:500;
        padding: 0;
    }

    .subtitle {
        font-size: 12px;
        padding: 0;
    }

    .peaks-controls {
        z-index: 100;
    }
</style>

<div class="audio-box">
    <span class="title">{title}</span><br>
    {#if subtitle}
    <span class="subtitle">{subtitle}</span>
    {/if}
    {#if performer}
    <br>
    <span class="subtitle">
        <a target="blank" href={perfLink}>{performer}</a>
    </span>    
    {/if}
    <div bind:this={overview} />
    <div bind:this={zoom} />
    <div bind:this={peaksControls} class="peaks-controls">
        <audio bind:this={audio}>
            <source src={file} type="audio/mp3">
            <track kind="captions">
        </audio>
        <div bind:this={controls} class="audio-controls">
            <div>
                <button bind:this={playPause} on:click={handlePlay} class="pp-button">
                    {#if playing}
                        pause
                    {:else}
                        play
                    {/if}
                </button>
                <button bind:this={zoomIn} on:click={handleZoomIn} class="button">zoom in</button>
                <button bind:this={zoomOut} on:click={handleZoomOut} class="button">zoom out</button>
            </div>
        </div>
    </div>
</div>


    