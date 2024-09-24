<template>
    <div class="alert alert-danger sticky-bottom my-4" v-show="(store.error)" v-on:click="handleClose">
        <strong>Error</strong>
        <hr>
        <p>
            {{ store.error }}
        </p>
    </div>
</template>

<script setup>
    import { useErrorStore } from '@/stores/error';

    const store = useErrorStore()
    //funcion de evento para cerrar el tooltip de error
    function handleClose(){
        store.error = null
    }
</script>