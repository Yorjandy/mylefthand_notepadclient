<template>
    <main class="container rounded-5 shadow py-5 px-4">
        <form v-on:submit.prevent="handleSave">
            <div class="form-gruop d-flex justify-content-end">
                <button type="submit" class="btn btn-sm">
                    <img src="../assets/three-dots.svg" alt="save-icon">
                    Guardar
                </button>
                <router-link :to="{name:'dashboard'}" class="btn btn-sm">
                    <img src="../assets/arrow-clockwise.svg" alt="navigate-icon">
                    Volver
                </router-link>
            </div>
            <div class="from-group">
                <input type="text" placeholder="Title" required v-model="title">
            </div>
            <div class="from-group">
                <textarea placeholder="Note content here" required v-model="text"></textarea>
            </div>
        </form>       
    </main>
    <!--error component-->
    <ErrorVue/>
    <!--message component-->
    <MessageVue/>
</template>

<script setup>
    import { NoteService } from '@/services/NoteService';
    import { useErrorStore } from '@/stores/error';
    import { useMessageStore } from '@/stores/message';
    import ErrorVue from '@/components/ErrorVue.vue';
    import MessageVue from '@/components/MessageVue.vue';
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';

    const title = ref(null)
    const text = ref(null)
    const storeError = useErrorStore()
    const storeMessage = useMessageStore()
    const router = useRouter()

    //funcion de evento de guardado
    async function handleSave(){
        const service = new NoteService()
        try{
            if(title.value && text.value){
                let response = await service.createNote(title.value,text.value)
                if(response){
                    storeMessage.message = "La nota se ha guardado con exito en el sistema :)"
                    router.replace({name:'dashboard'})
                }
                else{
                    storeError.error = "No se ha podido guardar la nota, ha ocurrido un error en el servidor :("
                }
            }
        }
        catch(e){
            storeError.error = "Error de servidor, el servicio no esta disponible :("
        }
        finally{
            setTimeout(()=>{
                        storeError.error = null
                        storeMessage.message = null
                    },4000)
        }
    }

</script>

<style scoped>
    input{
        width: 100%;
        border: none;
        border-bottom: 1px solid var(--pale_blue_green);
        font-size: 30px;
        font-weight: 500;
        color: var(--dark_blue_green);
        opacity: 0.5;
        transition:.1s ease;
    }
    input:focus{
        outline: none;
        border-bottom: solid 2px var(--blue_green);
        opacity: 1;
        transition:.1s ease;
    }
    textarea{
        width: 100%;
        height: 70vh;
        border: none;
        font-size: 20px;
        padding: 10px 0;
        color: var(--dark_green);
        border: none;
        border-bottom: 1px solid var(--pale_blue_green);
        opacity: 0.5;
        transition: .1s ease;
    }
    textarea:focus{
        outline: none;
        border-bottom: solid 3px var(--blue_green);
        opacity: 1;
        transition: .1s ease;
    }
    .d-flex{
        gap: 25px;
        margin-bottom:20px;
    }
    .btn{
        color: var(--dark_blue_green);
        font-size: 17px;
        transition: .1s ease;
    }
    .btn:hover{
        border: solid 1px var(--blue_green);
        border-radius: 5px;
        transition: .1s ease;
    }
</style>