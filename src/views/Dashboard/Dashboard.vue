<template>
  <HeaderPages
    title="Dashboard"
    description="Visão geral das suas finanças"
    bg-color="var(--v-info_color)"
    icon="mdi-arrow-top-right"
    btn-content="Exportar Relatório"
    @click="btnEvent"
  />

  <div class="metric_cards">
    <MetricCard 
      title="Saldo Total"
      icon="mdi-wallet"
      value=15450.50
    />

    <MetricCard 
      title="Receitas"
      icon="mdi-trending-up"
      iconColor="var(--v-success_color)"
      value=15450.50
      valueColor="var(--v-success_color)"
    />

    <MetricCard 
      title="Despezas"
      icon="mdi-trending-down"
      iconColor="var(--v-danger_color)"
      value=15450.50
      valueColor="var(--v-danger_color)"
    />

    <MetricCard 
      title="Economia"
      icon="mdi-credit-card-outline"
      iconColor="var(--v-info_color)"
      value=15450.50
      valueColor="var(--v-info_color)"
    />

  </div>
</template>

<style src="./Dashboard.scss" lang="scss" scoped></style>

<script setup lang="ts">
  import MetricCard from '@/components/root_components/Cards/MetricCard/MetricCard.vue';
  import HeaderPages from '@/components/root_components/HeaderPages/HeaderPages.vue';

  const btnEvent = () => {
    console.log('Botão Exportar relatório');

  }
</script>