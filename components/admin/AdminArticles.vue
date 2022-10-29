<template>
  <AdminWidgetWrapper>
    <h2 class="mb-4">Berita</h2>
    <div class="flex flex-col items-end">
      <div class="flex bg-accent-white p-2 mb-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari sesuatu?"
          class="flex-grow bg-transparent mr-2"
        />
        <button class="w-6" @click="refresh()">
          <img src="/icons/search.svg" alt="cari" />
        </button>
      </div>
      <ButtonAction class="primary" as-link to="/admin/artikel/baru"
        >Tambah Berita</ButtonAction
      >
    </div>
    <div class="flex flex-col gap-2 mt-6">
      <p v-if="pending">Sedang memuat...</p>
      <template v-else>
        <AdminArticleStrip
          v-for="p in posts.data"
          :key="p.slug"
          :post="p"
          @delete="refresh()"
        />
      </template>
    </div>
  </AdminWidgetWrapper>
</template>

<script lang="ts" setup>
import { APIResponse, PostStrip } from '~~/types/content';

const searchQuery = ref('');

const fetchData = () =>
  $fetch<APIResponse<PostStrip[]>>(
    searchQuery.value ? '/article' : '/articles',
    {
      baseURL: useRuntimeConfig().public.apiEndpoint,
      params: {
        q: searchQuery.value,
      },
    }
  );

const {
  data: posts,
  refresh,
  pending,
} = useAsyncData(('artikel-' + searchQuery.value) as string, fetchData, {
  initialCache: false,
});

watch(searchQuery, async () => await refresh());
</script>