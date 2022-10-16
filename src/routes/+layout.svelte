<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
	import "$lib/styles/style.scss"
</script>

<div class="app">
	<NavBar/>
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	main {
		height: 100%;
		width: 100%;
	}

</style>

