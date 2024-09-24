<template>
    <main class="container-fluid d-flex align-items-center justify-content-center">
        <form class="container shadow rounded-5 p-4" v-on:submit.prevent="signupUser">
            <div class="row">
                <div class="col-12 pb-5">
                    <h2 class="text-center">Crear sesión</h2>
                    <span class="d-flex justify-content-center">
                        o:<router-link class="nav-link px-2" :to="{name:'login'}">iniciar</router-link>
                    </span>
                </div>
            </div>
            <div class="form-group my-4">
                <label for="email">Email</label>
                <input type="email" class="form-control form-control-lg" id="email" aria-describedby="emailhelp" placeholder="user@example.com" required v-model="email">
                <small class="form-text form-muted" id="emailhelp">introduzca su email aqui</small>
            </div>
            <div class="form-group my-4">
                <label for="password">Password</label>
                <input type="password" id="password"  class="form-control form-control-lg" aria-describedby="passhelp" required v-model="password">
                <small id="passhelp" class="form-text form-muted">introduzca su clave</small>
            </div>
            <div class="form-group my-4 d-flex justify-content-start">
                <button type="submit" class="btn btn-sm px-4 mx-2">registrar</button>
                <button type="reset" class="btn btn-sm px-4 mx-2">cancelar</button>
            </div>
            <div class="form-group my-2">
                <div class="alert alert-danger" v-show="(error == true)">
                    <strong>Error</strong>
                    <hr>
                    <span>{{ store.message }}</span>
                </div>
            </div>
        </form>
    </main>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '@/stores/auth';

    const email = ref()
    const password = ref()
    const router = useRouter()
    const store = useAuthStore()
    const error = ref(false)

    async function signupUser(){
        if(email.value && password.value){
            await store.startSession('signup',email
            .value,password.value)
            if(store.token){
                router.replace({name:'dashboard'})
            }
            else{
                error.value = true
            }
        }
    }
</script>

<style scoped>
    .container-fluid{
        height: 100vh;
    }
    h2{
        font-size: 50px;
        font-weight: 500;
        color: var(--dark_blue_green);
    }
    span{
        font-size: 22px;
        color: var(--dark_blue_green);
    }
    .nav-link{
        color: var(--blue_green);
    }
    label{
        color: var(--dark_blue_green);
        font-size: 30px;
        font-weight: 500;

    }
    small{
        color: var(--blue_green);
        font-weight: 300;
        font-size: 17px;
    }
    button{
        color: var(--milk_green);
        background-color: var(--dark_blue_green);
        font-size: 22px;
        font-weight: 600;
    }
    button:hover{
        color: var(--dark_blue_green);
        background-color: var(--milk_green);
    }
</style>