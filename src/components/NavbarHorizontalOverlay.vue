<template>

    <v-app-bar :elevation="2" class="bg-grey-lighten-5">
        <v-btn @click="open = !open" :icon="arrow"/>
        <v-img class="mx-2" max-height="88" max-width="15%" min-width="15%" contain src="@assets/piebetslogo.png" @click="toggle_path = '/'" style="cursor:pointer"/>
        <div class="bg-grey-lighten-3 rounded-lg ma-4">
            <v-btn-toggle variant="text" mandatory color="blue" class="pa-1" v-model="toggle_path">
                <v-btn rounded="lg" class="elevation-0" value="/home"><v-icon>mdi-cards-spade</v-icon>Jogos</v-btn>
                <v-btn rounded="lg" class="elevation-0" value="/bets"><v-icon>mdi-soccer</v-icon>Esportes</v-btn>
            </v-btn-toggle>
        </div>
        <v-btn icon="mdi-magnify" class="rounded-lg bg-grey-lighten-4 ma-2"></v-btn>

        <v-app-bar-title>
        </v-app-bar-title>

        <v-btn class="ma-1">ENTRAR</v-btn>
        <v-btn class="ma-1 bg-green rounded-lg" variant="outlined" color="white">INSCREVER-SE</v-btn>
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

    watch(toggle_path, () => {
        router.push(toggle_path.value)
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
</script>

<style>
    .vertical-toggle
    {
        flex-direction: column;
    }
</style>