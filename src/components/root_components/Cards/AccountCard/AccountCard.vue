<template>
  <div class="card">

    <div class="card_header">
      <div class="card_description">
      
        <div class="icon_card"
          :style="{
            backgroundColor: backgroundIcon
          }"
        >
          <v-icon>{{ icon }}</v-icon>
        </div>
        
        <div class="infos_card">
          <h3>{{ title }}</h3>
          <h4>{{ account }}</h4>
          <span>{{ type }}</span>
        </div>
      </div>

      <div class="card_btn">
        <button class="btn_edit"
          @click="emitBtnEditCategory"
        >
          <v-icon>mdi-square-edit-outline</v-icon>
        </button>
      
        <button class="btn_del"
          @click="emitBtnDeleteCategory"
        >
          <v-icon>mdi-trash-can-outline</v-icon>
        </button>
      </div>
    </div>

    <div class="card_value">
      <div class="div_value">
        <span>Saldo Atual: </span>
        <strong>{{ current_balance }}</strong>
      </div>

      <div class="div_value">
        <span>Saldo Inicial: </span>
        <span>{{ initial_balance }}</span>
      </div>
    </div>

  </div>
</template>

<style src="./AccountCard.scss" lang="scss" scoped></style>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    backgroundIcon: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    account: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    current_balance: {
      type: [String, Number],
      required: true
    },
    initial_balance: {
      type: [String, Number],
      required: true
    }
  });

  // emissao dos eventos do botoes editar/deletar
  const emit = defineEmits(['btnEditCategory', 'btnDeleteCategory']);

  const emitBtnEditCategory = () => {
    emit('btnEditCategory');
    
  };

  const emitBtnDeleteCategory = () => {
    emit('btnDeleteCategory');
  }

</script>