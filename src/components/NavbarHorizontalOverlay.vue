<template>

    <v-app-bar style="position:fixed; background: linear-gradient(270deg,#f7faff,#f2f6ff);" :elevation="2" >
        <v-btn @click="open = !open" :icon="arrow"/>
        <v-img class="mx-2" max-height="88" max-width="15%" min-width="15%" contain src="@assets/piebetslogo.png" @click="toggle_path = '/'" style="cursor:pointer"/>
        <div v-if="tipoTela >= 1" class="bg-grey-lighten-3 rounded-lg ma-4">
            <v-btn-toggle variant="text" color="blue-darken-2" class="pa-1" v-model="toggle_path">
                <v-btn rounded="lg" variant="flat" class="elevation-0 bg-transparent text-none" :ripple="false" value="/home">
                    <template v-slot:prepend>
                        <v-icon>mdi-cards-spade</v-icon>
                    </template>Jogos</v-btn>
                <v-btn rounded="lg" variant="flat" class="elevation-0 bg-transparent text-none" :ripple="false" value="/sports">
                    <template v-slot:prepend>
                        <v-icon>mdi-soccer</v-icon>
                    </template>
                    Esportes</v-btn>
            </v-btn-toggle>
        </div>
        <v-btn icon="mdi-magnify" class="rounded-lg bg-grey-lighten-4 ma-2"></v-btn>

        <v-app-bar-title>
        </v-app-bar-title>

        <v-btn :ripple="false" class="ma-1">ENTRAR</v-btn>
        <v-btn :ripple="false" class="ma-1 bg-green rounded-lg" variant="outlined" color="white">INSCREVER-SE</v-btn>
            <v-menu>
                <template v-slot:activator="{ props }">
                <v-btn icon="mdi-earth" v-bind="props"></v-btn>
                </template>

                <v-list class="bg-blue-lighten-5">
                    <v-list-item link>
                        <template v-slot:prepend>
                            <v-icon>mdi-flag</v-icon>
                        </template>
                        English
                    </v-list-item>

                    <v-list-item link>
                        <template v-slot:prepend>
                            <v-icon>mdi-flag</v-icon>
                        </template>
                        Português
                    </v-list-item>
                </v-list>
          </v-menu>
    </v-app-bar>

</template>

<script lang="ts" setup>
    const router = useRouter();

    //-- "Slider" de troca entre aplicativos do portal --//
    const toggle_path = ref("");

    watch(toggle_path, (to, from) => {
        if (to != undefined){
            router.push(toggle_path.value)
        }
        else toggle_path.value = from;
    });

    watch(router.currentRoute, (to,from) => {

        toggle_path.value = to.name;
    })

    //-- Abertura da navbar vertical --//
    // Feita por emit para desacoplar os dois componentes
    // Poderia deixar o botão de abrir/fechar como opcional no futuro
    const emit = defineEmits(['open']);
    const arrow = ref("mdi-arrow-right");
    const open = ref(false);

    watch(open, () => {
        arrow.value = open.value ? "mdi-arrow-left" : "mdi-arrow-right";
        emit('open');
    });

    onMounted(() => {
        toggle_path.value = router.currentRoute.value.name;
    })

    import {useDisplay} from 'vuetify';
    const disp = useDisplay();

    // (Cards, Colunas)
    const tipoTela = computed(()=>{
        // name is reactive and
        // must use .value

        switch (disp.name.value) {
            case 'xs': return 0;
            case 'sm': return 0;
            case 'md': return 1;
            case 'lg': return 2;
            case 'xl': return 3;
            case 'xxl': return 3;
        };

        return undefined;
    });
</script>

<style>
    .vertical-toggle
    {
        flex-direction: column;
    }
    
</style>