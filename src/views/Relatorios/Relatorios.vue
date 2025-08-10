<template>
  <HeaderPages
    title="Relatórios"
    description="Análise detalhada das suas finanças"
    bg-color="var(--v-info_color)"
    icon="mdi-tray-arrow-down"
    btn-content="Exportar PDF"
    @click="btnEvent"
  />

  <div class="filter_reports">

    <v-select
      variant="outlined"
      class="select_custom"
      clearable
      density="comfortable"
      label="Período"
      :items="['Último mês', 'Últimos 3 meses', 'Últimos 12 meses']"
    ></v-select>

    <v-select
      variant="outlined"
      class="select_custom" 
      clearable
      density="comfortable"
      label="Tipo de Relatório"
      :items="['Receita vs Despesas', 'Despesas por Categoria', 'Evolução do Saldo']"
    ></v-select>
  </div>


  <div class="metric_cards">
    <MetricCard 
      title="Receita Total"
      icon="mdi-trending-up"
      iconColor="var(--v-success_color)"
      value=15450.50
      valueColor="var(--v-success_color)"
    />

    <MetricCard 
      title="Despeza Total"
      icon="mdi-trending-down"
      iconColor="var(--v-danger_color)"
      value=15450.50
      valueColor="var(--v-danger_color)"
    />

    <MetricCard 
      title="Média Mensal (Receita)"
      icon="mdi-chart-bar-stacked"
      iconColor="var(--v-info_color)"
      value=15450.50
      valueColor="var(--v-info_color)"
    />

    <MetricCard 
      title="Média Mensal (Despesa)"
      icon="mdi-chart-bell-curve"
      iconColor="var(--v-danger_color)"
      value=15450.50
      valueColor="var(--v-danger_color)"
    />

  </div>


</template>

<style src="./Relatorios.scss" lang="scss"></style>

<script setup lang="ts">
  import MetricCard from '@/components/root_components/Cards/MetricCard/MetricCard.vue';
import HeaderPages from '@/components/root_components/HeaderPages/HeaderPages.vue';

  const btnEvent = () => {
    console.log('Botão exportar pdf');
    
  }

</script>
