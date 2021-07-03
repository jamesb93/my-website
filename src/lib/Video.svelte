<script>
    export let url = ''
    const webm = `/vid/${url}.webm`
    const mp4 = `/vid/${url}.mp4`
</script>

<video controls>
    <source src={webm} type='video/webm'>
    <source src={mp4} type='video/mp4'>
    Sorry, your browser doesn't support embedded videos.
</video>

<style>
    video { max-width: 100% }
</style>

