<script lang="ts">
    import NavBarItem from "./NavBarItem.svelte";

    const items: Array<{ text: string, link: string }> = [
        { text: "Home", link: "" }
    ]

</script>

<nav>
    {#each items as item}
        <NavBarItem text={ item.text } path={ item.link }/>
    {/each}
</nav>


<style>
    nav {
        display: flex;
        flex-direction: row;
        padding: 6px 12px;
    }

    nav :global(a) {
        padding: 12px 10px;
    }
</style>