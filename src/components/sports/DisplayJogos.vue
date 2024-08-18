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
    <v-container class="ma-0 pa-0">
        <v-row no-gutters>
            <!-- Cartoes menores -->
            <v-col cols="8">
                <v-row no-gutters>
                    <v-col class="ma-2" v-for="partida in partidasCortado">
                        <cartao-partida-alt :partida="partida"></cartao-partida-alt>
                    </v-col>
                </v-row>
            </v-col>

            <!-- Cartao grande -->
            <v-col cols="4" class="mt-2 mb-2">
                <slot></slot>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
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

    const partidasCortado = props.partidas.slice(0,6);
    const janelaAtual = ref(props.links_topo[0]);

</script>

<style lang="css">

</style>