<script>
    import SmallNavbar from './SmallNavbar.svelte';
    import BigNavbar from './BigNavbar.svelte';
    import globalStore from '../../stores/globalStore';

    let screenWidth;
    // hides sidebar when screen is greater than 992px
    $: if (screenWidth > 992) {
        globalStore.toggleItem('sidebar', false);
 
    }

</script>
<!-- screenWidth logic -->
<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth > 992}

<BigNavbar />

{:else}
<SmallNavbar />

{/if}
