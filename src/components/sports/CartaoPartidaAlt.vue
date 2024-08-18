<template>
    <v-card flat class="bg-grey-lighten-2 pa-2 pl-4 pr-2" min-width="300px" rounded="lg" style="font-size:small">
            <v-container class="pa-0 ma-0">
                <!-- Info campeonato -->
                <v-row no-gutters class="pb-1">
                    <v-col style="opacity: 0.6" cols="12">
                        <v-btn variant="plain" :ripple="false" class="ma-0 pa-0" size="small">
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
                            <span style="color:blue; margin-right: 5px">{{ partida.tempo_partida }}</span>
                            <v-icon color="red" class="float-right pr-3">mdi-access-point</v-icon>
                        </div>
                        <div v-else style="opacity: 0.6">
                            {{ partida.tempo_partida }}
                        </div>
                    </v-col>
                </v-row>
                <!-- Emblema e nome time 1 -->
                <v-row no-gutters>
                    <v-col>
                        <div class="float-left" style="width:32px; height:32px">
                            <v-img :src="partida.time_1_icon" max-width="32px" max-height="32px"/>
                        </div>
                        <span class="float-left mt-2 mb-2 ml-2">
                        {{ partida.time_1 }}
                        </span>

                        <v-card v-if="partida.statusPartida" class="float-right pa-1 ma-1 pl-2 pr-2">
                            {{partida.time_1_pontos}}
                        </v-card>
                    </v-col>

                </v-row>
                <!-- Emblema e nome time 2 -->
                <v-row no-gutters  class="pb-1">
                    <v-col >
                        <div class="float-left" style="width:32px; height:32px">
                            <v-img :src="partida.time_2_icon" max-width="32px" max-height="32px"/>
                        </div>
                        <span class="float-left mt-2 mb-2 ml-2">
                        {{ partida.time_2 }}
                        </span>
                        <v-card v-if="partida.statusPartida" class="float-right pa-1 ma-1 pl-2 pr-2">
                            {{partida.time_2_pontos}}
                        </v-card>
                    </v-col>

                </v-row>
                <!-- 1x2 -->
                <v-row no-gutters>
                    <v-col style="opacity: 0.6">
                        1x2
                    </v-col>
                </v-row>
                <!-- Odds -->
                <v-row no-gutters class="mt-2" style="font-size:smaller">
                    <v-col>
                        <v-card :ripple="false" link class="bg-grey-lighten-4 pa-2 mr-1" elevation="0">
                            <v-row>
                                <v-col cols="auto" class="me-auto">
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
                                <v-col cols="auto" class="me-auto">
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
                                <v-col class="me-auto">
                                    2
                                </v-col>
                                <v-col cols="auto">
                                    {{ partida.odds2 }}
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col cols="1">
                        <v-card link :ripple="false" class="bg-grey-lighten-4 ml-1 pt-2 pb-2 d-flex justify-center" elevation="0">
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
</style>