import { ref } from 'vue';
import { defineStore } from 'pinia';

const initData = [
  { id: 1, name: 'Shoes 1' },
  { id: 2, name: 'Shoes 2' },
  { id: 3, name: 'Shoes 3' },
  { id: 4, name: 'Shoes 4' },
  { id: 5, name: 'T-shirt 1' },
  { id: 6, name: 'T-shirt 2' },
  { id: 7, name: 'T-shirt 3' },
  { id: 8, name: 'T-shirt 4' },
];

type Item = (typeof initData)[number];

const MAX_SELECTED_ITEMS = 6;

// можно выбрать от 1 до 6 вещей, которые должны отображаться в верхней левой части в порядке выбора.
export const useLeftSideStore = defineStore('leftSide', () => {
  const data = initData;
  const selected = ref<Item[]>([]);

  function setSelected(item: Item) {
    if (selected.value.length < MAX_SELECTED_ITEMS) {
      selected.value = selected.value.concat(item);
    }
  }

  return { data, selected, setSelected, maxSelectedItems: MAX_SELECTED_ITEMS };
});
