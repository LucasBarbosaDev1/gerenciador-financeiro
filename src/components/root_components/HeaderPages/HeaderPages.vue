<template>
  <div class="container-header">
    <div class="infos">
      <h2 class="title-header">{{ title }}</h2>
      <span class="description-header">{{ description }}</span>
    </div>
    <button class="btn-header" @click="handleClick" :style="{ backgroundColor: bgColor }">
      <v-icon>{{ icon }}</v-icon>
      {{ btnContent }}
    </button>
  </div>
</template>

<style src="./HeaderPages.scss" lang="scss" scoped></style>

<script setup lang="ts">
  import { defineProps } from 'vue';

  // infos componente
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true

    },
    bgColor: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true

    },
    btnContent: {
      type: String,
      required: true
    }
  })

  // emissão do evento do notao
  const emit = defineEmits(['click', 'custonEvent']);

  const handleClick = () => {
    emit('click')
  }
</script>
