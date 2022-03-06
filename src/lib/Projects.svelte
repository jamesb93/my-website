<script>
	import { projects } from './projects';
	import { hovered } from '$lib/app';
</script>

<div class="container">
	{#each projects as project}
		<a
			class="project"
			class:hov={$hovered === project.name}
			href={project.href}
			on:mouseenter={() => {
				$hovered = project.name;
			}}
			on:mouseleave={() => {
				$hovered = '';
			}}
		>
			<figure>
				<img src={project.img} alt="" />
				<figcaption>{project.name}</figcaption>
			</figure>
		</a>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1em;
	}

	.project {
        aspect-ratio: 1;
		display: grid;
		grid-template-rows: auto auto;
		place-items: center;
		outline: 1px solid var(--feature-color2);
		text-decoration: none;
	}

	.hov,
	.project:hover {
		background-color: var(--feature-color2);
	}

	figure {
		margin: 0;
		padding: 1em;
	}

	figcaption {
		font-weight: bold;
		color: black;
	}

	img {
		width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
	}
</style>
