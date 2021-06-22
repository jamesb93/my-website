<script>
	import Hamburger from './Hamburger.svelte';
	import Navigation from './Navigation.svelte';
	import ExpandNav from './ExpandNav.svelte';

	const links = [
		'projects', 
		'code', 
		'publications',
		'performances'
	]

	const breakpoint = 1280;
	let w;
	$: expand = w > breakpoint;

	function handleExpand() {
		expand = !expand
	}

	function handleWindowClick(e) {
		const id = e.target.id
		if (id !== 'expandnav' && id !== 'hamburger') {
			expand = false
		}
	}

	function handleKeyDown(e) {
		if (e.key === 'Escape')
			expand = false
	}
</script>

<svelte:window bind:innerWidth={w} on:click={ handleWindowClick } on:keydown={ handleKeyDown }/>

<header>
	<div class="top">
		<a class='name' href='./'>james bradbury</a>
	
		{#if w <= breakpoint}
			<div class="btn-container" class:hide={w >= breakpoint}>
				<Hamburger on:click={ handleExpand }/>
			</div>
		{:else}
			<Navigation links={links} hide={ w <= breakpoint } />
		{/if}
	</div>
	{#if expand && w < breakpoint}
	<ExpandNav 
	links={links} 
	func={ () => expand=false } 
	/>
	{/if}
</header>

<style>
	header {
        position: fixed;
        background: #fdfdfd;
        width: 100%;
		opacity: 0.93;
		top: 0;
		padding-top: 20px;
		z-index: 200;
	}

	.top {
		display: flex;
        flex-direction: row;
        justify-content: space-between;
		width: 60%;
		margin: 0 auto;
	}

	.name {
        color:rgb(0, 0, 0);
		font-size: 24px;
        font-weight: bold;
	}

	.hide {
		display: none;
	}
</style>
