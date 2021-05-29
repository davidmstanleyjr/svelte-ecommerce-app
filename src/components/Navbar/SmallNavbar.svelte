<script>
  //  cart button
  //global store
  import {link} from 'svelte-routing';
</script>

<nav class="navbar">
   <div class="nav-center">
       <!-- sidebar toggle -->
       <button class='btn-sidebar-toggle'>
           <i class="fas fa-bars"></i>
       </button>
       <!-- logo -->
       <a href="/" use:link class='nav-logo'> 
    <img src="/assets/images/logo.svg" class='logo' alt="razors logo">
    </a>
    <!-- cart button -->
    <button>cart</button>
   </div> 
</nav>