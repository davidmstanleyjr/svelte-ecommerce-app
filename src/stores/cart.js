import { writable } from 'svelte/store';
import localCart from '../localCart';

const store = writable([ ...localCart ]);

export default store;
