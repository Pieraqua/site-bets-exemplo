<template>
<v-navigation-drawer rail v-if="!open">
    <v-btn variant="plain" :ripple="false" flat icon="mdi-gift"></v-btn>
    <v-btn variant="plain" :ripple="false" flat icon="mdi-pistol" color="orange"></v-btn>
    <v-btn variant="plain" :ripple="false" flat icon="mdi-ship-wheel" color="blue"></v-btn>
    <v-divider></v-divider>
    <v-btn variant="plain" :ripple="false" flat icon="mdi-poker-chip"></v-btn>
    <v-btn variant="plain" :ripple="false" flat icon="mdi-head-snowflake"></v-btn>
    <v-btn variant="plain" :ripple="false" flat icon="mdi-head-snowflake"></v-btn>
    <v-btn variant="plain" :ripple="false" flat icon="mdi-fruit-cherries"></v-btn>
    <v-btn variant="plain" :ripple="false" flat icon="mdi-soccer"></v-btn>
    <v-btn variant="plain" :ripple="false" flat icon="mdi-cards-playing-club"></v-btn>
    <v-btn variant="plain" :ripple="false" flat icon="mdi-bullseye-arrow"></v-btn>
    <v-btn variant="plain" :ripple="false" flat icon="mdi-youtube-tv"></v-btn>
    <v-divider></v-divider>
    <v-btn variant="plain" :ripple="false" flat icon="mdi-crown"></v-btn>
    <v-btn variant="plain" :ripple="false" flat icon="mdi-share-variant"></v-btn>
    <v-btn variant="plain" :ripple="false" flat icon="mdi-party-popper"></v-btn>
    <v-btn variant="plain" :ripple="false" flat icon="mdi-monitor-arrow-down"></v-btn>
    <v-btn variant="plain" block :ripple="false" flat><v-icon color='blue'>mdi-headset</v-icon></v-btn>
</v-navigation-drawer>


<v-navigation-drawer v-if="open">
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
</style>