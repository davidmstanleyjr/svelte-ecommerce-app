import {writable} from 'svelte/store';
// checks if the user has logged in before checking out
const user = writable({username: null, jwt: null});

export default user;