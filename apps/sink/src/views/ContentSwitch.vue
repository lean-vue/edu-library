<script lang="ts" setup>
import { VuiContentSwitch, VuiContentSlots } from '@magro/vui';

const options = [
  { name: 'js', title: 'JavaScript' },
  { name: 'ts', title: 'TypeScript' },
  { name: 'coffee', title: 'CoffeeScript' },
];
</script>

<template>
  <VuiContentSwitch :options="options" :default-option="'ts'">
    <div class="mt-4">
      <section>
        <h2 class="text-lg">Common Content</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          laudantium optio harum cupiditate sint sed libero molestiae, voluptas
          cumque dolor dignissimos commodi doloribus vero eos est qui mollitia
          et neque.
        </p>
      </section>
      <VuiContentSlots>
        <template v-slot:js>
          <p class="my-4">JavaScript Content</p>
        </template>
        <template v-slot:ts>
          <p class="my-4">TypeScript Content</p>
        </template>
        <template v-slot:coffee>
          <p class="my-4">CoffeeScript Content</p>
        </template>
      </VuiContentSlots>
      <section>
        <h2 class="text-lg">Common Content</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          laudantium optio harum cupiditate sint sed libero molestiae, voluptas
          cumque dolor dignissimos commodi doloribus vero eos est qui mollitia
          et neque.
        </p>
      </section>
      <VuiContentSlots>
        <template v-slot:js>
          <p class="my-4">JavaScript Content</p>
        </template>
        <template v-slot:ts>
          <p class="my-4">TypeScript Content</p>
        </template>
        <template v-slot:coffee>
          <p class="my-4">CoffeeScript Content</p>
        </template>
      </VuiContentSlots>
      <section>
        <h2 class="text-lg">Common Content</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          laudantium optio harum cupiditate sint sed libero molestiae, voluptas
          cumque dolor dignissimos commodi doloribus vero eos est qui mollitia
          et neque.
        </p>
      </section>
    </div>
  </VuiContentSwitch>
</template>
