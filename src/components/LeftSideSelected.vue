<script setup lang="ts">
import { useLeftSideStore } from '@/stores/leftSide';

const store = useLeftSideStore();
</script>

<template>
  <div class="box" :class="$style.box">
    <ul class="items" :class="$style.items">
      <li class="box" v-for="item in store.selected" :key="item.id">{{ item.name }}</li>
    </ul>
    <p :class="$style.info">selected: {{ store.selected.length }} / {{ store.maxSelectedItems }}</p>
  </div>
</template>

<style module>
.box {
  justify-self: start;
}

.items {
  padding: 0;
}

.info {
  text-align: center;
}
</style>
