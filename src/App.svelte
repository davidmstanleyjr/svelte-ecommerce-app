<script>
	// pages
	import Login from './pages/Login.svelte';
	import Checkout from './pages/Checkout.svelte';
	import ProductTemplate from './pages/ProductTemplate.svelte';
	import Products from './pages/Products.svelte';
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';

	// router
	import { Router, Route, Link } from 'svelte-routing';

	// components
	import Navbar from './components/Navbar/Navbar.svelte';
	import Sidebar from './components/Navbar/Sidebar.svelte';
	// global store 
	import globalStore from './stores/globalStore';
	

</script>

<Router>
	<Navbar />
	{#if $globalStore.sidebar}
	<Sidebar />
	{/if}
	<Route path='/' component={Home} />
	<Route path='/about' component={About} />
	<Route path='/login' component={Login} />
	<Route path='/products' component={Products} />
	<Route path='/products/:id' component={ProductTemplate} />

</Router>

