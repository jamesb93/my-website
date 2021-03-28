<script>
    import Waveform from "$lib/Waveform.svelte";
</script>

“Annealing Strategies” is a system, piece and patch that optimises and searches a chaotic parameter space using the process of simulated annealing. This algorithm mimics the physical mechanism of gradually cooling metal in order to remove internal stresses to strengthen it. The algorithm shares similarities with, and in a way is an improvement on the hill climbing algorithm, with the addition of a ‘temperature’ coefficient that allows for local minima and maxima to be escaped from. Random decisions are allowed with respect to this coefficient, meaning the system is volatile and explorative at high temperatures and more conservative and exploitative at low temperatures. As the system is cooled the system hones in on an optimised solution. 

The sound generating guts of the system are a digital emulation of Peter Blasser’s [(Ciat-Lonbarde)](https://www.ciat-lonbarde.net) [Fyrall](https://www.ciat-lonbarde.net/fyrall/index.html). A single input is used to control the 24 parameters of the synthesis engine by reading through a procedural basis function. You can see a small webm of me playing with this interface below.

<video controls loop>
    <source src="https://f000.backblazeb2.com/file/jb-website/webm/jitbfg.webm" type="video/webm">
    <track kind="captions">
</video>

The output of the Fourses synthesiser controlled through this mechniams is measured in decibels using an EBUR128 loudness descriptor. This forms a complex mapping between a single dial and the loudness descriptor with the complex coupled parameters between these. The simulated annealing algorithm searches for an input parameter that minimises this loudness descriptor, creating a pathway towards a quiet state.

<style>
    video {
        display: block;
        margin: 0 auto;
        width: 50%;
        height: auto;
    }
</style>