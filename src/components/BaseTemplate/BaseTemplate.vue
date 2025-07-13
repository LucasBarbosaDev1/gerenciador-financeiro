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

        <div class="views viewActive">
          <v-icon>mdi-home-outline</v-icon>
          Dashboard
        </div>

        <div class="views">
          <v-icon>mdi-home-outline</v-icon>
          Dashboard
        </div>

        <div class="views">
          <v-icon>mdi-home-outline</v-icon>
          Dashboard
        </div>

        <div class="views">
          <v-icon>mdi-home-outline</v-icon>
          Dashboard
        </div>

        <div class="views">
          <v-icon>mdi-home-outline</v-icon>
          Dashboard
        </div>
      </div>
    </nav>
  </div>

  <section>
    
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