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

  <div class="categories_container">
    <div class="title">
      <v-icon class="icon">mdi-trending-up</v-icon>
      <h2>Categorias de Receita</h2>
    </div>

    <div class="container_cards">
      <CategoryCard
        background-icon="var(--v-success_color)"
        icon="mdi-cash-plus"
        title="Receira"
        type="Receita"
        color-type="var(--v-success_color)"
        value="+R$ 8.500,00"
        @btn-edit-category="btnEditCategory"
        @btn-delete-category="btnDeleteCategory"
      />

      <CategoryCard
        background-icon="var(--v-success_color)"
        icon="mdi-cash-plus"
        title="Receira"
        type="Receita"
        color-type="var(--v-success_color)"
        value="+R$ 8.500,00"
        @btn-edit-category="btnEditCategory"
        @btn-delete-category="btnDeleteCategory"
      />


    </div>
  </div>

  <div class="categories_container">
    <div class="title">
      <v-icon class="icon down">mdi-trending-down</v-icon>
      <h2>Categorias de Despeza</h2>
    </div>

    <div class="container_cards">
      <CategoryCard 
        background-icon="var(--v-danger_color)"
        icon="mdi-cash-minus"
        title="Despesa"
        type="Despesa"
        color-type="var(--v-danger_color)"
        value="-R$ 8.500,00"
        @btn-edit-category="btnEditCategory"
        @btn-delete-category="btnDeleteCategory"

      />

      <CategoryCard 
        background-icon="var(--v-danger_color)"
        icon="mdi-cash-minus"
        title="Despesa"
        type="Despesa"
        color-type="var(--v-danger_color)"
        value="-R$ 8.500,00"
        @btn-edit-category="btnEditCategory"
        @btn-delete-category="btnDeleteCategory"

      />

      <CategoryCard 
        background-icon="var(--v-danger_color)"
        icon="mdi-cash-minus"
        title="Despesa"
        type="Despesa"
        color-type="var(--v-danger_color)"
        value="-R$ 8.500,00"
        @btn-edit-category="btnEditCategory"
        @btn-delete-category="btnDeleteCategory"

      />

    </div>
  </div>

</template>

<style src="./Categorias.scss" lang="scss" scoped>

</style>

<script setup lang="ts">
  import CategoryCard from '@/components/root_components/Cards/CategoryCard/CategoryCard.vue';
  import MetricCard from '@/components/root_components/Cards/MetricCard/MetricCard.vue';
  import HeaderPages from '@/components/root_components/HeaderPages/HeaderPages.vue';

  // botao do header
  const btnEvent = () => {
    console.log('Botão Nova categoria');
    
  }

  // botoes de editar/deletar categoria
  const btnEditCategory = () => {
    console.log('Botao editar categoria');
    
  }

  const btnDeleteCategory = () => {
    console.log('Botao deletar categoria');
    
  }
</script>
