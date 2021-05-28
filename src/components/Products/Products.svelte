<script>
    export let title = '';
    import products from '../../stores/defaultProducts';
    import Product from './Product.svelte';
    import Loading from '../Loading.svelte';
    //let unsubscribe;
//     onMount(() =>{ 
// unsubscribe = products.subscribe(value => {
//     console.log('subscribed');
//     localProducts = value;
// });
// });
// onDestroy(() => {
//     unsubscribe();
// })

// console.log(products);
// console.log($products);
</script>

<section class='section'>
<h2 class='section-title'>{title}</h2>
<div class="products-center">
{#each $products as product (product.id)}
<Product {product} />
{:else}
<Loading />
{/each}
</div>

</section>