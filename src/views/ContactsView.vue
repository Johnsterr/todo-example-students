<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- есть вложенные children роуты, поэтому размечен RouterView -->
  <section class="contacts">
    <main>Contacts View</main>
    <RouterView />
  </section>
  <div>test</div>
  <RouterView />
</template>

<style>
.contacts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
</style>
