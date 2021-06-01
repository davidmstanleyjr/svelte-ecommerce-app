import { writable, derived } from 'svelte/store';
import localCart from '../localCart';

const cart = writable([ ...localCart ]);

export const cartTotal = derived(cart, ($cart) => {
	let total = $cart.reduce((acc, curr) => {
		return (acc += curr.amount * curr.price);
	}, 0);
	return total.toFixed(2);
});
export default cart;
