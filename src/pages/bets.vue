<template>

<v-navigation-drawer rail expand-on-hover>
    <v-list>
        <v-list-item v-for="item in items_navegacao" :prepend-icon="item.icone" :title="item.nome"></v-list-item>
    </v-list>
</v-navigation-drawer>
<v-container>
    <v-row>
        <v-col>
            <CartaoPartida class="" time_1="Santos" time_2="Curitiba" :odds1="2.3" :odds2="1.5" :odds-empate="2" data="Hoje" hora="12:00"></CartaoPartida>
        </v-col>
        <v-col>
            <CartaoPartida class="" time_1="Atlético" time_2="Atlético MG" :odds1="2" :odds2="1.5" :odds-empate="2" data="Hoje" hora="12:00"></CartaoPartida>
        </v-col>
        <v-col>
            <CartaoPartida class="" time_1="Laranja Mecânica" time_2="Operário" :odds1="1" :odds2="1" :odds-empate="1.5" data="Hoje" hora="12:00"></CartaoPartida>
        </v-col>
    </v-row>
</v-container>
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