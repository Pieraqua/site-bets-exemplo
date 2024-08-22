<template>
    <!-- Navbar horizontal app -->
    <NavbarSports></NavbarSports>

    <!-- Abas página inicial -->
    <div>
        <v-btn-toggle mandatory class="mt-1" v-model="pagina">
            <v-btn size="small"  :ripple="false" variant="tonal" value="destaques" rounded="xl" class="bg-white mt-2 mb-2 ml-2 mr-1">
                <template v-slot:prepend>
                    <v-icon :color="pagina == 'destaques' ? 'red' : 'grey'">mdi-square</v-icon>
                </template>
                Destaques
            </v-btn>
            <v-btn size="small" :ripple="false" variant="tonal" value="agenda" rounded="xl" class=" bg-white mt-2 mb-2 mr-1">
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
         <v-slide-group id="slide_partidas_destaque" style="min-height:172px">
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

         </v-slide-group>
        <!-- Display de jogos -->
         <DisplayJogos titulo="Popular" icone="mdi-crown" cor-icone="orange" :partidas="partidas_destaque"
            :links_topo="links_topo_popular" :icones_topo="icones_topo_popular">
            <CartaoJogoPrincipal></CartaoJogoPrincipal>
        </DisplayJogos>
         <DisplayJogos titulo="Ao Vivo" icone="mdi-access-point" cor-icone="red" :partidas="partidas_destaque"
            :links_topo="links_topo_aovivo" :icones_topo="icones_topo_aovivo">
            <CartaoJogoPrincipal></CartaoJogoPrincipal>
        </DisplayJogos>
        <div class="mr-0 ml-2">
            <v-btn variant="tonal" :ripple="false" block>Ir para Ao Vivo
                <template v-slot:append>
                    <v-icon>mdi-arrow-right</v-icon>
                </template>
            </v-btn>
        </div>
         <DisplayJogos titulo="Próximos" icone="mdi-clock" cor-icone="blue" :partidas="partidas_destaque"
            :links_topo="links_topo_proximos" :icones_topo="icones_topo_proximos">
            <CartaoJogoPrincipal></CartaoJogoPrincipal>
        </DisplayJogos>
    </div>

    <!-- Pagina de Agenda -->
    <div class="ma-4" v-else>
        <h3>Agenda</h3>
    </div>

    <!-- Escolha do formato das odds -->
     <div style="margin:0 auto; width:fit-content" >
        <h4 class="text-overline text-grey-lighten-1 float-left mr-2">FORMATO DAS ODDS</h4>
        <v-select class="" variant="solo-filled" flat density="compact" v-model="formato_odds" max-width="200px" :items="lista_formatos"></v-select>
        <h5 class="text-grey-lighten-1 mb-2" style="margin: 0 auto; width:fit-content">Textotextotexto</h5>
     </div>


    <!-- Informações legais -->
</template>

<script lang="ts" setup>
    import {Partida} from '@/dataclasses/partida'
    const pagina = ref('destaques');
    const formato_odds = ref('Europeu');

    const lista_formatos = ['Europeu', 'Americano', 'Hong Kong', 'Indonésia', 'Malaio', 'Fracionário'];
    const partidas_destaque = [
        new Partida({
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
        }),
        new Partida({
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
            oddsEmpate: 1.3,
            statusPartida: false
        }),
        new Partida({
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
            oddsEmpate: 1.3,
            statusPartida: false
        }),
        new Partida({
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
            oddsEmpate: 1.3,
            statusPartida: false
        }),
        new Partida({
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
            oddsEmpate: 1.3,
            statusPartida: false
        }),
        new Partida({
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
            oddsEmpate: 1.3,
            statusPartida: false
        }),
        new Partida({
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
            oddsEmpate: 1.3,
            statusPartida: false
        }),
        new Partida({
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
            oddsEmpate: 1.3,
            statusPartida: false
        }),
        new Partida({
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
            oddsEmpate: 1.3,
            statusPartida: false
        }),
    ];

    const links_topo_popular = ['Futebol', 'Futebol Americano'];
    const icones_topo_popular = ['mdi-soccer', 'mdi-football'];

    const links_topo_aovivo = ['Futebol', 'FIFA', 'Basquete', 'Tênis', 'Counter-Strike', 'Vôlei', 'League of Legends', 'FIFA: Volta', 'eCorrida de Cavalos', 'Handebol', 'Tênis de mesa', 'eLuta', 'NBA 2K', 'Beisebol', 'eCricket', 'eAtirador', 'Futsal', 'eSoccer', 'eBasketball'];
    const icones_topo_aovivo = ['mdi-soccer', 'mdi-football', 'mdi-soccer', 'mdi-football', 'mdi-football', 'mdi-soccer', 'mdi-football', 'mdi-football', 'mdi-soccer', 'mdi-football', 'mdi-football', 'mdi-soccer', 'mdi-football', 'mdi-football', 'mdi-soccer', 'mdi-football', 'mdi-football', 'mdi-soccer', 'mdi-football', 'mdi-football', 'mdi-soccer', 'mdi-football'];

    const links_topo_proximos = ['Futebol', 'FIFA', 'Basquete', 'Tênis', 'Counter-Strike', 'Vôlei', 'League of Legends', 'FIFA: Volta', 'eCorrida de Cavalos', 'Handebol', 'Tênis de mesa', 'eLuta', 'NBA 2K', 'Beisebol', 'eCricket', 'eAtirador', 'Futsal', 'eSoccer', 'eBasketball'];
    const icones_topo_proximos = ['mdi-soccer', 'mdi-football', 'mdi-soccer', 'mdi-football', 'mdi-football', 'mdi-soccer', 'mdi-football', 'mdi-football', 'mdi-soccer', 'mdi-football', 'mdi-football', 'mdi-soccer', 'mdi-football', 'mdi-football', 'mdi-soccer', 'mdi-football', 'mdi-football', 'mdi-soccer', 'mdi-football', 'mdi-football', 'mdi-soccer', 'mdi-football'];

</script>

<style lang="css">
</style>