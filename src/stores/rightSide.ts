import { ref } from 'vue';
import { defineStore } from 'pinia';

const initData = [
  { id: 11, name: 'Jacket 1' },
  { id: 12, name: 'Jacket 2' },
  { id: 13, name: 'Jacket 3' },
  { id: 14, name: 'Jacket 4' },
  { id: 15, name: 'Hoodie 1' },
  { id: 16, name: 'Hoodie 2' },
  { id: 17, name: 'Hoodie 3' },
  { id: 18, name: 'Hoodie 4' },
];

export type Item = (typeof initData)[number];

// можно выбрать одновременно только 1 вещь, которая должна отображаться справа-сверху.
export const useRightSideStore = defineStore('rightSide', () => {
  const data = initData;
  const selected = ref<Item>();

  function setSelected(item: Item) {
    selected.value = item;
  }

  return { data, selected, setSelected };
});
