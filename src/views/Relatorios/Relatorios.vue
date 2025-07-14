<template>
  <HeaderPages
    title="Relatórios"
    description="Análise detalhada das suas finanças"
    bg-color="var(--v-info_color)"
    icon="mdi-tray-arrow-down"
    btn-content="Exportar PDF"
    @click="btnEvent"
  />

</template>

<style src="./Relatorios.scss" lang="scss" scoped></style>

<script setup lang="ts">
  import HeaderPages from '@/components/root_components/HeaderPages/HeaderPages.vue';

  const btnEvent = () => {
    console.log('Botão exportar pdf');
    
  }

</script>
