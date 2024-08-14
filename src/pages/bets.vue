<template>

<v-navigation-drawer rail expand-on-hover>
    <v-list>
        <v-list-item v-for="item in items_navegacao" :prepend-icon="item.icone" :title="item.nome"></v-list-item>
    </v-list>
</v-navigation-drawer>
<v-slide-group show-arrows>
        <v-slide-group-item>
            <CartaoPartida class="ma-2" time_1="Time 1" time_2="Time 2" :odds1="2.3" :odds2="1.5" :odds-empate="2" data="Hoje" hora="12:00"></CartaoPartida>
        </v-slide-group-item>
        <v-slide-group-item>
            <CartaoPartida class="ma-2" time_1="Time 3" time_2="Time 4" :odds1="2" :odds2="1.5" :odds-empate="2" data="Hoje" hora="12:00"></CartaoPartida>
        </v-slide-group-item>
        <v-slide-group-item>
            <CartaoPartida class="ma-2" time_1="Time 5" time_2="Time 6" :odds1="1" :odds2="1" :odds-empate="1.5" data="Hoje" hora="12:00"></CartaoPartida>
        </v-slide-group-item>
        <v-slide-group-item>
            <CartaoPartida class="ma-2" time_1="Time 5" time_2="Time 7" :odds1="1" :odds2="1" :odds-empate="1.5" data="Hoje" hora="12:00"></CartaoPartida>
        </v-slide-group-item>
        <v-slide-group-item>
            <CartaoPartida class="ma-2" time_1="Time 8" time_2="Time 6" :odds1="1" :odds2="1" :odds-empate="1.5" data="Hoje" hora="12:00"></CartaoPartida>
        </v-slide-group-item>
        <v-slide-group-item>
            <CartaoPartida class="ma-2" time_1="Time 5" time_2="Time 9" :odds1="1" :odds2="1" :odds-empate="1.5" data="Hoje" hora="12:00"></CartaoPartida>
        </v-slide-group-item>
</v-slide-group>
</template>

<script lang="ts" setup>
const items_navegacao = [
    {
        nome: 'Futebol',
        icone: 'mdi-soccer'
    },
    {
        nome: 'Bilhetes',
        icone: 'mdi-ticket'
    },
    {
        nome: 'Apostas por Odds',
        icone: 'mdi-medal'
    },
    {
        nome: 'Futebol',
        icone: 'mdi-soccer'
    },
    {
        nome: 'Futebol',
        icone: 'mdi-soccer'
    },
    {
        nome: 'Futebol',
        icone: 'mdi-soccer'
    },
    {
        nome: 'Futebol',
        icone: 'mdi-soccer'
    },
    {
        nome: 'Futebol',
        icone: 'mdi-soccer'
    },
]
</script>