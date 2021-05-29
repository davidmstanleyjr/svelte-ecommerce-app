<script>
    import CartButton from '../Cart/CartButton.svelte';
    import { link } from 'svelte-routing';
</script>

<nav class="navbar">
    <div class="nav-container">
<div class="nav-center">
    <!-- nav links -->
    <p>nav links</p>
    <!-- nav logo -->
    <a href="/" use:link class='nav-logo big-logo'>
    <img src="/assets/images/logo.svg" class='logo' alt="razors logo">
    </a>
    <!-- cart toggle -->
    <div class="nav-aside">
        <CartButton />
    </div>
</div>
</div>
</nav>