<template>
    <v-card flat class="pa-2 pl-4 pr-2" min-width="300px" rounded="lg" style="font-size:small; background: #e3e8eb">
        <v-container class="pa-0 ma-0">
            <!-- Info campeonato -->
            <v-row no-gutters class="pb-1">
                <v-col style="opacity: 0.6" cols="12">
                    <v-btn variant="plain" :ripple="false" class="ma-0 pa-0 text-capitalize" size="small">
                        <template v-slot:prepend>
                            <v-icon size="small">mdi-soccer</v-icon>
                        </template>
                        {{ partida.campeonato }}
                    </v-btn>
                    <v-card flat link class="ma-0 pa-0 float-right" style="background-color: transparent;" :ripple="false">
                        <v-icon class="ma-0 pa-0" size="small">mdi-signal</v-icon>
                    </v-card>
                </v-col>
            </v-row>
            <!-- Dados partida -->
            <v-row no-gutters  class="pb-1">
                <v-col cols="12">
                    <div v-if="partida.statusPartida">
                        <span style="color:rgb(11, 162, 247); margin-right: 5px" class="font-weight-bold">{{ partida.tempo_partida }}</span>
                        <v-icon color="red" class="float-right pr-3">mdi-access-point</v-icon>
                    </div>
                    <div v-else class="texto-fundo">
                        {{ partida.tempo_partida }}
                    </div>
                </v-col>
            </v-row>
            <!-- Emblema e nome time 1 -->
            <v-row no-gutters align="center">
                <v-col>
                    <div style="width:32px; height:32px; display: inline-block">
                        <v-img :src="partida.time_1_icon" max-width="32px" max-height="32px"/>
                    </div>
                    <div class="ml-2 nome-time">
                    {{ partida.time_1 }}
                    </div>

                </v-col>
                <v-col cols="auto">
                    <div v-if="partida.statusPartida" class="rounded-lg pontos-time text-center">
                        {{partida.time_1_pontos}}
                    </div>
                </v-col>
            </v-row>
            <!-- Emblema e nome time 2 -->
            <v-row no-gutters align="center" justify="space-between" class="pb-1">
                <v-col >
                    <div style="width:32px; height:32px; display: inline-block">
                        <v-img :src="partida.time_2_icon" max-width="32px" max-height="32px"/>
                    </div>
                    <span class="ml-2 nome-time">
                    {{ partida.time_2 }}
                    </span>
                </v-col>
                <v-col cols="auto">
                    <div v-if="partida.statusPartida" class="rounded-lg pontos-time text-center">
                        {{partida.time_2_pontos}}
                    </div>
                </v-col>

            </v-row>
            <!-- 1x2 -->
            <v-row no-gutters>
                <v-col style="font-weight: 600; color: #4d4d4d; opacity: 0.5">
                    1x2
                </v-col>
            </v-row>
            <!-- Odds -->
            <v-row no-gutters class="mt-2" style="font-size:smaller">
                <v-col>
                    <v-card :ripple="false" link class="bg-grey-lighten-4 pa-2 mr-1" elevation="0">
                        <v-row>
                            <v-col cols="auto" class="me-auto texto-fundo">
                                1
                            </v-col>
                            <v-col cols="auto">
                                {{ partida.odds1 }}
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card link :ripple="false" class="bg-grey-lighten-4 pa-2" elevation="0">
                        <v-row>
                            <v-col cols="auto" class="me-auto texto-fundo">
                                empate
                            </v-col>
                            <v-col cols="auto">
                                {{ partida.oddsEmpate }}
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card link :ripple="false" class="bg-grey-lighten-4 pa-2 ml-1" elevation="0">
                        <v-row>
                            <v-col class="me-auto texto-fundo">
                                2
                            </v-col>
                            <v-col cols="auto">
                                {{ partida.odds2 }}
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="1">
                    <v-card link :ripple="false" v-bind="props" class="bg-grey-lighten-4 ml-1 pt-2 pb-2 d-flex justify-center" elevation="0">
                        <v-icon style="opacity: 0.8;">mdi-arrow-down</v-icon>
                    </v-card>
                </v-col>
                
            </v-row>
        </v-container>
    </v-card>

</template>

<script setup>
import {Partida} from '@/dataclasses/partida'
const props = defineProps({
    partida : Partida
})

</script>

<style lang="css">
.nome-time{
    overflow: hidden;
    color: #4d4d4d;
    font-weight: 600;
    height:24px;
    line-height: 24px;;
    display: inline-block;
}

.pontos-time{
    background: rgba(77, 77, 77, 0.05);
    font-size: 14px;
    border: 1px solid rgba(77, 77, 77, 0.1);
    height: 24px;
    line-height: 24px;
    align-items: center;
    font-weight: 600;
    min-width: 32px;
    justify-content: center;
    
}

.col-mask{
    mask-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%);
    overflow: hidden;
}

.texto-fundo{
    font-weight: 600; 
    opacity: 0.5; 
    color: #4d4d4d;
}
</style>