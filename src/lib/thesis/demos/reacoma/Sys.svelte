<script>
    import { onMount } from "svelte";
    import Container from '$lib/components/Container.svelte';
    import Button from '$lib/components/Button.svelte';
    export let title = "NMF"
    export let caption = 'DEMO 1';
    export let id = 'demox';

    const prefix = '/tech-reacoma/sys/';
    const summed = 'summed';
    const transient = 'transient';
    const residual = 'residual';

    const sel = '#0d47a1';
    const nosel = 'rgba(0, 15, 100, 0.3)';

    let lastSelected = 'summed';

    const sounds = {
        summed: {
            audio: prefix + summed + '.mp3',
            peaks: prefix + summed + '.dat',
            instance: null,
            overview: null,
            audioElement: null,
            displayName: 'Summed'
        },
        transient: {
            audio: prefix + residual + '.mp3',
            peaks: prefix + residual + '.dat',
            instance: null,
            overview: null,
            audioElement: null,
            displayName: 'Residual'
        },
        residual : {
            audio: prefix + transient + '.mp3',
            peaks: prefix + transient + '.dat',
            instance: null,
            overview: null,
            audioElement: null,
            displayName: 'Transient'
        }
    }

    let selectedComponent = sounds.summed.displayName;
    let Peaks;

    onMount (async () => {
        const module = await import("peaks.js");
        Peaks = module.default;

        for ( const [key, component] of Object.entries(sounds)) {
            const options = {
                containers: {
                    overview: component.overview
                },
                dataUri: { 
                    arraybuffer: component.peaks
                },
                mediaElement: component.audioElement,
                overviewWaveformColor: 'rgba(0, 15, 100, 0.3)',
                overviewHighlightColor: 'grey',
                playheadColor: 'rgba(0, 0, 0, 1)',
                playheadTextColor: '#aaa',
                showPlayheadTime: false,
                pointMarkerColor: '#FF0000',
                axisGridlineColor: '#ccc',
                axisLabelColor: '#aaa',
                randomizeSegmentColor: true,
            }
            sounds[key].instance = Peaks.init(options, (err, p) => {
                if (err) {
                    console.log(err)
                } else {
                    sounds[key].instance = p
                    sounds[key].instance.views.getView('overview').fitToContainer();
                    if (key === 'summed') {
                        const view = sounds[key].instance.views.getView('overview');
                        view.setWaveformColor('#0d47a1');
                    } else {
                        sounds[key].audioElement.volume = 0.0;
                    }
                }
            });
        }
    });

    let playState = false
    $: playStateText = playState === false ? 'Play' : 'Pause'

    function playStateHandler() {

        if (playState) {
            sounds.summed.instance.player.pause();
            sounds.transient.instance.player.pause();
            sounds.residual.instance.player.pause();
        } else {
            sounds.summed.instance.player.play();
            sounds.transient.instance.player.play();
            sounds.residual.instance.player.play();
        }
    }

    function handleClick(component) {
        lastSelected = component;
        selectedComponent = sounds[component].displayName
        const currentTime = sounds[component].instance.player.getCurrentTime();

        for (const [name, c] of Object.entries(sounds)) {   
            if (name === component) {
                c.audioElement.volume = 1.0;
                c.instance.views.getView('overview').setWaveformColor(sel);
            } else {
                c.audioElement.volume = 0.0;
                c.instance.views.getView('overview').setWaveformColor(nosel);
                c.instance.player.seek(currentTime);
            }
        } 
    }

    function seekView(seek, component) {
        if (component === lastSelected) {
            for (const [name, c] of Object.entries(sounds)) {   
                if (name != component)
                    c.instance.player.seek(seek.target.currentTime);
            } 
        }
    }
</script>

<Container id={id}>
    <div class="horizontal">
        <span id="title">{title}</span>
        <span id="caption">{caption}</span>
    </div>

    <div class="horizontal">
        <Button 
        clickHandler={ playStateHandler }
        text={ playStateText }
        />
        <span id='selected-component'>{ selectedComponent }</span>
    </div>


    <div class="vis">
        <div 
        class='overview' 
        bind:this={sounds.summed.overview} 
        on:mousedown={ () => handleClick('summed') }
        />

        <div 
        class='overview' 
        bind:this={sounds.transient.overview} 
        on:mousedown={ () => handleClick('transient') }
        />

        <div 
        class='overview' 
        bind:this={sounds.residual.overview} 
        on:mousedown={ () => handleClick('residual') }
        />
    </div>


    <div class="vis">
        <audio 
        bind:this={sounds.summed.audioElement}
        on:play={ () => playState = true }
        on:pause={ () => playState = false }
        on:ended={ () => playState = false }
        on:seeking={ (seek) => seekView(seek, 'summed') }
        >
            <source src={sounds.summed.audio} type="audio/mp3">
            <track kind='captions' />
        </audio>

        <audio 
        bind:this={sounds.transient.audioElement}
        on:play={ () => playState = true }
        on:pause={ () => playState = false }
        on:ended={ () => playState = false }
        on:seeking={ (seek) => seekView(seek, 'transient') }
        >
            <source src={sounds.transient.audio} type="audio/mp3">
            <track kind='captions' />
        </audio>

        <audio 
        bind:this={sounds.residual.audioElement}
        on:play={ () => playState = true }
        on:pause={ () => playState = false }
        on:ended={ () => playState = false }
        on:seeking={ (seek) => seekView(seek, 'residual') }
        >
            <source src={sounds.residual.audio} type="audio/mp3">
            <track kind='captions' />
        </audio>
    </div>
</Container>

<style>
    
    #title {
        text-align: left;
        font-weight: bold;
    }

    .overview {
        height: 100px;
    }

    #selected-component {
        color: grey;
    }
    
    #caption{
        display: inline-block;
        font-style: italic;
        min-width: max-content;
    }
    
    .horizontal {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 8px;
        padding-bottom: 15px;
    }
    
    .vis {
        padding-bottom: 5px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
</style>


    