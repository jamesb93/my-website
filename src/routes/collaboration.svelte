<script>
    import Container from '$lib/Container.svelte';
</script>

<svelte:head>
    <title>james bradbury | collaboration</title>
</svelte:head>

<h2 id="intersymmetric">Intersymmetric Works</h2>
<p>
    Mark Fell, Rian Treanor, Joe Gilmore and myself worked together to design and create a web-based collaborative music sequencer as part of the 2020 No Bounds festival. The primary goal of this project was to enable musical interaction regardless of where the users were and to enable participants to explore different algorithmic and procedural approaches to rhythmic sequencing.
</p>
<p>
    I was responsible for the programming and helped in deciding which features this web application would have. Mark and Rian communicated their concepts and ideas to me through Max patches and discussions which was a great process of back and forth where we discussed UI/UX as well as dreamed interesting and novel ways of interacting with rhythmic patterns. Joe Gilmore created the designs for the application which I realised in the browser with HTML and CSS. 
</p>    
<p>
    The project uses a stack of Tone.js for synthesis and sequencing on top of the Svelte framework for creating the application with reusable and maintainable components. Socket.io is used a communication protocol between the frontend and a backend server which stores any number of real-time sessions that users can join and leave as they feel.
</p>

Work in progress can be found here: <a href="https://www.distrib.xyz">www.distrib.xyz</a>
<p>
    Technologies: 
    <a href="https://tonejs.github.io">Tone.js</a>, 
    <a href="https://svelte.dev">Svelte</a>, 
    <a href="https://socket.io">socket.io</a> and 
    <a href="https://nodejs.org/en/">node.js</a>
</p>

<a href="projects/alucita">
    <h2 id="alucita">Alucita II</h2>
</a>

<p>
    Alucita II is an installation artwork by Andie Brown. For this project I helped Andie by creating a suite of tools in Max that would enable more complex methods of musical control over transducers attached to wine glasses. One of her aims was to be able to explore the different harmonic resonances of glasses which could be activated through this hardware and having that synchronised to formal control over the music. Given these interests, I built Andie a relatively generic set of tools for dispensing commands to glasses based on a priority system, alongside synthesis modules that integrated tightly with these. 
</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/OwzkNA4dwNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>Technologies: Max</p>

<h2 id="metabow-toolkit">MetaBow Toolkit</h2>
<p>As part of a larger research project at the Hong Kong Baptist University, I was contracted to produce a set of tools in Max to help composers and experienced music technologists engage with gesture recognition and mapping tasks. This was designed for their currently 'private alpha' MetaBow hardware.</p>
<p>Technologies: Max</p>
<p><a href="https://github.com/jamesb93/metabow-toolkit">https://github.com/jamesb93/metabow-toolkit</a></p>

<style>
    h2 {
        padding-top: 15px;
    }

    iframe {
        display: block;
        margin: 0 auto;
        width: 90%;
    }

    a > h2 {
        color: black;
    }

    a > h2:hover {
        text-decoration: underline;
    }
</style>