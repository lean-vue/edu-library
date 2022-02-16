<script lang="ts" setup>
import { provide, ref, watchEffect, type PropType } from 'vue';
import { TabGroup, TabList, Tab } from '@headlessui/vue';
import { ContentContext } from './content-context';

type ContentOption = {
  name: string;
  title: string;
};

const props = defineProps({
  options: {
    type: Object as PropType<ContentOption[]>,
    required: true,
  },
  defaultOption: String,
});

const emit = defineEmits({
  change: (_name: string) => true,
});
const handleChange = (ev: unknown) => {
  const slot = slots.value[ev as number];
  currentSlot.value = slot;
  emit('change', slot);
};

// API
const slots = ref<string[]>([]);
const currentSlot = ref<string>();
const defaultIndex = ref<number>(0);

watchEffect(() => {
  slots.value = props.options.map((o) => o.name);
  let ix = props.options.findIndex((o) => o.name === props.defaultOption);
  ix = ix === -1 ? 0 : ix;
  defaultIndex.value = ix;
  currentSlot.value = slots.value[ix];
});

provide(ContentContext, { slots, currentSlot });
</script>

<template>
  <TabGroup :default-index="defaultIndex" @change="handleChange">
    <div class="border-b border-gray-200 flex justify-center">
      <TabList as="nav" class="-mb-px flex space-x-8">
        <Tab
          as="template"
          v-slot="{ selected }"
          v-for="{ title, name } in options"
          :key="name"
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
    <slot></slot>
  </TabGroup>
</template>
