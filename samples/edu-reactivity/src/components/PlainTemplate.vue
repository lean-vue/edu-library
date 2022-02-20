<script lang="ts" setup>
import { VuiButton } from '@magro/vui';

const count = 1;
const counter = { count: 1 };

const todos = [
  { id: 1, title: 'App Start', completed: true },
  { id: 2, title: 'Template Syntax', completed: false },
  { id: 3, title: 'Reactivity', completed: false },
];
</script>

<template>
  <article
    class="bg-white border border-gray-200 shadow-sm overflow-hidden rounded-lg"
  >
    <header class="px-4 py-5 border-b border-gray-200 sm:px-6">
      <h2 class="text-lg leading-6 font-medium text-gray-900">
        Beispiel Anwendung
      </h2>
    </header>
    <div class="px-4 py-5 sm:p-6 flex">
      <div class="grow border-r border-gray-200 px-4">
        <h3 class="text-center font-medium">Counter</h3>
        <div class="flex items-center py-4 gap-x-4 justify-between">
          <span>Primitive Counter: 1</span>
          <VuiButton primary label="Inc" />
        </div>
        <div class="flex items-center py-4 gap-x-4 justify-between">
          <span>Object Counter: 1</span>
          <VuiButton primary label="Inc" />
        </div>
      </div>
      <div class="grow px-4">
        <h3 class="text-center font-medium">Todos</h3>
        <ul class="mt-4 px-4">
          <li class="flex items-center gap-x-4 py-2">
            <input class="" type="checkbox" checked /><span>App Start</span>
          </li>
          <li class="flex items-center gap-x-4 py-2">
            <input class="" type="checkbox" /><span>Template Syntax</span>
          </li>
          <li class="flex items-center gap-x-4 py-2">
            <input class="" type="checkbox" /><span>Reactivity</span>
          </li>
        </ul>
        <div class="mt-4 ml-4 pt-4 border-t border-gray-200">
          Data:
          <pre
            >{{ JSON.stringify(todos, null, 2) }}
          </pre>
        </div>
      </div>
    </div>
  </article>
</template>
