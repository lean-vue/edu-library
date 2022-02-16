import { inject, type InjectionKey } from 'vue';

export type TabsApi = {
  registerTab(title: string): void;
};

export const TabsContext = Symbol('TabsContext') as InjectionKey<TabsApi>;

export const useTabs = () => {
  const context = inject(TabsContext, null);

  if (context === null) {
    let err = new Error(
      `<VuiTab /> is missing a parent <VuiTabs /> component.`
    );
    throw err;
  }

  return context;
};
