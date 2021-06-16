<script>
import {
    onMount
} from 'svelte';
import {
    navigate,
    link
} from 'svelte-routing';
import user from '../stores/user';
import cart, {
    cartTotal
} from '../stores/cart';
import submitOrder from '../strapi/submitOrder';

let name = '';
// stripe variables
let cardElement;
let cardErrors;
let card;
let stripe;
let elements;

$: isEmpty = !name;

// doesn't allow user to go to the checkout page by typing in the URL
onMount(() => {
    if (!$user.jwt) {
        navigate('/');
        return;
    }
    if ($cartTotal > 0) {
        stripe = Stripe(
            'pk_test_51J21TSIqwC4uAJxr3n6yu3oGuXfwTdbapUeO1rZJRhSF8BQ302NDGuUO6k7nt8uhAGxYNIeHBtlE2pnx5AxjjmCj00vNPTy32S'
        );
        elements = stripe.elements();
        card = elements.create('card');
        card.mount(cardElement);
        card.addEventListener('change', function(event) {
            if (event.error) {
                cardErrors.textContent = event.error.message;
            } else {
                cardErrors.textContent = '';
            }
        });
    }

});

async function handleSubmit() {
    let response = await stripe.createToken(card).catch(error => console.log(error));
    const {
        token
    } = response;
    if (token) {
    const { id } = token;
    let order = await submitOrder({name, total:$cartTotal, items:$cart, stripeTokenId:id, userToken:$user.jwt});
    console.log(order);
        // token id
        // submit order
    } else {
        
    }
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
            <input type="text" id="name" bind:value={name} />
        </div>
        <!-- end of single input -->

        <!-- stripe stuff -->
        <div class="stripe-input">
            <!-- info -->
            <label for="card-element">Credit or Debit</label>
            <p class="stripe-info">
                Test using this credit card:
                <span>4242 4242 4242 4242</span>
                <br />
                enter any 5 digits for the zip code
                <br />
                enter any 3 digits for the CVC
            </p>

            <div id="card-element" bind:this={cardElement}>
                <!-- stripe -->
            </div>
            <div id="card-errors" bind:this={cardErrors} role="alert" />
        </div>

        <!-- end of stripe stuff -->

        <!-- error message -->
        {#if isEmpty}
        <p class="form-empty">please fill out the name field</p>
        {/if}
        <!-- submit button -->
        <button type="submit" class="btn-btn-block btn-primary" disabled={isEmpty} class:disabled={isEmpty}
            >submit</button
            >
            </form>
            </section>
            {:else}
            <div class="checkout-empty">
                <h2>your cart is empty</h2>
                <a href="/products" use:link class="btn btn-primary">fill it</a>
            </div>
            {/if}
