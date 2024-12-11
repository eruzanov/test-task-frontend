<script setup lang="ts">
import { useRightSideStore } from '@/stores/rightSide';

const store = useRightSideStore();
</script>

<template>
  <div class="box" :class="$style.item">{{ store.selected?.name }}</div>
</template>

<style module>
.item {
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-transform: uppercase;
}
</style>
