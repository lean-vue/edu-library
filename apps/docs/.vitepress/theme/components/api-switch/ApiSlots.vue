<script lang="ts" setup>
import { VuiContentSlots } from '@magro/vui';
</script>

<template>
  <VuiContentSlots>
    <template #options-api> Options </template>
    <template #composition-api> Composition </template>
  </VuiContentSlots>
</template>
