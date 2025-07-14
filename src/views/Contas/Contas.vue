<template>
  <HeaderPages
    title="Contas"
    description="Gerencie suas contas e saldos"
    bg-color="var(--v-info_color)"
    icon="mdi-plus"
    btn-content="Nova Conta"
    @click="btnEvent"
  />

</template>


<style src="./Contas.scss" lang="scss" scoped></style>

<script setup lang="ts">
  import HeaderPages from '@/components/root_components/HeaderPages/HeaderPages.vue';

  const btnEvent = () => {
    console.log('Botão Nova conta');
    
  }

</script>