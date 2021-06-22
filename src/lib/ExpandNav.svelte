<script>
    import { fly } from 'svelte/transition';
    export let links;
    export let func;
</script>

<nav 
id='expandnav'
class='links' 
in:fly={{ y: -150, duration: 300 }}
out:fly={{ y: -150, duration: 300 }}

>
    {#each links as link}
        <a on:click={func} href=/{link}>
            {link}
        </a>
    {/each}
</nav>

<style>

.links {
    background-color: rgba(255, 255, 255, 0.906);
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 30;
}

.links > a {
    font-size: 24px;
    display: block;
    margin: 0 auto;
    margin: 20px;
    max-width: 50%;
    align-self: center;
    padding: 5px;
}

a {
    color: black;
}
	
a:hover {
color: white;
}
</style>