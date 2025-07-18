<template>
  <HeaderPages
    title="Categorias"
    description="Organize suas transações por categorias"
    bg-color="var(--v-info_color)"
    icon="mdi-plus"
    btn-content="Nova Categoria"
    @click="btnEvent"
  />

  <div class="metric_cards">
    <MetricCard
      title="Total de Categorias"
      icon="mdi-tag-outline"
      value=8
    />

    <MetricCard
      title="Categoria Mais Usada"
      icon="mdi-trending-up"
      iconColor="var(--v-info_color)"
      value="Alimentação"
      valueColor="var(--v-info_color)"
    />

    <MetricCard
      title="Maior Gasto"
      icon="mdi-trending-down"
      iconColor="var(--v-danger_color)"
      value="Alimentação"
      valueColor="var(--v-danger_color)"
    />
  </div>
</template>

<style src="./Categorias.scss" lang="scss" scoped>

</style>

<script setup lang="ts">
  import MetricCard from '@/components/root_components/Cards/MetricCard/MetricCard.vue';
import HeaderPages from '@/components/root_components/HeaderPages/HeaderPages.vue';

  const btnEvent = () => {
    console.log('Botão Nova categoria');
    
  }

</script>
