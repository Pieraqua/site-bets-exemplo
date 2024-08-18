<template>
<v-card class="pa-0 ma-0 bg-grey-lighten-4 mr-3" width="366px" style="font-size:small" elevation="0">
        <v-container fluid class="pa-1 ma-0">
            <!-- Informação do campeonato + data da partida -->
            <v-row no-gutters>
                <v-col style="opacity: 0.6" class="me-auto">
                    <v-icon size="small">mdi-soccer</v-icon>
                    {{ campeonato }}
                </v-col>
                <v-col cols="auto">
                    <div v-if="statusPartida">
                        <span style="color:blue; margin-right: 5px">{{ tempo_partida }}</span>
                        <v-icon color="red">mdi-access-point</v-icon>
                    </div>
                    <div v-else style="opacity: 0.6">
                        {{ tempo_partida }}
                    </div>
                </v-col>
            </v-row>

            <!-- Icones -->
            <v-row no-gutters class="mt-2">
                <v-col cols="auto" class="me-auto">
                    <div style="width:32px; height:32px">
                        <v-img :src="time_1_icon" max-width="32px" max-height="32px"/>
                    </div>
                </v-col>
                <v-spacer></v-spacer>
                    <v-col v-if="statusPartida" cols="auto">
                        <v-sheet rounded="lg" border class="text-center bg-grey-lighten-4 pt-1 pb-1 pr-2 pl-2" opacity="0.6">
                            {{ time_1_pontos }}
                        </v-sheet>
                    </v-col>
                    <v-col v-if="statusPartida" cols="auto">
                        <v-sheet rounded="lg" border class="text-center bg-grey-lighten-4 pt-1 pb-1 pr-2 pl-2 ml-1" opacity="0.6">
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
            <v-row no-gutters  class="mt-3">
                <v-col cols="auto" class="me-auto">
                    {{ time_1 }}
                </v-col>
                <v-col cols="auto">
                    {{ time_2 }}
                </v-col>
            </v-row>

            <!-- Odds -->
            <v-row no-gutters class="mt-4">
                <v-col>
                    <v-card link class="bg-grey-lighten-3 pa-2 mr-1" elevation="0">
                        <v-row>
                            <v-col cols="auto" class="me-auto">
                                1
                            </v-col>
                            <v-col cols="auto">
                                {{ odds1 }}
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card link class="bg-grey-lighten-3 pa-2" elevation="0">
                        <v-row>
                            <v-col cols="auto" class="me-auto">
                                empate
                            </v-col>
                            <v-col cols="auto">
                                {{ oddsEmpate }}
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card link class="bg-grey-lighten-3 pa-2 ml-1" elevation="0">
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
        </v-container>
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
