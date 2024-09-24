<template>
    <div class="alert alert-success sticky-bottom my-4" v-show="(store.message)" v-on:click="handleClose">
        <strong>Message</strong>
        <hr>
        <p>
           {{ store.message }}
        </p>
    </div>
</template>

<script setup>
    import { useMessageStore } from '@/stores/message';

    const store = useMessageStore()
     //funcion de evento para cerrar el tooltip de message
     function handleClose(){
        store.message = null
    }
</script>