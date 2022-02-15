import { inject, type InjectionKey, type Ref } from 'vue';

export type TabsApi = {
  registerTab(title: string): void;
};

export const TabsContext = Symbol('TabsContext') as InjectionKey<TabsApi>;

export const useTabs = () => {
  const context = inject(TabsContext, null);

  if (context === null) {
    if (context === null) {
      let err = new Error(
        `<VueTab /> is missing a parent <VueTabs /> component.`
      );
      throw err;
    }
  }

  return context;
};
