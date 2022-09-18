<template>
  <div class="flex bg-secondary p-2">
    <input
      v-model="query"
      type="text"
      placeholder="Cari sesuatu?"
      class="flex-grow bg-transparent mr-2"
      @keydown.self.enter="
        navigateTo({
          path: '/artikel',
          query: {
            q: query,
          },
        })
      "
    />
    <NuxtLink
      class="w-6"
      :to="{
        path: '/artikel',
        query: {
          q: query,
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