<template>
  <HeaderPages
    title="Dashboard"
    description="Visão geral das suas finanças"
    bg-color="var(--v-info_color)"
    icon="mdi-arrow-top-right"
    btn-content="Exportar Relatório"
    @click="btnEvent"
  />
</template>

<style src="./Dashboard.scss" lang="scss" scoped></style>

<script setup lang="ts">
  import HeaderPages from '@/components/root_components/HeaderPages/HeaderPages.vue';

  const btnEvent = () => {
    console.log('Botão Exportar relatório');
    
  }
</script>