import { inject, type InjectionKey, type Ref } from 'vue';

export type ContentState = {
  currentSlot: Ref<string>;
  slots: Ref<string[]>;
};

export const ContentContext = Symbol(
  'ContentContext'
) as InjectionKey<ContentState>;

export const useContentContext = () => {
  const context = inject(ContentContext, null);

  if (context === null) {
    let err = new Error(
      `<VuiContentSlots /> is missing a parent <VuiContentSwitch /> component.`
    );
    throw err;
  }

  return context;
};
