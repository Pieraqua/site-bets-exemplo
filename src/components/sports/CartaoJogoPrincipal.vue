<template>
    <v-card flat class="fill-height pa-md-4 pa-0 pb-0  justify-center" style="background: #e3e8eb" max-height="651px">
        <v-container float style="max-width:432px; height:100%">
            <v-row no-gutters class="mb-1 font-weight-medium pb-md-6" justify="center">
                <v-col cols="auto">
                    <v-icon class="mr-2" color="orange">mdi-crown</v-icon>Jogo Principal
                </v-col>
            </v-row>
            <v-row no-gutters justify="center" class="text-body-2 font-weight-medium text-grey text-uppercase pb-md-2">
                <v-col cols="auto">O evento começa dentro de</v-col>
            </v-row>
            <v-row no-gutters justify="center" class="text-h4 font-weight-medium text-center text-grey-darken-3 pb-md-6">
                <v-col cols="3"><p>00</p><p class="text-grey text-body-2">dias</p></v-col>
                <v-col cols="1">:</v-col>
                <v-col cols="2"><p>00</p><p class="text-grey text-body-2">horas</p></v-col>
                <v-col cols="1">:</v-col>
                <v-col cols="3"><p>00</p><p class="text-grey text-body-2">minutos</p></v-col>
            </v-row>

            <!-- Info campeonato -->
            <v-row no-gutters align="center">
                <v-col style="opacity: 0.6" cols="6">
                    <v-btn variant="plain" :ripple="false" class="ma-0 pa-0 text-body-2" size="small">
                        <template v-slot:prepend>
                            <v-icon size="small">mdi-soccer</v-icon>
                        </template>
                        Itália - Série A
                    </v-btn>
                </v-col>
                <v-col cols="6" class="text-right text-body-2 texto-fundo font-weight-medium" >
                    Hoje, 15:00
                </v-col>
            </v-row>
            <!-- Bet dos times -->
            <v-row no-gutters justify="center" class="pb-md-3">
                <v-col>
                    <v-card link :ripple="false" elevation="0" class=" bg-grey-lighten-4 text-center mr-2 pa-2 fill-height" min-height="192px">
                        <v-row no-gutters align="center" justify="center" class="h-75">
                            <v-col>
                                <v-img height="72px" width="72px" class="mx-auto" src="@/assets/time1_icone.png"></v-img>
                                <p class="text-body-2">Time 1</p>
                            </v-col>
                        </v-row>
                        <v-row align="end" no-gutters class="h-25">
                            <v-col>
                                <p class="text-body-1 font-weight-medium texto-fundo" style="opacity: 1">6</p>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="2">
                    <v-card link :ripple="false" elevation="0" class="text-center bg-grey-lighten-4  fill-height pa-2">
                        <v-row no-gutters align="center" class="h-75">
                            <v-col>
                                <div class="text-center">
                                    <p class="my-auto text-h6 text-grey">X</p>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row align="end" no-gutters class="h-25">
                            <v-col>
                                <p class="text-body-1 font-weight-bold texto-fundo" style="opacity: 1">4</p>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card link :ripple="false" elevation="0" class="text-center bg-grey-lighten-4  ml-2 pa-2 fill-height">
                        <v-row no-gutters align="center" justify="center" class="h-75">
                            <v-col>
                                <v-img height="72px" width="72px" class="mx-auto" src="@/assets/time2_icone.png"></v-img>
                                <p class="text-body-2">Time 2</p>
                            </v-col>
                        </v-row>
                        <v-row align="end" no-gutters class="h-25">
                            <v-col>
                                <p class="text-body-1 font-weight-medium texto-fundo" style="opacity: 1">4</p>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Valor aposta -->
            <v-row no-gutters class="py-2">
                <v-text-field variant="plain" density="compact" class="input-last text-h3 bg-white" suffix="$" v-model="valor_aposta"></v-text-field>
            </v-row>

            <!-- Valores padrão -->
            <v-row no-gutters class="py-2">
                <v-col cols="12">
                    <v-btn-toggle color="blue-darken-2" density="compact" style="width:100%" v-model="valor_aposta" >
                        <v-row no-gutters justify="space-between">
                            <v-col class="mr-2">
                                <v-btn block rounded="xl" :ripple="false" class="bg-white py-2" value="5">5</v-btn>
                            </v-col>
                            <v-col class="mr-2">
                                <v-btn block rounded="xl" :ripple="false" class="bg-white py-2" value="10">10</v-btn>
                            </v-col>
                            <v-col class="mr-2"> 
                                <v-btn block rounded="xl" :ripple="false" class="bg-white py-2" value="25" >25</v-btn>
                            </v-col>
                            <v-col>
                                <v-btn block rounded="xl" :ripple="false" class="bg-white py-2" value="50">50</v-btn>
                            </v-col>
                        </v-row>
                    </v-btn-toggle>
                </v-col>
            </v-row>

            <!-- Efetuar aposta -->
            <v-row no-gutters justify="center" class="pt-2">
                <v-col cols="8">
                    <v-btn block flat :ripple="false" rounded="xl">EFETUAR APOSTA</v-btn>
                </v-col>
            </v-row>
                
            <v-row no-gutters justify="space-between" align="center" class="pt-md-6">
                <v-col cols="1">
                    <v-btn size="x-small" elevation="0" :ripple="false" class="bg-white" icon="mdi-arrow-left"></v-btn>
                </v-col>
                <v-col cols="auto">
                    <v-btn variant="plain" size="x-small" class="text-none" append-icon="mdi-arrow-right">Ir para o Evento</v-btn>
                </v-col>
                <v-col cols="1">
                    <v-btn size="x-small"  elevation="0" :ripple="false" class="bg-white" icon="mdi-arrow-right"></v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script setup lang="ts">
    const valor_aposta = ref(5);
</script>

<style scoped>
.input-last{
    height: 30px
}

.input_last >>> .v-text-field__suffix__text {
    font-size: 12px;
  }
.input-last >>> .v-field__input {
    min-height: auto !important;
    display: flex !important;
    align-items: center !important;
    margin: 0px;
    padding: 5px;
    text-align: end;
    height: 30px;
  }
.input-last >>> .v-text-field__suffix {
    min-height: auto !important;
    display: flex !important;
    align-items: center !important;
    padding: 5px;
    height: 30px;
  }
</style>