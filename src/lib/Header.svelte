<script>
	import Hamburger from './Hamburger.svelte';
	import Navigation from './Navigation.svelte';
	import ExpandNav from './ExpandNav.svelte';
	import { fly } from 'svelte/transition';

	const links = [
		'projects', 
		'collaboration',
		'code', 
		'publications',
		'performances'
	]

	const breakpoint = 800;
	let w;
	let expand = false;

	function handleExpand(){
		expand = !expand
	}
</script>

<svelte:window bind:innerWidth={w} />

<header>
	<div class="top">
		<div class='name'>
			<a href='/'>james bradbury</a>
		</div>
	
		{#if w < breakpoint}
			<div class="btn-container" transition:fly class:hide={w >= breakpoint}>
				<Hamburger func={handleExpand}/>
			</div>
		{:else}
			<Navigation links={links} hide={w < breakpoint}/>
		{/if}
	</div>
	<ExpandNav links={links} func={() => expand = false} hide={!expand} />
</header>

<style lang="scss">
	header {
        position: fixed;
        background: #fdfdfd;
        width: 100%;
		opacity: 0.93;
		top: 0;
		padding-top: 20px;
		z-index: 99;
	}

	.top {
		display: flex;
        flex-direction: row;
        justify-content: space-around;
		flex-wrap: wrap;
		width: 100%;
        height: 50px;
	}

	.name > a {
        color:rgb(0, 0, 0);
		font-size: 24px;
    }

    .name > a {
        font-weight: bold;
    }

	.hide {
		display: none;
	}
</style>
