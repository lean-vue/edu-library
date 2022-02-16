import '@magro/vui/dist/vui.css';

import './styles/vars.css';
import './styles/layout.css';
import './styles/code.css';
import './styles/custom-blocks.css';
import './styles/sidebar-links.css';

import { Theme } from 'vitepress';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';

import ApiSwitch from './components/api-switch/ApiSwitch.vue';
import ApiSlots from './components/api-switch/ApiSlots.vue';
import CompositionSlot from './components/api-switch/CompositionSlot.vue';
import OptionsSlot from './components/api-switch/OptionsSlot.vue';

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('ApiSwitch', ApiSwitch);
    app.component('ApiSlots', ApiSlots);
    app.component('CompositionSlot', CompositionSlot);
    app.component('OptionsSlot', OptionsSlot);
  },
};

export default theme;
