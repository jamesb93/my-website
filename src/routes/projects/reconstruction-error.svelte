<h1>Reconstruction Error</h1>

<div class="img-box">
    <img src="https://f000.backblazeb2.com/file/jb-website/img/re.jpg">
    <p>Artwork made by the wonderful <a target="_blank" href="https://www.angelaguyton.com">Angela Guyton</a></p>
</div>

<p>
    Reconstruction Error is an album of works created with a combination of databending, machine listening and machine learning. I wrote <a href="https://boblsturm.github.io/aimusic2020/papers/CSMC__MuMe_2020_paper_6.pdf">an article</a> and gave an online presentation at the 2020 AI Music Creativity Conference that discusses how these technologies are at work throughout the album.
</p>
<p>
    I began writing this album by scraping raw data from my hard drive and converting it to WAV audio files. I originally performed this with the <a href="http://sox.sourceforge.net">SoX command-line program</a> and eventually <a href="https://github.com/jamesb93/mosh">mosh</a>, a tool I wrote with the help of Francesco Cameli. This generated around 20000 files of mostly noise. The album emerged from this self inflincted problem as I developed methods for filtering, searching and querying this unwieldy corpus of sounds for those with novel qualities, morphologies and sonic behaviours.
</p>
<p>
    This technology-led creative process spawned the first version of <a href="https://github.com/jamesb93/ftis">FTIS (Finding Things In Stuff)</a>, a framework for orchestrating machine listening and machine learning for computer-aided composition.
</p>

<p>Below is my presentation from the 2020 AI Music Creativity Conference.</p>
<iframe height="256" width="1000" src="https://www.youtube.com/embed/-FNO0QovfsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<style>

    .img-box {
        float: left;
        max-width: 45%;
        margin-right: 10px;

    }

    .img-box > p {
        font-style: italic;
        font-size: 12px;
        text-align: center;
    }

    .img-box > img {
        max-width: 100%;
    }

    iframe {
        max-width: 100%;
        padding-top: 10px;
    }
</style>

