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
	<div class='top'>
		<a class='name' href='/'>james bradbury | sound + code</a>
		<Navigation links={links} hide={ false } />
	</div>
	
		<!-- {#if w <= breakpoint} -->
			<!-- <div class="btn-container" class:hide={w >= breakpoint}> -->
				<!-- <Hamburger on:click={ handleExpand }/> -->
			<!-- </div> -->
		<!-- {:else} -->
		<!-- {/if} -->
	<!-- {#if expand && w < breakpoint}
	<ExpandNav 
	links={links} 
	func={ () => expand=false } 
	/>
	{/if} -->
</header>

<style>
	header {
        position: fixed;
        background: #fdfdfd;
        width: 100%;
		opacity: 0.93;
		top: 0;
		padding-top: 10px;
		padding-bottom: 10px;
		margin-bottom: 20px;
		z-index: 200;
		border-bottom: 1px solid rgba(222, 222, 222, 0.386);
	}

	.top {
		display: flex;
        flex-direction: column;
        justify-content: center;
		text-align: center;
		gap: 10px;
		margin: 0 auto;
	}

	.name {
        color:rgb(0, 0, 0);
		font-size: 30px;
        font-weight: bold;
		text-decoration: none;
		max-width: fit-content;
		margin: 0 auto;
		padding: 10px;
		white-space: nowrap;
		text-align: center;
	}

	.name:hover {
		text-decoration: underline;
	}

	.hide {
		display: none;
	}
</style>
