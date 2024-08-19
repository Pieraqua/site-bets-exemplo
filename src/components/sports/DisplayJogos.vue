<template>
    <h3 class="ma-2"><v-icon class="mr-2" :color="corIcone">{{ icone }}</v-icon>{{ titulo }}</h3>
    <v-slide-group mandatory :max="1" :model-value="janelaAtual">
        <v-slide-group-item v-for="i in (links_topo).length" :value="links_topo[i-1]" v-slot="{isSelected, toggle}">
            <v-btn size="small" :ripple="false" variant="flat" rounded="xl" class="mt-2 mb-2 ml-2 mr-1 text-none" :color="isSelected ? 'blue-darken-3' : 'grey-lighten-4'" @click="toggle">
                <template v-slot:prepend>
                    <v-icon> {{ icones_topo[i-1] }}</v-icon>
                </template>
                {{ links_topo[i-1] }}
            </v-btn>
        </v-slide-group-item>
    </v-slide-group>
    <v-container class="ma-0 pa-0" fluid v-if="tipoTela() == 3">
        <v-row no-gutters >
            <!-- Cartoes menores -->
            <v-col cols="9">
                <v-row no-gutters>
                    <v-col class="ma-2" v-for="partida in props.partidas.slice(0,3)">
                        <cartao-partida-alt :partida="partida"></cartao-partida-alt>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col class="ma-2" v-for="partida in props.partidas.slice(3,6)">
                        <cartao-partida-alt :partida="partida"></cartao-partida-alt>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col class="ma-2" v-for="partida in props.partidas.slice(6,9)">
                        <cartao-partida-alt :partida="partida"></cartao-partida-alt>
                    </v-col>
                </v-row>
            </v-col>

            <!-- Cartao grande -->
            <v-col class="my-2 ml-2">
                <slot></slot>
            </v-col>
        </v-row>
    </v-container>

    <v-container class="ma-0 pa-0" fluid v-if="tipoTela() == 2">
        <v-row no-gutters >
            <!-- Cartoes menores -->
            <v-col cols="8">
                <v-row no-gutters>
                    <v-col class="ma-2" v-for="partida in props.partidas.slice(0,2)">
                        <cartao-partida-alt :partida="partida"></cartao-partida-alt>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col class="ma-2" v-for="partida in props.partidas.slice(2,4)">
                        <cartao-partida-alt :partida="partida"></cartao-partida-alt>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col class="ma-2" v-for="partida in props.partidas.slice(4,6)">
                        <cartao-partida-alt :partida="partida"></cartao-partida-alt>
                    </v-col>
                </v-row>
            </v-col>

            <!-- Cartao grande -->
            <v-col class="my-2 ml-2">
                <slot></slot>
            </v-col>
        </v-row>
    </v-container>

    <v-container class="ma-0 pa-0" fluid v-if="tipoTela() == 1">
        <v-row no-gutters >
            <!-- Cartoes menores -->
            <v-col cols="6">
                <v-row no-gutters>
                    <v-col class="ma-2" v-for="partida in props.partidas.slice(0,1)">
                        <cartao-partida-alt :partida="partida"></cartao-partida-alt>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col class="ma-2" v-for="partida in props.partidas.slice(1,2)">
                        <cartao-partida-alt :partida="partida"></cartao-partida-alt>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col class="ma-2" v-for="partida in props.partidas.slice(2,3)">
                        <cartao-partida-alt :partida="partida"></cartao-partida-alt>
                    </v-col>
                </v-row>
            </v-col>

            <!-- Cartao grande -->
            <v-col class="my-2 ml-2">
                <slot></slot>
            </v-col>
        </v-row>
        
        <v-row no-gutters>
            <v-col class="ma-2">
                <cartao-partida-alt :partida="partidas[5]"></cartao-partida-alt>
            </v-col>
            <v-col cols="6" class="my-2  pl-2">
                <cartao-partida-alt :partida="partidas[6]"></cartao-partida-alt>
            </v-col>
        </v-row>
    </v-container>
    
    <v-container class="ma-0 pa-0" fluid v-if="tipoTela() == 0">
        <v-row no-gutters v-for="partida in props.partidas.slice(0,4)">
            <!-- Cartoes menores -->
            <v-col cols="12" class="ma-2">
                <cartao-partida-alt :partida="partida"></cartao-partida-alt>
            </v-col>
        </v-row>
        
        <v-row no-gutters>
            <!-- Cartao grande -->
            <v-col cols="12" class="ma-2">
                <slot></slot>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import { useDisplay } from 'vuetify'
    const props = defineProps(
        {
            titulo: String,
            icone: String,
            corIcone : String,
            partidas : Array,
            links_topo : Array,
            icones_topo : Array,
        }
    )

    const disp = useDisplay();

    // (Cards, Colunas)
    function tipoTela(){
        // name is reactive and
        // must use .value
        console.log(disp.name.value);

        switch (disp.name.value) {
            case 'xs': return 0;
            case 'sm': return 0;
            case 'md': return 1;
            case 'lg': return 2;
            case 'xl': return 3;
            case 'xxl': return 3;
        };

        return undefined;
    }


    const janelaAtual = ref(props.links_topo[0]);

</script>

<style lang="css">

</style>