<template>
  <div class="item">
    <div class="item_infos">

      <div class="item_icon"
        :style="{
          backgroundColor: iconColor
        }"
      >
        <v-icon>{{ icon }}</v-icon>
      </div>

      <div class="item_title">
        <h3>{{ title }}</h3>

        <span>{{ category }} • {{ account }}</span>
      </div>
    </div>

    <div class="item_value">
      <div class="value">

        <h3
          :style="{
            color: valueColor
          }"
        >R$ {{ value }}</h3>

        <span>{{ date }}</span>
      </div>

      <div class="item_btn">
        <button class="btn_edit"
          @click="emitBtnEditTransation"
        >
          <v-icon>mdi-square-edit-outline</v-icon>
        </button>
      
        <button class="btn_del"
          @click="emitBtnDeleteTransation"
        >
          <v-icon>mdi-trash-can-outline</v-icon>
        </button>

      </div>
    </div>
  </div>
</template>

<style src="./ItemListTransaction.scss" lang="scss" scoped></style>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    icon: {
      type: String,
      required: true
    },
    iconColor: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    account: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      required: true
    },
    valueColor: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  });

  const emit = defineEmits(['btnEditTransation', 'btnDeleteTransation']);

  const emitBtnEditTransation = () => {
    emit('btnEditTransation');
  };

  const emitBtnDeleteTransation = () => {
    emit('btnDeleteTransation');
  };
</script>
