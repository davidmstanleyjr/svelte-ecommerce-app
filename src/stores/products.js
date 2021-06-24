import { writable, derived } from "svelte/store";
import  url from "../strapi/URL";
import getProducts from "../strapi/getProducts";
import localProducts from "../localProducts";


const store1 = writable(flattenProducts([...localProducts]));


const store = writable([], () => {
  setProducts();
  return () => {};
});


async function setProducts() {
  let products = await getProducts();
  if (products) {
    products = flattenProducts(products);
    store.set(products);
  }
}

// flatten products
function flattenProducts(data) {
  return data.map(item => {
    let image = item.image.url;
    // let image = `${url}${item.image.url}`;
    return {...item, image};
  });
}
// featured store
export const featuredStore = derived(store, $featured => {
  return $featured.filter(item => item.featured === true);
});

export const featuredStore1 = derived(store1, $featured => {
  return $featured.filter(item => item.featured === true);
});


export default store;
