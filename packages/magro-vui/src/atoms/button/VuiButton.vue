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
  <button
    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border rounded-md shadow-sm inline-flex items-center px-4 py-2 text-sm font-medium"
    :class="
      primary
        ? 'hover:bg-indigo-700 bg-indigo-600 text-white border-gray-300'
        : 'hover:bg-gray-50 bg-white text-gray-700 border-transparent'
    "
  >
    {{ label }}
  </button>
</template>
