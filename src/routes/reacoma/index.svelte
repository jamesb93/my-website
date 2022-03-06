<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(async () => [goto('https://www.github.com/reacoma')]);
</script>
