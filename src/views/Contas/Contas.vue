<template>
  <HeaderPages
    title="Contas"
    description="Gerencie suas contas e saldos"
    bg-color="var(--v-info_color)"
    icon="mdi-plus"
    btn-content="Nova Conta"
    @click="btnEvent"
  />

  <div class="metric_cards">
    <MetricCard
      title="Saldo Total"
      icon="mdi-wallet"
      value=8
    />

    <MetricCard
      title="Saldo Positivo"
      icon="mdi-trending-up"
      iconColor="var(--v-success_color)"
      value=15450.50
      valueColor="var(--v-success_color)"
    />

    <MetricCard
      title="Saldo Negativo"
      icon="mdi-trending-down"
      iconColor="var(--v-danger_color)"
      value=15450.50
      valueColor="var(--v-danger_color)"
    />
  </div>

</template>


<style src="./Contas.scss" lang="scss" scoped></style>

<script setup lang="ts">
  import MetricCard from '@/components/root_components/Cards/MetricCard/MetricCard.vue';
import HeaderPages from '@/components/root_components/HeaderPages/HeaderPages.vue';

  const btnEvent = () => {
    console.log('Botão Nova conta');
    
  }

</script>