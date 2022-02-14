<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button>{{ label }}</button>
</template>
