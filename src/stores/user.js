import {writable} from 'svelte/store';
// checks if the user has logged in before checking out
const userStore = writable(getStorageUser());

function getStorageUser() {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, jwt: null };
}

// sets within local storage the user key
export function setStorageUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function setUser(user) {
  userStore.set(user);
}

export function logoutUser() {
  localStorage.clear();
  userStore.set({ user: null, jwt: null });
}

export default userStore;