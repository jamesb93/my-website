<script>
    import Project from "$lib/Project.svelte"
</script>

<svelte:head>
    <title>james bradbury | projects</title>
</svelte:head>

This is a list of several projects I've worked on over the last few years. If you want to learn more clicking each one can take you to a separate page with more information.
<div id="project-container">
<!-- <Project url="experiments-in-interference">
    <img src="/static/img/re.jpg" class="thumb" slot="image" alt="reconstruction-error"/> 
    <span class="title" slot="title">Experiments In Interference</span>
    <span class="caption" slot="caption">Raw data is harvested from my hard drive and classified and categorised by machine listening and learning software. This album is a collection of my compositions with the sounds that the computer found.</span>
</Project> -->
    <Project url="intersymmetric">
        <!-- <img src="/img/re.jpg" class="thumb" slot="image" alt="reconstruction-error"/>  -->
        <span class="title" slot="title">Intersymmetric Works</span>
        <span class="caption" slot="caption">This project is in collaboration with Mark fell, Rian Treanor and Joe Gilmore. Together we created a web-based collaborative sequencer for exploring algorithmic rhythmic transformation and sequencing.</span>
    </Project>

    <Project url="alucita">
        <!-- <img src="/img/re.jpg" class="thumb" slot="image" alt="reconstruction-error"/>  -->
        <span class="title" slot="title">Alucita II</span>
        <span class="caption" slot="caption">Alucita II is a glass installation by Andie Brown. I helped program the Max patch which manages transduction timing and scheduling for the chorus of glasses.</span>
    </Project>

    <Project url="reconstruction-error">
        <img src="/img/re.jpg" class="thumb" slot="image" alt="reconstruction-error"/> 
        <span class="title" slot="title">Reconstruction Error</span>
        <span class="caption" slot="caption">Raw data is harvested from my hard drive and classified and categorised by machine listening and learning software. This album is a collection of my compositions with the sounds that the computer found.</span>
    </Project>

    <Project url="annealing-strategies">
        <!-- <img src="/static/img/re.jpg" class="thumb" slot="image" alt="annealing-strategies"/>  -->
        <span class="title" slot="title">Annealing Strategies</span>
        <span class="caption" slot="caption">
            A simulated annealing engine searches a chaotic 24 parameter space with the simple task of finding the quietest possible parameter combination. 
        </span>
    </Project>

    <Project url="stitchstrata">
        <!-- <img src="/static/img/re.jpg" class="thumb" slot="image" alt="stitch-strata"/>  -->
        <span class="title" slot="title">Stitch/Strata</span>
        <span class="caption" slot="caption">This piece is based on several strategies for automatically concatenating vocal segments into small phrases with the aid of the computer.</span>
    </Project>

    <Project url="biomimicry">
        <img src="/img/biomimicry.png" class="thumb" slot="image" alt="biomimicry"/> 
        <span class="title" slot="title">Biomimicry</span>
        <span class="caption" slot="caption">Biomimicry is a co-compositional system that analyses improvised input with audio descriptors. Using the model of a synthetic faulty memory the computer attempts to mimic the textural qualities of the input signal.</span>
    </Project>
</div>


<style>
    .title {
        font-size: 17px;
        font-weight: bold;
        padding-bottom: 3px;
    }
</style>