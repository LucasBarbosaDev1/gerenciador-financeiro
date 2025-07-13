<template>
  <button class="btn-hamburger" @click="toggleNav">
    <v-icon :icon="iconName"></v-icon>
  </button>

  <div class="header">
  </div>

  <div class="container-nav closeNav" ref="containerNav">
    <nav>
      <div class="header_nav">
        Gerenciador Financeiro
      </div>

      <div class="buttons">
        <button class="newTransaction">
          <v-icon>mdi-plus</v-icon>
          Nova Transação
        </button>

        <router-link to="/" class="views viewActive">
          <v-icon>mdi-home-outline</v-icon>
          Dashboard
        </router-link>

        <router-link to="/transacoes" class="views">
          <v-icon>mdi-home-outline</v-icon>
          Trasações
        </router-link>

        <router-link to="/categorias" class="views">
          <v-icon>mdi-home-outline</v-icon>
          Categorias
        </router-link>

        <router-link to="/contas" class="views">
          <v-icon>mdi-home-outline</v-icon>
          Contas
        </router-link>

        <router-link to="/relatorios" class="views">
          <v-icon>mdi-home-outline</v-icon>
          Relatórios
        </router-link>

      </div>
    </nav>
  </div>

  <section>
    <router-view></router-view>
  </section>

</template>

<style src="./BaseTemplate.scss" lang="scss" scoped></style>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  
  // controle do nav
  const containerNav = ref()
  const navOpen = ref(false)

  const toggleNav = () => {
    navOpen.value = !navOpen.value
    containerNav.value.classList.toggle('closeNav')

  }

  const iconName = computed(() => {
    return navOpen.value ? "mdi-close" : "mdi-menu"
  })

</script>