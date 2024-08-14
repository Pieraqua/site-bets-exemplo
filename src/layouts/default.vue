<template>
  <v-app>
    <v-app-bar :elevation="2">
      <v-app-bar-title>PieBets
        <v-btn class="ma-2" to="home">Home</v-btn>
        <v-btn class="ma-2" to="sobre">Sobre</v-btn>
        <v-btn class="ma-2" to="bets">Bets</v-btn></v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-gift"></v-btn>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-cog"></v-btn>
        <v-btn class="ma-1" variant="outlined">REGISTRAR</v-btn>
        <v-btn class="ma-1" color="green">ENTRAR</v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
