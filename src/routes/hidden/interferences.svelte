<script>
    import Waveform from '$lib/Waveform.svelte'
</script>

<h1>Interferences</h1>

<div id='music-container'>

    <div id='item'>
        <h2>G090G10564620B7Q</h2>
        <audio controls>
            <source
            type='audio/mp3'
             src='https://user.fm/files/v2-8c477bc22134b8f78453a4b917ad8768/G090G10564620B7Q.mp3'
             >
        </audio>
    </div>

    <div id='item'>
        <h2>P_08_19</h2>
        <audio controls>
            <source
            type='audio/mp3'
            src='https://user.fm/files/v2-2682faf4835f97d6145e5d85b7a9da91/P%2008_19.mp3'
             >
        </audio>
    </div>


</div>

<style>
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