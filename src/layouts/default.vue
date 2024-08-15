<template>
  <v-app>
    <NavbarHorizontalOverlay @open="open()"></NavbarHorizontalOverlay>
    <NavbarVerticalOverlay :open="open_overlay"/>
    <v-main>
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import NavbarHorizontalOverlay from '@/components/NavbarHorizontalOverlay.vue';
const open_overlay = ref(false);
function open()
{
  open_overlay.value = !open_overlay.value
}
  //
</script>
