import { writable, derived } from 'svelte/store';
import localCart from '../localCart';

// cart
const cart = writable([ ...localCart ]);

//cart total
export const cartTotal = derived(cart, ($cart) => {
	let total = $cart.reduce((acc, curr) => {
		return (acc += curr.amount * curr.price);
	}, 0);
	return total.toFixed(2);
});

// local functions
const remove = (id, items) => {
	return items.filter((item) => item.id !== id);
};
// global functions
export const removeItem = (id) => {
	cart.update((storeValue) => {
		return remove(id, storeValue);
	});
};
// localStorage

export default cart;
