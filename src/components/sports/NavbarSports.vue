<template>
    <v-app-bar elevation="3" density="compact" ref="bar">
        <div  v-for="item in botoes_navbar.slice(0, icones_a_renderizar)" >
            <v-divider v-if="item.divider" vertical inset opacity="0.4" style="height:28px; align-self: center" class="pl-1"></v-divider>
            <v-btn v-else :icon="item.icon" :value="item.value" flat variant="plain" :ripple="false"></v-btn>
        </div>

        <v-app-bar-title></v-app-bar-title>

        <v-btn ref="search" icon="mdi-magnify" value="/" flat variant="plain" :ripple="false"></v-btn>
    </v-app-bar>
</template>

<script lang="ts" setup>
const bar : Ref = ref(null);
const search : Ref = ref(null);
const icones_a_renderizar : Ref = ref(1);

onMounted(() => {
    nextTick(() => {
        window.addEventListener('resize', onResize);
        onResize();
    });
});

onBeforeUnmount(() => { 
    window.removeEventListener('resize', onResize); 
  });

function onResize()
{
    console.log('resize')
    if(search.value !== null)
    {
        icones_a_renderizar.value = bar.value.$el.clientWidth/search.value.$el.clientWidth - 2;
    }
    // Meio hacky mas foi o jeito que funcionou. Fica tentando até conseguir.
    else
    {
        nextTick(onResize);
    }
}

const botoes_navbar = [
    {
        icon: "mdi-ab-testing",
        value: "/"
    },
    {
        icon: "mdi-abacus",
        value: "/"
    },
    {
        icon: "mdi-account",
        value: "/"
    },
    {
        icon: "mdi-access-point",
        value: "/"
    },
    {
        divider: true
    },
    {
        icon: "mdi-account-box",
        value: "/"
    },
    {
        icon: "mdi-account-cowboy-hat",
        value: "/"
    },
    {
        icon: "mdi-account-hard-hat",
        value: "/"
    },
    {
        icon: "mdi-account-injury",
        value: "/"
    },
    {
        icon: "mdi-account-lock",
        value: "/"
    },
    {
        icon: "mdi-account-multiple",
        value: "/"
    },
    {
        icon: "mdi-account-reactivate",
        value: "/"
    },
    {
        icon: "mdi-account-switch",
        value: "/"
    },
    {
        icon: "mdi-account-tie-hat",
        value: "/"
    },
    {
        icon: "mdi-account-wrench",
        value: "/"
    },
    {
        icon: "mdi-airbag",
        value: "/"
    },
    {
        icon: "mdi-airballoon",
        value: "/"
    },
    {
        icon: "mdi-airplane-search",
        value: "/"
    },
    {
        icon: "mdi-alarm",
        value: "/"
    },
    {
        icon: "mdi-alarm-bell",
        value: "/"
    },
    {
        icon: "mdi-alarm-panel",
        value: "/"
    },
    {
        icon: "mdi-alert-minus-outline",
        value: "/"
    },
    {
        icon: "mdi-alert-rhombus",
        value: "/"
    },
] 
</script>

<style lang="css" scoped>
</style>
