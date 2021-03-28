<script>
    import Project from "$lib/Project.svelte"
</script>

<svelte:head>
    <title>james bradbury | projects</title>
</svelte:head>

This is a list of several projects I've worked on over the last few years. Most of these are my own amongst some collaborations with other artists mostly in a technical capacity.

<Project url="reconstruction-error">
    <img src="https://f000.backblazeb2.com/file/jb-website/img/re.jpg" class="thumb" slot="image" alt="reconstruction-error"/> 
    <span class="title" slot="title">Reconstruction Error</span>
    <span class="caption" slot="caption">Raw data is forced into audio file format using </span>
</Project>

<Project url="annealing-strategies">
    <img src="https://f000.backblazeb2.com/file/jb-website/img/re.jpg" class="thumb" slot="image" alt="annealing-strategies"/> 
    <span class="title" slot="title">Annealing Strategies</span>
    <span class="caption" slot="caption">
        A simulated annealing engine searches a chaotic 24 parameter space with the simplet ask of finding the quietest possible parameter combination. 
    </span>
</Project>

<Project url="stitchstrata">
    <img src="https://f000.backblazeb2.com/file/jb-website/img//re.jpg" class="thumb" slot="image" alt="stitch-strata"/> 
    <span class="title" slot="title">Stitch/Strata</span>
    <span class="caption" slot="caption">This piece is based on several strategies for automatically concatenating vocal segments into small phrases with the aid of the computer.</span>
</Project>

<Project url="biomimicry">
    <img src="https://f000.backblazeb2.com/file/jb-website/img//biomimicry.png" class="thumb" slot="image" alt="biomimicry"/> 
    <span class="title" slot="title">Biomimicry</span>
    <span class="caption" slot="caption">Biomimicry is a co-compositional system that analyses improvised input with audio descriptors. Using the model of a synthetic faulty memory the computer attempts to mimic the textural qualities of the input signal.</span>
</Project>

<Project url="alucita">
    <img src="https://f000.backblazeb2.com/file/jb-website/img/alucita.jpg" class="thumb" slot="image" alt="alucita"/> 
    <span class="title" slot="title">Alucita II</span>
    <span class="caption" slot="caption">For this project I created a Max patch that allowed Andie to fluidly dispense commands to an array of transducer driven glasses. Part of the Max patch implemented some strategies for manipulating real-time recordings of those glasses such as spectral freezing and harmonic manipulation.</span>
</Project>

<style>
    .title {
        font-size: 17px;
        font-weight: bold;
    }

    .caption {
        line-height: 1.2;
    }
</style>