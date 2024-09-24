<template>
   <!--navbar components-->
   <MovilNav class="movil" v-on:handle-search="handleSearch"/> <!--mobile view-->
   <DesktopNav class="desktop" v-on:handle-search="handleSearch"/> <!--desktop view-->
   <!--contenedor para las notas-->
   <main class="container">
      <div class="row">
         <NoteCard v-for="note in notes" v-bind:key="note.id" v-bind:note="note" v-show="(note.title.toLowerCase().includes(title.toLowerCase()))"/>
      </div>
      <!--componente de control de errorer-->
      <ErrorVue/>
   </main>
   </template>
 

<script setup>
   import MovilNav from '@/components/MovilNav.vue';
   import DesktopNav from '@/components/DesktopNav.vue';
   import NoteCard from '@/components/NoteCard.vue';
   import ErrorVue from '@/components/ErrorVue.vue';
   import { NoteService } from '@/services/NoteService';
   import { onBeforeMount, ref } from 'vue';

   //instanciiamos el servicio a la api de notepad
   const NOTE_SERVICE = new NoteService()
   let notes = NOTE_SERVICE.getNotes()
   const title = ref('')
   //cargamos las notas antes de que se monte en componente para poder usarlas
   onBeforeMount( async()=>{
      await NOTE_SERVICE.loadNotes()
   })
   //funciones de evento
   function handleSearch(data){
      title.value = data
   }
</script>

<style scoped>
   .desktop{
      display: none;
   }
   .movil{
      display: none;
   }
   @media  (min-width: 1115px){
      .desktop{
         display: block;
      }
   }
   @media (max-width: 1115px){
      .movil{
         display: block;
      }
   }
</style>