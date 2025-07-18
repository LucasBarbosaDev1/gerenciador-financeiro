<template>
    <div class="container_card">
        <div class="card_title">
            <span>{{ title }}</span>
            <v-icon 
                class="icon"
                :style="{
                    color: iconColor
                }"
            >
                {{ icon }}
            </v-icon>
        </div>

        <span
            class="card_value"
            :style="{
                color: valueColor
            }"
        >
            {{ value }}
        </span>
    </div>
</template>

<style src="./MetricCard.scss" lang="scss" scoped></style>

<script setup lang="ts">
    import { computed, defineProps } from 'vue';

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        iconColor: {
            type: String,
            required: false
        },
        value: {
            type: [Number, String],
            required: true
        },
        valueColor: {
            type: String,
            required: false
        }
    })

</script>
