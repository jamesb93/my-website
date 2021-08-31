<script>
    import Waveform from "$lib/Waveform.svelte";
</script>

<h1>Annealing Strategies</h1>

<Waveform 
title="Annealing Strategies"
file="/static/audio/AnnealingStrategies.mp3"
buffer="/static/waveforms/AnnealingStrategies.dat"
/>

<p>
    "Annealing Strategies" is a system, piece and patch that optimises and searches a chaotic parameter space using the process of simulated annealing. This algorithm mimics the physical mechanism of gradually cooling metal in order to remove internal stresses to strengthen it. The algorithm shares similarities with, and in a way is an improvement on the hill climbing algorithm, with the addition of a "temperature" coefficient that allows for local minima and maxima to be escaped from. Random decisions are allowed with respect to this coefficient, meaning the system is volatile and explorative at high temperatures and more conservative and exploitative at low temperatures. As the system is cooled the system hones in on an optimised solution. 
</p>
<p>
    The sound-generating guts of the system are a digital emulation of Peter Blasser’s <a href='https://www.ciat-lonbarde.net)'>(Ciat-Lonbarde)</a> <a href='https://www.ciat-lonbarde.net/fyrall/index.html'>Fyrall</a>. A single input is used to control the 24 parameters of the synthesis engine by reading through a procedural basis function. You can see a short video of me playing with this interface below.
</p>


<video controls loop>
    <source src="/static/webm/jitbfg.webm" type="video/webm">
    <track kind="captions">
</video>

<p>
    The output of the Fourses synthesiser controlled through this mechniams is measured in decibels using an EBUR128 loudness descriptor. This forms a complex mapping between a single dial and the loudness descriptor with the complex coupled parameters between these. The simulated annealing algorithm searches for an input parameter that minimises this loudness descriptor, creating a pathway towards a quiet state.
</p>

<p>
    You can read a more detailed analysis and set of aesthetic motivations in my thesis here: <a target="_blank" href="https://harnessing.xyz/projects/annealing-strategies">https://harnessing.xyz/projects/annealing-strategies</a>
</p>
    
<style>
    video {
        display: block;
        margin: 0 auto;
        width: 50%;
        height: auto;
        padding-top: 20px;
        padding-bottom: 20px;
    }
</style>