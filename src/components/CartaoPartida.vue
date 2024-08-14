<template>
<v-card class="pa-2">
    <v-card-subtitle>{{ data }} | {{ hora }}</v-card-subtitle>
    <v-card-title>{{ time_1 }}</v-card-title>
    <v-card-title>{{ time_2 }}</v-card-title>
    <v-card-actions class="justify-space-between">
        <v-card width="100%" class="ma-2 pa-1">
            <div style="float:left">1</div><div style="float:right">{{ odds1 }}</div>
        </v-card>
        <v-card width="100%" class="ma-2 pa-1">
            <div style="float:left">X</div><div style="float:right">{{ oddsEmpate }}</div>
        </v-card>
        <v-card width="100%" class="ma-2 pa-1">
            <div style="float:left">2</div><div style="float:right">{{ odds2 }}</div>
        </v-card>
    </v-card-actions>
</v-card>
</template>

<script setup lang="ts">
const props = defineProps({
    data : String,
    hora : String,
    time_1: String,
    time_2: String,
    odds1: Number,
    odds2: Number,
    oddsEmpate: Number
})
</script>