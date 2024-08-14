<template>
  <v-app>
    <NavbarHorizontalOverlay></NavbarHorizontalOverlay>
    <v-main>
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import NavbarHorizontalOverlay from '@/components/NavbarHorizontalOverlay.vue';

  //
</script>
