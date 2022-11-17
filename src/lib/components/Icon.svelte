<script lang="ts">
    import { BASE_URL } from "src/constants";


    export let icon: string 

    const fetchIcon = async (name: string) => {
        const response = await fetch(`${BASE_URL}/assets/icons/${name}.svg`)
        return response.text()
    }
</script>

<div class="icon">
    {@html icon}
</div>