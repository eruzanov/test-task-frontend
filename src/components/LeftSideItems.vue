<script setup lang="ts">
import { useLeftSideStore } from '@/stores/leftSide';

const store = useLeftSideStore();
</script>

<template>
  <ul class="box items">
    <li class="box item" v-for="item in store.data" :key="item.id" @click="store.setSelected(item)">
      {{ item.name }}
    </li>
  </ul>
</template>
