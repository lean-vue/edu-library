<script setup lang="ts">
import Buttons from './views/Buttons.vue';
import Tabs from './views/Tabs.vue';
import ContentSwitch from './views/ContentSwitch.vue';
</script>

<template>
  <main class="mx-auto mt-12 max-w-3xl flex flex-col items-center gap-y-8">
    <h1 class="text-3xl text-gray-700 font-semibold">Vui Sink</h1>
    <article class="w-full">
      <ContentSwitch />
    </article>
  </main>
</template>
