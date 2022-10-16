<script>
    import Social from "$lib/components/Social.svelte";
    import { discord, github, stackoverflow } from "$lib/Icons";
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<div class="card">
    <h1 class="title">
        Hey there! I am <span class="text-primary">Koll Potato</span>
    </h1>
    <div class="socials">
        <Social icon={github} name="GitHub" link="https://github.com/KollPotato"/>
        <Social icon={stackoverflow} name="StackOverflow" link="https://stackoverflow.com/users/17249411/koll"/>
        <Social icon={discord} name="Discord" link="https://discordapp.com/users/635867082751344641"/>
    </div>
</div>

<style>
    .card {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        transform: translateY(-6%);
        z-index: -1;
    }
    .card .title {
        font-weight: 800;
        font-size: 42px;
    }
    .card .socials {
        display: flex;
        flex-direction: row;
        z-index: 100;
        gap: 10px;
    }
</style>
