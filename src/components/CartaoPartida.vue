<template>
<v-card class="pa-1 px-2 ma-0 bg-blue mr-3 rounded-lg" image="https://api-g-c7818b61-607.sptpub.com/api/v1/promo/banner/brand/2159350821555417088/image/2421374248703627267" height="152px" width="366px" min-width="366px" style="font-size:small; align-content: space-between" elevation="0">
        <!-- Informação do campeonato + data da partida -->
        <v-row no-gutters align="center" >
            <v-col class="me-auto">
                <v-btn variant="plain" :ripple="false" color="white" class="ma-0 pa-0 text-capitalize" size="small" >
                    <template v-slot:prepend>
                        <v-icon size="small">mdi-soccer</v-icon>
                    </template>
                    {{ campeonato }}
                </v-btn>
            </v-col>
            <v-col cols="auto" >
                <div v-if="statusPartida">
                    <span style="color: lightskyblue; margin-right: 5px">{{ tempo_partida }}</span>
                    <v-icon color="red">mdi-access-point</v-icon>
                </div>
                <div v-else style="opacity: 0.6">
                    {{ tempo_partida }}
                </div>
            </v-col>
        </v-row>

        <v-spacer></v-spacer>

        <!-- Icones -->
        <v-row no-gutters class="mt-2" align="center" justify="space-between">
            <v-col class="me-auto" cols="auto">
                <div style="width:32px; height:32px">
                    <v-img :src="time_1_icon" max-width="32px" max-height="32px"/>
                </div>
            </v-col>
            <v-spacer></v-spacer>
                <v-col cols="auto" v-if="statusPartida">
                    <v-sheet rounded="lg" border class="pontos-time text-center">
                        {{ time_1_pontos }}
                    </v-sheet>
                </v-col>
                <v-col cols="auto" class="ml-1" v-if="statusPartida" >
                    <v-sheet rounded="lg" border class="text-center pontos-time">
                        {{ time_2_pontos }}
                    </v-sheet>
                </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
                <div style="width:32px; height:32px">
                    <v-img :src="time_2_icon" max-width="32px" max-height="32px"/>
                </div>
            </v-col>
        </v-row>

        <!-- Nomes dos times -->
        <v-row no-gutters align="center" >
            <v-col cols="auto" class="me-auto font-weight-medium">
                {{ time_1 }}
            </v-col>
            <v-col cols="auto" class="font-weight-medium">
                {{ time_2 }}
            </v-col>
        </v-row>

        <v-spacer></v-spacer>

        <!-- Odds -->
        <v-row no-gutters class="align-self-end pt-5">
            <v-col>
                <v-card :ripple="false" link class="text-white px-1 mr-1" style="background-color: rgba(255,255,255,0.3); height:32px; align-content:center" elevation="0">
                    <v-row no-gutters>
                        <v-col cols="auto" class="me-auto" >
                            1
                        </v-col>
                        <v-col cols="auto">
                            {{ odds1 }}
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card :ripple="false" link class="text-white px-1" style="background-color: rgba(255,255,255,0.3); height:32px; align-content:center" elevation="0">
                    <v-row>
                        <v-col cols="auto" class="me-auto" style="opacity: 1">
                            empate
                        </v-col>
                        <v-col cols="auto">
                            {{ oddsEmpate }}
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col>
                <v-card :ripple="false" link class="text-white px-1 ml-1" style="background-color: rgba(255,255,255,0.3); height:32px; align-content:center" elevation="0">
                    <v-row>
                        <v-col class="me-auto">
                            2
                        </v-col>
                        <v-col cols="auto">
                            {{ odds2 }}
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
    campeonato: String,
    tempo_partida : String,
    time_1: String,
    time_1_icon: String,
    time_1_pontos: Number,
    time_2: String,
    time_2_icon: String,
    time_2_pontos: Number,
    odds1: Number,
    odds2: Number,
    oddsEmpate: Number,
    statusPartida: Boolean
})
</script>

<style lang="css" scoped>

.texto-fundo{
    font-weight: 600; 
    opacity: 0.5; 
    color: #4d4d4d;
}

.pontos-time{
    background: rgba(140, 140, 140, 0.8);
    font-size: 14px;
    border: 1px solid rgba(77, 77, 77, 0.1);
    height: 32px;
    line-height: 32px;
    align-items: center;
    font-weight: 600;
    min-width: 24px;
    color: rgba(255,255,255,0.8);
    width: fit-content;
}
</style>
