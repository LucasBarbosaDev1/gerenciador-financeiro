<template>
  <HeaderPages
    title="Transações"
    description="Gerencie suas reveitas e despezas"
    bg-color="var(--v-success_color)"
    icon="mdi-plus"
    btn-content="Nova Transação"
    @click="newTransaction"
  />

</template>

<style src="./Transacoes.scss" lang="scss" scoped></style>

<script setup lang="ts">
  import HeaderPages from '@/components/root_components/HeaderPages/HeaderPages.vue';
  import newTransaction from '../../composables/newTransaction.ts';



</script>
