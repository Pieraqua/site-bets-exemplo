<template>
    <!-- Navbar horizontal app -->
    <NavbarSports></NavbarSports>

    <!-- Abas página inicial -->
    <div>
        <v-btn-toggle mandatory class="mt-1" v-model="pagina">
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
    </div>

    <!-- Pagina de destaques -->
    <div class="ma-4" v-if="pagina == 'destaques'">
        <!-- Jogos futuros -->
        <CartaoPartida v-for="partida in partidas_destaque"
            :campeonato="partida.campeonato"
            :tempo_partida="partida.tempo_partida"
            :time_1="partida.time_1"
            :time_1_icon="partida.time_1_icon"
            :time_1_pontos="partida.time_1_pontos"
            :time_2="partida.time_2"
            :time_2_icon="partida.time_2_icon"
            :time_2_pontos="partida.time_2_pontos"
            :odds1="partida.odds1"
            :odds2="partida.odds2"
            :odds-empate="partida.oddsEmpate"
            :status-partida="partida.statusPartida"></CartaoPartida>
        <!-- Display de jogos -->
    </div>

    <!-- Pagina de Agenda -->
    <div class="ma-4" v-else>
        <h3>Agenda</h3>
    </div>

    <!-- Escolha do formato das odds -->
    <v-container>
        <v-row align="center" justify="center" no-gutters>
            <v-col cols="2">
                <h4 class="text-overline">FORMATO DAS ODDS</h4>
            </v-col>
            <v-col cols="2" >
                <v-select variant="solo-filled" class="elevation-0" density="compact" v-model="formato_odds" max-width="200px" :items="lista_formatos"></v-select>
            </v-col>
        </v-row>
    </v-container>

    <!-- Informações legais -->
</template>

<script lang="ts" setup>
    const pagina = ref('destaques');
    const formato_odds = ref('Europeu');

    const lista_formatos = ['Europeu', 'Americano', 'Hong Kong', 'Indonésia', 'Malaio', 'Fracionário'];
    const partidas_destaque = [
        {
            campeonato: 'Espanha - La Liga',
            tempo_partida: "65' 2ª parte",
            time_1: 'Time 1',
            time_1_icon: 'src/assets/time1_icone.png',
            time_1_pontos: 1,
            time_2: 'Time 2',
            time_2_icon: 'src/assets/time2_icone.png',
            time_2_pontos: 0,
            odds1: 1.5,
            odds2: 1.8,
            oddsEmpate: 1.3,
            statusPartida: true
        },
        {
            campeonato: 'Grécia - Super Liga',
            tempo_partida: "Hoje, 15:00",
            time_1: 'Time 1',
            time_1_icon: 'src/assets/time1_icone.png',
            time_1_pontos: 1,
            time_2: 'Time 2',
            time_2_icon: 'src/assets/time2_icone.png',
            time_2_pontos: 0,
            odds1: 1.5,
            odds2: 1.8,
            oddsEmpate: 1.3
        }
    ]
</script>

<style lang="scss">
</style>