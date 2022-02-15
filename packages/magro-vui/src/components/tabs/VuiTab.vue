<script lang="ts" setup>
import { TabPanel } from '@headlessui/vue';
import { useTabs } from './tabs-context';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const tabsApi = useTabs();
tabsApi.registerTab(props.title);
</script>

<template>
  <TabPanel class="mt-4">
    <slot />
  </TabPanel>
</template>
