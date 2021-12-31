<script>
	import '../app.scss';
	import { page } from '$app/stores';
	import Hamburger from '$lib/Hamburger.svelte';
	const breakpoint = 1200;
	let w;
	let expand = false;
	$: navExpand = w >= breakpoint || expand;

	const sidebarLinks = [
		{link : '/code', text: 'Code'},
		{link : '/performances', text: 'Performances'},
		{link : '/publications', text: 'Publications'},
	]
	const projects = [
		{link: '/projects/time-diagram', text: 'Time Diagram'},
		{link: '/projects/interferences', text: 'Interferences'},
		{link: '/projects/intersymmetric', text: 'Intersymmetric'},
		{link: '/projects/alucita', text: 'Alucita II'},
		{link: '/projects/reconstruction-error', text: 'Reconstruction Error'},
		{link: '/projects/biomimicry', text: 'Biomimicry'},
		{link: '/projects/stitchstrata', text: 'Stitch/Strata'}
	]

	const dev = [
		{link: '/dev/flucoma-learn', text: 'FluCoMa Learn'},
		{link: '/dev/intersymmetric', text: 'Intersymmetric'},
		{link: '/dev/phd', text: 'PhD Thesis'},
		{link: '/dev/es2022', text: 'Electric Spring 2022 Website'},
		{link: '/dev/patch-bay', text: 'Patch Bay'},
		{link: '/dev/simply', text: 'Simple Todo'}
	]
</script>

<svelte:window bind:innerWidth={w} />

<div class='container'>
	<div class='navigation'>
		<div id='header'>
			<a id='title' href='/'>james bradbury</a>
			<div id='subtitle'>sound + code</div>
		</div>

		{#if w < breakpoint}
		<Hamburger expanded={expand} on:click={ ()=> expand=!expand }/>
		{/if}
		{#if navExpand}
		<div class=nav-list>
			{#each sidebarLinks as pg}
			<a class='sidebar-link' href={pg.link} class:sel={$page.url.pathname === pg.link}>
			{pg.text}
			</a>
			{/each}
		</div>

		<!-- PROJECT DIVIDER -->
		<div id='project-divider'>
			Projects
		</div>

		<div class='nav-list projects'>
			{#each projects as pj}
			<a 
			class='sidebar-link project' 
			href={pj.link} 
			class:sel={$page.url.pathname === pj.link}
			>
			{pj.text}
			</a>
			{/each}
		</div>

		<!-- WEB DEV DIVIDER -->
		<!-- <div id='project-divider'>
			Web Dev
		</div>

		<div class='nav-list projects'>
			{#each dev as d}
			<a 
			class='sidebar-link project' 
			href={d.link} 
			class:sel={$page.url.pathname === d.link}
			>
			{d.text}
			</a>
			{/each}
		</div> -->
		{/if}

	</div>
	
	<!-- MAIN CONTENT -->
	<div class='main'><slot /></div>

	<div class='empty-right'></div>
</div>


<style>

	.container {
		display: grid;
		justify-content: center;
		gap: 90px;
	}

	.main {
		grid-area: main;
		min-width: 1px;
	}

	.navigation {
		grid-area: navigation;
		width: 20ch;
		height: max-content;
	}

	.empty-right {
		grid-area: empty-right;
		width: 20ch;
	}

	.nav-list {
		display: flex;
		flex-direction: column;
		padding-top: 10px;
		padding-bottom: 10px;
		gap: 3px;
	}

	.projects {
		gap: 6px;
		margin-left: 0.7em;
	}

	.sidebar-link {
		color: black;
		max-width: max-content;
		text-decoration: none;
	}

	.sidebar-link:hover {
		background-color: white;
		color: black;
		text-decoration: underline dotted grey;
	}

	.sel {
		font-weight: bold;
	}

	/* Media Queries */
	@media (min-width: 1200px) {
        .container {
			grid-template-columns: auto min(70ch, 100%) auto;
            grid-template-areas:
            "navigation main empty-right"
        }
    }
    @media (max-width: 1200px) {
        .container {
			justify-content:start;
			gap: 0px;
			grid-template-rows: auto auto;
            grid-template-areas:
            "navigation"
            "main"
        }

		.empty-right {
			display: none;
		}
    }

	#title {
		font-size: 24px;
		text-decoration: none;
		padding-top: 3px;
		padding-bottom: 3px;
		white-space: nowrap;
	}

	#title:hover {
		text-decoration: underline;
		background-color: white;
		color: black;
	}

	#subtitle {
		color: grey;
	}

	#header {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	#project-divider {
		font-weight: bold;
	}
</style>
