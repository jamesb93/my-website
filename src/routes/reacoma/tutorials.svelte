<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    onMount(async() => [
        goto('https://www.youtube.com/watch?v=r3uHMXmlPRo&list=PLCQRw62RgghbsZgsA98lLkOwjBSs4yc9T')
    ])
</script>