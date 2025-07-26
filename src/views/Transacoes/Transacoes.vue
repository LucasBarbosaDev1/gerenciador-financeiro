<template>
  <HeaderPages
    title="Transações"
    description="Gerencie suas reveitas e despezas"
    bg-color="var(--v-success_color)"
    icon="mdi-plus"
    btn-content="Nova Transação"
    @click="newTransaction"
  />

  <div class="list_trasactions">
    <div class="title_list">
      <h2>Lista de Transações</h2>
    </div>

    <div class="container_list">
      <ItemListTransaction
        icon="mdi-arrow-top-right"
        icon-color="var(--v-success_color)"
        title="Salário"
        category="Receita"
        account="Nubank"
        value="2500,00"
        value-color="var(--v-success_color)"
        date="26/07/2025"
        @btn-edit-transation="btnEditTransation"
        @btn-delete-transation="btnDeleteTransation"
      />

      <ItemListTransaction
        icon="mdi-arrow-bottom-right"
        icon-color="var(--v-danger_color)"
        title="Passagens"
        category="Despesa"
        account="Nubank"
        value="160,00"
        value-color="var(--v-danger_color)"
        date="15/07/2025"
        @btn-edit-transation="btnEditTransation"
        @btn-delete-transation="btnDeleteTransation"
      />
    </div>
  </div>

</template>

<style src="./Transacoes.scss" lang="scss" scoped></style>

<script setup lang="ts">
  import HeaderPages from '@/components/root_components/HeaderPages/HeaderPages.vue';
  import newTransaction from '@/composables/newTransaction.ts';
  import ItemListTransaction from '@/components/root_components/ItemListTransaction/ItemListTransaction.vue';

  // botoes de editar/deletar transação
  const btnEditTransation = () => {
    console.log("Botão editar transação");
  };

  const btnDeleteTransation = () => {
    console.log("Botão deletar transação");
  };
</script>
