<script>
	import Hamburger from '$lib/Hamburger.svelte';
	import { hovered, expand } from '$lib/app';
	import { projects } from './projects';

	const breakpoint = 1100;
	let w;

	$: navExpand = w >= breakpoint || $expand;
</script>

<svelte:window bind:innerWidth={w} />

<nav class="navigation" style:opacity={1.0}>
	{#if w < breakpoint}
		<Hamburger expanded={$expand} on:click={() => ($expand = !$expand)} />
	{/if}

	{#if navExpand}
	<div class="nav-list projects">
		{#each projects as pj}
			<a
				class:hov={$hovered === pj.name}
				class="sidebar-link"
				href={pj.href}
				on:mouseenter={() => {$hovered = pj.name}}
				on:mouseleave={() => {$hovered = ''}}
				on:click={() => {$expand = false}}
			>
				{pj.name}
			</a>
		{/each}
	</div>

	<div class="nav-list">
		<a on:click={() => {$expand = false}} class="sidebar-link" href="/publications">Publications</a>
		<a on:click={() => {$expand = false}} class="sidebar-link" href="/performances">Performances</a>
		<a on:click={() => {$expand = false}} class="sidebar-link" href="/whoami">whoami</a>
	</div>
	{/if}
</nav>

<style>
	.navigation {
		grid-area: navigation;
		width: 20ch;
		height: max-content;
		opacity: 1.0;
		background-color: white;
	}
	.nav-list {
		display: flex;
		flex-direction: column;
		margin-top: 10px;
		margin-bottom: 10px;
		gap: 3px;
	}
	@media (max-width: 1100px) { /* small */
		.navigation {
			/* position: absolute; */
			width: 100%;
			left: 0;
			padding-left: 2em;
			z-index: 999;
		}
	}
	.projects {
		gap: 6px;
	}
	.sidebar-link {
		color: black;
		max-width: max-content;
		text-decoration: none;
	}
	.hov, .sidebar-link:hover {
		background-color: var(--feature-color);
		color: white;
	}
</style>
