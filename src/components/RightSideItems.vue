<script setup lang="ts">
import { useRightSideStore } from '@/stores/rightSide';

const store = useRightSideStore();
</script>

<template>
  <ul class="box items">
    <li class="box item" v-for="item in store.data" :key="item.id" @click="store.setSelected(item)">
      {{ item.name }}
    </li>
  </ul>
</template>
