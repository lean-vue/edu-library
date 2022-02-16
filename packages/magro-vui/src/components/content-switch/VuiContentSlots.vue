<script lang="ts" setup>
import { useContentContext } from './content-context';

const { slots, currentSlot } = useContentContext();
</script>

<template>
  <template v-for="s in slots">
    <slot :name="s" v-if="s === currentSlot" :key="s"> </slot>
  </template>
</template>
