<template>
    <!-- Navbar horizontal app -->
    <NavbarSports></NavbarSports>

    <!-- Abas página inicial -->
     <v-btn-toggle class="mt-1" v-model="pagina">
        <v-btn :ripple="false" variant="tonal" value="destaques" rounded="xl" class="mt-2 mb-2 ml-2 mr-1">
            <template v-slot:prepend>
                <v-icon :color="pagina == 'destaques' ? 'red' : 'grey'">mdi-square</v-icon>
            </template>
            Destaques
        </v-btn>
        <v-btn :ripple="false" variant="tonal" value="agenda" rounded="xl" class="mt-2 mb-2 mr-1">
            <template v-slot:prepend>
                <v-icon :color="pagina == 'agenda' ? 'purple' : 'grey'">mdi-calendar</v-icon>
            </template>
            Agenda
        </v-btn>

     </v-btn-toggle>

    <div v-if="pagina == 'destaques'">
    <!-- Jogos futuros -->

    <!-- Display de jogos -->

    </div>
    <div v-else>
        <h3>Agenda</h3>
    </div>

    <!-- Escolha do formato das odds -->

    <!-- Informações legais -->
</template>

<script lang="ts" setup>
    const pagina = ref('destaques');
</script>

<style lang="scss">
</style>