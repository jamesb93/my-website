<script>
    import { page } from '$app/stores';

    const sidebarLinks = [
        {link: '/projects/interferences', text: 'Interferences'},
        {link: '/projects/intersymmetric', text: 'Intersymmetric Works'},
        {link: '/projects/alucita', text: 'Alucita II'},
        {link: '/projects/reconstruction-error', text: 'Reconstruction Error'},
        {link: '/projects/biomimicry', text: 'Biomimicry'},
        {link: '/projects/stitchstrata', text: 'Stitch/Strata'}
    ]
</script>

<div id='container'>
    <div id='sidebar'>
        {#each sidebarLinks as project}
            <a class='sidebar-link' href={project.link} class:sel={$page.path === project.link}>{project.text}</a>
        {/each}
    </div>
    
    <div id='project'>
        <slot />
    </div>

    <div id='empty-right' />
</div>


<style>
    #container {
        display: grid;
        gap: 20px;
        justify-items:center;
        grid-template-areas:
            "sidebar"
            "project"
            "empty-right"
    }

    #sidebar {
        grid-area: sidebar;
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: max-content;
        margin-right: 50px;
        text-align:left;
        justify-self: left;
    }

    #project {
        grid-area: project;
    }

    .sidebar-link {
        color: black;
        text-decoration: none;
        font-size: 15px;
    }

    .sidebar-link:hover {
        color:white;
        text-decoration: underline;
    }

    .sel {
        font-weight: bold;
    }

    #empty-right {
        width: 100%;
        min-width: 1px;
    }

    /* Media Queries */
    @media (min-width: 853px) {
        #container {
            grid-template-columns: 1fr 3fr 1fr;
            grid-template-areas:
            "sidebar project empty-right"
        }
    }
    @media (max-width: 853px) {
        #container {
            grid-template-rows: auto auto;
            grid-template-areas:
            "sidebar"
            "project"
        }

        #project {
            width: 100%;
        }
    }

</style>
