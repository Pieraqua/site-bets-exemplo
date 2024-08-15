<template>
<v-navigation-drawer style="position:fixed" app rail v-if="!open" class="hide-scrollbar">
    <v-list >
        <v-list-item variant="plain" :ripple="false" flat link value="/4"><v-icon>mdi-gift</v-icon></v-list-item>
        <v-list-item variant="plain" :ripple="false" flat link value="/5"><v-icon color="orange">mdi-pistol</v-icon></v-list-item>
        <v-list-item variant="plain" :ripple="false" flat link value="/6"><v-icon color="blue">mdi-ship-wheel</v-icon></v-list-item>
        <v-divider></v-divider>
        <v-list-item variant="plain" :ripple="false" flat link value="/2"><v-icon>mdi-poker-chip</v-icon></v-list-item>
        <v-list-item variant="plain" :ripple="false" flat link value="/1"><v-icon>mdi-head-snowflake</v-icon></v-list-item>
        <v-list-item variant="plain" :ripple="false" flat link value="/3"><v-icon>mdi-head-snowflake</v-icon></v-list-item>
        <v-list-item variant="plain" :ripple="false" flat link value="/7"><v-icon>mdi-fruit-cherries</v-icon></v-list-item>
        <v-list-item variant="plain" :ripple="false" flat link value="/8"><v-icon>mdi-soccer</v-icon></v-list-item>
        <v-list-item variant="plain" :ripple="false" flat link value="/9"><v-icon>mdi-cards-playing-club</v-icon></v-list-item>
        <v-list-item variant="plain" :ripple="false" flat link value="/10"><v-icon>mdi-bullseye-arrow</v-icon></v-list-item>
        <v-list-item variant="plain" :ripple="false" flat link value="/11"><v-icon>mdi-youtube-tv</v-icon></v-list-item>
        <v-divider></v-divider>
        <v-list-item variant="plain" :ripple="false" flat link value="/17"><v-icon color="orange">mdi-crown</v-icon></v-list-item>
        <v-list-item variant="plain" :ripple="false" flat link value="/14"><v-icon>mdi-share-variant</v-icon></v-list-item>
        <v-list-item variant="plain" :ripple="false" flat link value="/15"><v-icon>mdi-party-popper</v-icon></v-list-item>
        <v-list-item variant="plain" :ripple="false" flat link value="/16"><v-icon>mdi-monitor-arrow-down</v-icon></v-list-item>
        <v-list-item variant="plain" :ripple="false" flat link value="/18"><v-icon color='blue'>mdi-headset</v-icon></v-list-item>
    </v-list>
</v-navigation-drawer>


<v-navigation-drawer style="position:fixed" app v-if="open" class="hide-scrollbar">
    <v-list nav density="compact">
        <v-container  cols="2" class="mb-2 mt-2 pa-0">
            <v-row no-gutters >
                <v-col >
                    <v-list-item rounded="lg" :ripple="false" variant="tonal" value="/4" prepend-icon="mdi-gift">Bônus</v-list-item>
                </v-col>
            </v-row>
            <v-row no-gutters class="mt-1 ">
                <v-col class="mr-1">
                    <v-list-item class="text-subtitle-2 bg-orange" :ripple="false" rounded="lg" variant="tonal" value="/5" >Dinheiro como chuva</v-list-item>
                </v-col>
                <v-col>
                    <v-list-item class="text-subtitle-2 bg-blue" :ripple="false" height="100%" rounded="lg" variant="tonal" value="/6">Roda de convites</v-list-item>
                </v-col>
            </v-row>
        </v-container>
        <v-divider></v-divider>

        <v-container cols="3" class="mt-2 mb-2 pa-0">
            <v-row no-gutters>
                <v-col class="mr-1">
                    <v-list-item class="text-center" rounded="lg" variant="tonal" value="/2" :ripple="false"><v-icon>mdi-thumb-up</v-icon></v-list-item>
                </v-col>
                <v-col class="mr-1">
                    <v-list-item class="text-center" rounded="lg" variant="tonal" value="/1" :ripple="false"><v-icon>mdi-heart-circle</v-icon></v-list-item>
                </v-col>
                <v-col>
                    <v-list-item class="text-center" rounded="lg" variant="tonal" value="/3" :ripple="false"><v-icon>mdi-clock-outline</v-icon></v-list-item>
                </v-col>
            </v-row>
            <v-row v-for="item in itens_meio_aberto" no-gutters class="mt-1">
                <v-list-item :value="item.value" width="100%" rounded="lg" variant="tonal" :ripple="false" :prepend-icon="item.icone">{{ item.texto }}</v-list-item>
            </v-row>
        </v-container>

        <v-divider class="mb-2"></v-divider>

        <v-list-item value="/17" width="100%" rounded="lg" variant="tonal" :ripple="false">
            <template v-slot:prepend>
                <v-icon large color="orange">mdi-crown</v-icon>
            </template>
            Clube VIP
        </v-list-item>
            
        <v-list-item class="mb-0" value="/14" width="100%" rounded="t-lg" variant="tonal" :ripple="false" prepend-icon="mdi-share-variant">Afiliado</v-list-item>
        <v-list-item class="mb-0" value="/15" width="100%" rounded="0" variant="tonal" :ripple="false" prepend-icon="mdi-party-popper">Promoção</v-list-item>
        <v-list-item class="mb-0" value="/16" width="100%" rounded="0" variant="tonal" :ripple="false" prepend-icon="mdi-monitor-arrow-down">Instalar</v-list-item>
        
        <v-list-item value="/18" width="100%" rounded="b-lg" variant="tonal" :ripple="false">
            <template v-slot:prepend>
                <v-icon large color="blue">mdi-headset</v-icon>
            </template>
            Clube VIP
        </v-list-item>
    </v-list>
</v-navigation-drawer>
</template>

<script lang="ts" setup>
const props = defineProps({
    open: Boolean,
});

//const router = useRouter();

const nav_atual = ref('/1');

const itens_meio_aberto = [
    {
        icone: "mdi-poker-chip",
        texto: "Jogo Bônus",
        value: "/7"
    },
    {
        icone: "mdi-head-snowflake",
        texto: "Originais",
        value: "/8"
    },
    {
        icone: "mdi-fruit-cherries",
        texto: "Slots",
        value: "/9"
    },
    {
        icone: "mdi-soccer",
        texto: "Esportes",
        value: "/10"
    },
    {
        icone: "mdi-cards-playing-club",
        texto: "Ao vivo",
        value: "/11"
    },
    {
        icone: "mdi-bullseye-arrow",
        texto: "Casual",
        value: "/12"
    },
    {
        icone: "mdi-monitor-arrow-down",
        texto: "Shows",
        value: "/13"
    },
]
</script>

<style>
.hide-scrollbar *::-webkit-scrollbar{
    display: none
}
.hide-scrollbar *{
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>