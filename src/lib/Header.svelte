<script>
	import Hamburger from './Hamburger.svelte';
	import Navigation from './Navigation.svelte';
	import ExpandNav from './ExpandNav.svelte';
	import { fly } from 'svelte/transition';

	const links = [
		'projects', 
		'code', 
		'publications',
		'performances'
	]

	const breakpoint = 1280;
	let w;
	$: expand = w > breakpoint;

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
	
		{#if w <= breakpoint}
			<div class="btn-container" transition:fly class:hide={w >= breakpoint}>
				<Hamburger func={handleExpand}/>
			</div>
		{:else}
			<Navigation links={links} hide={ w <= breakpoint } />
		{/if}
	</div>
	<ExpandNav 
	links={links} 
	func={ () => expand = false } 
	hide={ !expand || w > breakpoint } 
	/>
</header>

<style>
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
        justify-content: space-between;
		width: 60%;
		margin: 0 auto;
	}

	.name > a {
        color:rgb(0, 0, 0);
		font-size: 24px;
    }

    .name > a {
        font-weight: bold;
    }

	.name > a:hover {
		color: white;
	}

	.hide {
		display: none;
	}
</style>
