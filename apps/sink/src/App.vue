<script setup lang="ts">
import { VuiButton, VuiTabs } from '@magro/vui';
</script>

<template>
  <main class="mx-auto mt-12 max-w-xl flex flex-col items-center gap-y-8">
    <h1 class="text-3xl text-gray-700 font-semibold">Vui Sink</h1>
    <div>
      <VuiButton label="Click me!" primary />
    </div>
    <div>
      <VuiTabs />
    </div>
  </main>
</template>
