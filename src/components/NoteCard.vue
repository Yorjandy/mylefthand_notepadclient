<template>
    <div class="col-12 col-sm-12 col-md-6 col-lg-4 p-2" v-bind:id="note.id">
        <div class="card">
            <div class="card-header">
                {{ note.date_created }}
            </div>
            <div class="card-body">
                <div class="card-title">
                    {{ note.title }}
                </div>
                <div class="card-text">
                    {{ note.container }}
                </div>
                <div class="mt-2">
                    <router-link :to="{name:'set',params:{id:note.id}}" class="btn btn-sm mx-2 rounded-2">
                        <img src="../assets/three-dots-vertical.svg" alt="set-icon">
                        detalles
                    </router-link>
                    <div class="btn btn-sm mx-2 rounded-2" v-on:click="handleDelete(note.id)">
                        <img src="../assets/trash.svg" alt="delete-icon">
                        borrar
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { NoteService } from '@/services/NoteService';
    import { defineProps } from 'vue';
    import { useErrorStore } from '@/stores/error';
     //definicion de los argumentos a recibir por el componennte
     defineProps({
        note:{
            type: Object,
            required: true,
        }
    })
    //definicion de la variable de store
    const store = useErrorStore()
    //funcion de evento para borrar nota
    async function handleDelete(id){
        let service = new NoteService()
        try{
            let response = await service.deleteNote(id)
            if(response){
                let note = document.getElementById(id)
                note.style.display = 'none'
            }
            else{
                store.error = "No fue posible borrar la nota por el servidor :("
            }
        }
        catch(e){
            store.error = 'Error de servidor, el servicio no esta disponible :('
        }
        finally{
            setTimeout(()=>{
                        store.error = null
                    },4000)
        }
    }
</script>

<style scoped>
    .card-header{
        color: var(--pale_green);
        font-size: 15px;
        opacity: 0.5;
        background-color: var(--dark_blue_green);
    }
    .card-title{
        color: var(--dark_blue_green);
        font-size: 25px;
        font-weight: 500;
    }
    .card-text{
        color: var(--dark_green);
        font-size: 17px;

    }
    .btn{
        border: solid 1px var(--blue_green);
        color: var(--blue_green);
    }
</style>