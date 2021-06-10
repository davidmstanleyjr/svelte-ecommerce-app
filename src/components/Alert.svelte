<script>
    import {fly, fade} from 'svelte/transition';
    import globalStore from '../stores/globalStore';
    import {onMount, onDestroy} from 'svelte';

    const handleClose = () => {
        globalStore.toggleItem('alert', false);
    };
</script>

<div class="alert-container" in:fly={{y:-200, duration:1000}} out:fade={{duration:0}}
class:alert-danger={$globalStore.alertDanger}
>
    <div class="alert">
<p>{$globalStore.alertText}</p>
<button on:click={handleClose} class='alert-close'>
    <i class="fas fa-window-close"></i>
</button>
</div>
</div>