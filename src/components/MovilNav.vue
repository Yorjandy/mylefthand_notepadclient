<template>
    <nav class="sticky-top bg-light">
      <div class="container-fluid shadow  mb-3" >
         <div class="row navbar">
            <div class="col-6 col-sm-6 col-md-4">
               <a href="#" class="navbar-brand">
                  <h1 class="display-5">MyLeftHand</h1>
               </a>
            </div>
            <div class="col-6 col-sm-6 col-md-4">
               <ul class="nav justify-content-end">
                  <li class="nav-item">
                     <router-link :to="{name:'new'}" class="nav-link text-center">
                        <img src="../assets/plus-square.svg" alt="plus-icon" width="30"/>
                     </router-link>
                  </li>
               </ul>
            </div>
            <div class="col-12 col-sm-12 col-md-4">
               <div class="input-group">
                  <div class="input-group-prepend">
                     <span class="input-group-text" id="basic-addon1">
                        <img src="../assets/search.svg" alt="searhc-icon" width="24">
                     </span>
                  </div>
                  <input type="text" class="form-control" placeholder="note title" aria-label="note title" aria-describedby="basic-addon1" v-model="title" v-on:keyup="handleSearch">
               </div>
            </div>
         </div>
      </div>
   </nav>
</template>

<script setup>
   import { defineEmits, ref } from 'vue';
   
   const title = ref()
   const emits = defineEmits(['handle-search'])

   function handleSearch(){
      emits('handle-search',title.value)
   }
</script>

<style scoped>
  
   .display-5{
      color: var(--dark_green);
      font-weight: 425;
   }
   .nav-link:hover{
      cursor:pointer;
   }
   .form-control{
      border: solid 1px var(--blue_green);
   }
   .input-group-text{
      background-color: var(--dark_blue_green);
   }
</style>