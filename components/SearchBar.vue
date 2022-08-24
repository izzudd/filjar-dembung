<template>
  <div class="flex bg-secondary p-2">
    <input
      v-model="query"
      type="text"
      placeholder="Cari sesuatu?"
      class="flex-shrink bg-transparent mr-2"
      @keydown.self.enter="
        navigateTo({
          path: '/artikel',
          query: {
            s: query,
          },
        })
      "
    />
    <NuxtLink
      :to="{
        path: '/artikel',
        query: {
          s: query,
        },
      }"
    >
      <img src="/icons/search.svg" alt="cari"
    /></NuxtLink>
  </div>
</template>

<script setup lang="ts">
const query = ref('');
</script>