<template>
  <HeaderPages
    title="Categorias"
    description="Organize suas transações por categorias"
    bg-color="var(--v-info_color)"
    icon="mdi-plus"
    btn-content="Nova Categoria"
    @click="btnEvent"
  />
</template>

<style src="./Categorias.scss" lang="scss" scoped>

</style>

<script setup lang="ts">
  import HeaderPages from '@/components/root_components/HeaderPages/HeaderPages.vue';

  const btnEvent = () => {
    console.log('Botão Nova categoria');
    
  }

</script>
