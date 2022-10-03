<template>
  <AdminWidgetWrapper>
    <h2 class="mb-4">Artikel</h2>
    <div class="flex flex-col items-end">
      <div class="flex bg-accent-white p-2 mb-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari sesuatu?"
          class="flex-grow bg-transparent mr-2"
        />
        <button class="w-6">
          <img src="/icons/search.svg" alt="cari" />
        </button>
      </div>
      <ButtonAction class="primary" as-link to="/admin/artikel/baru"
        >Tambah Artikel</ButtonAction
      >
    </div>
    <div class="flex flex-col gap-2 mt-6">
      <AdminArticleStrip v-for="p in posts.data" :key="p.slug" :post="p" />
    </div>
  </AdminWidgetWrapper>
</template>

<script lang="ts" setup>
import { APIResponse, PostStrip } from '~~/types/content';

const searchQuery = ref('');

const { data: posts } = await useFetch<APIResponse<PostStrip[]>>(`/articles`, {
  baseURL: useRuntimeConfig().public.apiEndpoint,
});
</script>