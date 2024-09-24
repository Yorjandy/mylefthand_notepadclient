<template>
  <main 
  class="self_container d-flex justify-content-center align-items-center">
    <div class="row d-flex justify-content-center align-items-center shadow ">
      <div class="col-12 self_title text-center py-4 px-5 ">
        <h1 class="display-5">MyLeftHand</h1>
      </div>
      <div class="col-12 d-flex justify-content-center py-5">
        <ul class="nav nav-tabs">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{name:'login'}">iniciar sesión</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'signup'}">crear sesión</router-link>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup>
 
</script>

<style scoped>
  .self_container{
    height: 90vh;
    margin: auto;
    width: 90vw;
  }
  .self_title{
    color: var(--pale_green);
    background: var(--dark_blue_green);
  }
  .nav-link{
    color: var(--dark_blue_green);
    font-size: 25px;
    font-weight: 600;
  }
  .nav-link:hover{
    border-bottom: solid thin var(--dark_green);
  }
</style>