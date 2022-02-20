<script setup lang="ts">
import PlainTemplate from './components/PlainTemplate.vue';
</script>

<template>
  <header
    class="bg-white border-b border-gray-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div class="h-16 flex items-center">
      <img alt="Vue logo" class="w-12 h-12" src="./assets/logo.svg" />
      <h1 class="text-3xl font-semibold ml-4">Reactivity</h1>
    </div>
  </header>

  <main class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
    <PlainTemplate />
  </main>
</template>
