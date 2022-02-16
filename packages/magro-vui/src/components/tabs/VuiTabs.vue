<script lang="ts" setup>
import { provide, reactive, ref } from 'vue';
import { TabGroup, TabList, Tab, TabPanels } from '@headlessui/vue';
import { TabsContext, type TabsApi } from './tabs-context';

defineProps({
  defaultIndex: Number,
});

const emit = defineEmits({
  change: (_index: number) => true,
});
const emitChange = (ev: unknown) => emit('change', ev as number);

const tabs = ref([] as string[]);
const api: TabsApi = {
  registerTab(title) {
    tabs.value.push(title);
  },
};

provide(TabsContext, api);
</script>

<template>
  <TabGroup :default-index="defaultIndex" @change="emitChange">
    <div class="border-b border-gray-200 flex justify-center">
      <TabList as="nav" class="-mb-px flex space-x-8">
        <Tab
          as="template"
          v-slot="{ selected }"
          v-for="(title, index) in tabs"
          :key="index"
        >
          <button
            :class="[
              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
              selected
                ? 'border-[color:var(--c-brand-light)] text-[color:var(--c-brand)]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
            ]"
          >
            {{ title }}
          </button>
        </Tab>
      </TabList>
    </div>
    <TabPanels>
      <slot></slot>
    </TabPanels>
  </TabGroup>
</template>
