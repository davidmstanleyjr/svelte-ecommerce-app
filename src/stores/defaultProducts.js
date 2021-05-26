import { writable } from 'svelte/store';
import localProducts from '../localProducts';

const store = writable([ ...localProducts ]);

// subscribe
//set
// update

export default store;
