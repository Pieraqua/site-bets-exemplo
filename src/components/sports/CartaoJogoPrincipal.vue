<template>
    <v-card min-width="382px" height="100%" flat class="bg-grey-lighten-2">
        <v-card-title class="mt-4 mb-4  text-center">
            <v-icon class="mr-2" color="orange">mdi-crown</v-icon>Jogo Principal
        </v-card-title>

        <v-card-subtitle class="text-uppercase  text-center">
            <v-container float>
                <v-row no-gutters>
                    <v-col>O evento começa dentro de</v-col>
                </v-row>
                <v-row no-gutters justify="center" class="text-h4 font-weight-bold">
                    <v-col>00</v-col>
                    <v-col cols="1">:</v-col>
                    <v-col>00</v-col>
                    <v-col cols="1">:</v-col>
                    <v-col>00</v-col>
                </v-row>
                <v-row no-gutters justify="center">
                    <v-col>dias</v-col>
                    <v-col cols="1"></v-col>
                    <v-col>horas</v-col>
                    <v-col cols="1"></v-col>
                    <v-col>minutos</v-col>
                </v-row>
            </v-container>
        </v-card-subtitle>

        <v-card-text class="ma-0 pa-0">
            <v-container float class="ma-0 pa-0 pl-4 pr-3">
                <!-- Info campeonato -->
                <v-row no-gutters align="center">
                    <v-col style="opacity: 0.6" cols="12">
                        <v-btn variant="plain" :ripple="false" class="ma-0 pa-0" size="small">
                            <template v-slot:prepend>
                                <v-icon size="small">mdi-soccer</v-icon>
                            </template>
                            Itália - Série A
                        </v-btn>
                        <v-div class="float-right" style="opacity:0.6">
                            Hoje, 15:00
                        </v-div>
                    </v-col>
                </v-row>
                <!-- Bet dos times -->
                <v-row no-gutters class="justify-space-between">
                    <v-col cols="5">
                        <v-card link :ripple="false" class="text-center mr-2">
                            <v-img class="mt-4 ml-10 mr-10" src="@/assets/time1_icone.png"></v-img>
                            <p class="ma-2">Time 1</p>
                            <p class="ma-2 mt-6 text-h6">6</p>
                        </v-card>
                    </v-col>
                    <v-col cols="2">
                        <v-card link :ripple="false" class="text-center fill-height">
                            <div class="h-75 text-center ">
                                <p class="my-auto pt-10 text-h6 text-grey">X</p>
                            </div>
                            <div class="h-25 " >
                                <p class="text-h6 pt-1 my-auto ">4</p>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="5">
                        <v-card link :ripple="false"  class="text-center ml-2">
                            <v-img class="mt-4 ml-10 mr-10" src="@/assets/time2_icone.png"></v-img>
                            <p class="ma-2">Time 2</p>
                            <p class="ma-2 mt-6 text-h6">4</p>
                        </v-card>
                    </v-col>
                    
                </v-row>

                <!-- Valor aposta -->
                <v-row no-gutters class="mt-8">
                    <v-text-field variant="plain" density="compact" class="input-last text-h3 bg-white" suffix="$" v-model="valor_aposta"></v-text-field>
                </v-row>

                <!-- Valores padrão -->
                <v-row no-gutters class="mt-4" >
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
                <v-row no-gutters justify="center" class="mt-4">
                    <v-col cols="8">
                        <v-btn block flat rounded="xl">EFETUAR APOSTA</v-btn>
                    </v-col>
                </v-row>
                
            </v-container>
        </v-card-text>

        <v-card-actions class="justify-space-between ma-0 mt-auto py-0">
            <v-btn size="x-small" class="bg-white" icon="mdi-arrow-left"></v-btn>
            <v-btn variant="plain" size="x-small" class="text-none" append-icon="mdi-arrow-right">Ir para o Evento</v-btn>
            <v-btn size="x-small" class="bg-white" icon="mdi-arrow-right"></v-btn>
        </v-card-actions>
        
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