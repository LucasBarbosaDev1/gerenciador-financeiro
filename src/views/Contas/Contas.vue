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

  <div class="account_container">

    <div class="title">
      <h2>Suas Contas</h2>
    </div>

    <div class="container_cards">
      <AccountCard 
        background-icon="var(--v-success_color)"
        icon="mdi-cash-plus"
        title="Conta Corrente"
        account="Nubank"
        type="Poupança"
        current_balance="R$ 1.200,00"
        initial_balance="R$ 0,00"
        @btn-edit-category="btnEditCategory"
        @btn-delete-category="btnDeleteCategory"
      />
    </div>

  </div>

</template>


<style src="./Contas.scss" lang="scss" scoped></style>

<script setup lang="ts">
  import AccountCard from '@/components/root_components/Cards/AccountCard/AccountCard.vue';
  import MetricCard from '@/components/root_components/Cards/MetricCard/MetricCard.vue';
  import HeaderPages from '@/components/root_components/HeaderPages/HeaderPages.vue';

  const btnEvent = () => {
    console.log('Botão Nova conta');
    
  }

  // botoes de editar/deletar contas
  const btnEditCategory = () => {
    console.log('Botao editar conta');
    
  }

  const btnDeleteCategory = () => {
    console.log('Botao deletar conta');
    
  }


</script>