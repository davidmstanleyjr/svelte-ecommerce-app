<script>
    import { onMount, onDestroy } from 'svelte';
    import products from '../../stores/defaultProducts';
    let localProducts = [];
    onMount(() =>{ 
products.subscribe(value => {
    localProducts = value;
})
})
</script>

<h1>Hello from Products component</h1> 

{#each localProducts as product}

<h2>{product.title}</h2>

{/each}