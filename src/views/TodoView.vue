<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <main>Todo View</main>
  <!-- id это имя параметра, который указан после : в path у роута
   в router/index.ts у роута, где указан TodoView.vue как компонент -->
  <pre>{{ route.params.id }}</pre>
</template>
