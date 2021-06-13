<script>
    import {onMount} from 'svelte';
    import {navigate, link} from 'svelte-routing';
    import user from '../stores/user';
    import { cartTotal } from '../stores/cart';

    let name = '';

    $: isEmpty = !name;

// doesn't allow user to go to the checkout page by typing in the URL
onMount(() => {
    if(!$user.jwt) {
        navigate('/');
    }
});

function handleSubmit() {
    console.log('form submitted');
}


</script>


{#if $cartTotal > 0}
<section class="form">
    <h2 class="section-title">checkout</h2>
    <form class="checkout-form" on:submit|preventDefault={handleSubmit}>
    <h3>order total : ${$cartTotal}</h3>
    <!-- single input -->
    <div class="form-control">
        <label for="name">your name</label>
        <input type="text" id='name' bind:value={name}>
    </div>
    <!-- end of single input -->

    <!-- stripe stuff -->

    <!-- end of stripe stuff -->

    <!-- error message -->
    {#if isEmpty}
    
    <p class='form-empty'>please fill out the name field</p>
    
    {/if}
    <!-- submit button -->
    <button type='submit' 
    class='btn-btn-block btn-primary'
    disabled={isEmpty} 
    class:disabled={isEmpty}>submit</button>


    </form>
</section>
{:else}
<div class="checkout-empty">
<h2>your cart is empty</h2>
<a href="/products" use:link class='btn btn-primary'>fill it</a>
</div>
{/if}