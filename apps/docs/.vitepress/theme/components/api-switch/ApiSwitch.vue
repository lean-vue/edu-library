<script lang="ts" setup>
import { useStorage } from '@vueuse/core';
import { VuiContentSwitch } from '@magro/vui';

const options = [
  {
    title: 'Options API',
    name: 'options-api',
  },
  {
    title: 'Composition API',
    name: 'composition-api',
  },
];

const defaultOption = useStorage('preffered-api', 'options-api');
</script>

<template>
  <VuiContentSwitch
    :options="options"
    :default-option="defaultOption"
    @change="(option) => (defaultOption = option)"
  >
    <slot />
  </VuiContentSwitch>
</template>
