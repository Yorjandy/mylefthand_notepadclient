<template>
    <nav class="container-fluid bg-light sticky-top pt-1">
      <div class="container rounded-5 shadow my-5 px-4">
         <div class="row navbar">
            <div class="col-4 col-sm-6 col-md-4">
               <a href="#" class="navbar-brand">
                  <h1 class="display-5">MyLeftHand</h1>
               </a>
            </div>
            <div class="col-5 col-sm-12 col-md-5">
               <div class="input-group">
                  <div class="input-group-prepend">
                     <span class="input-group-text" id="basic-addon1">
                        <img src="../assets/search.svg" alt="search-icon" width="26">
                     </span>
                  </div>
                  <input type="text" class="form-control" placeholder="note title" aria-label="note title" aria-describedby="basic-addon1" v-model="title" v-on:keyup="handleSearch">
               </div>
            </div>
            <div class="col-2 col-sm-6 col-md-2">
               <ul class="nav justify-content-end">
                  <li class="nav-item">
                     <router-link :to="{name:'new'}" class="nav-link navbar-brand">
                        <img src="../assets/plus-lg.svg" alt="plus-icon" width="24">
                        nueva
                     </router-link>
                  </li>
               </ul>
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
   .nav-link{
      font-weight: 500;
      color: var(--dark_blue_green);
   }
   .nav-link:hover{
      cursor: pointer;
      color: var(--milk_green);
   }
   .form-control{
      border: solid 1px var(--dark_blue_green);
      font-size: 14px;
      color: var(--dark_blue_green);
      font-weight: 500;
   }
   .input-group-text{
      background-color: var(--blue_green);
   }
</style>