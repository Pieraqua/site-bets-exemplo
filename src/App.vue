<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="horizontal-nav">
    <h1>PieBets</h1>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/sobre">Sobre</RouterLink>
  </nav>

  <div class="main">
    <RouterView />
  </div>
</template>

<style scoped>
nav.horizontal-nav  
{
  background-color: darkorange;
  margin: 0;
  padding: 0;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  position: fixed
}
nav.horizontal-nav  *
{
  display: inline-block;
  padding-left: 1rem
}
.main
{
  margin-top: 5rem;
}

</style>
