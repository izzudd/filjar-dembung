<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ContentWrapper>
    <NuxtLink v-show="searchQuery" to="/artikel"
      ><img
        class="rotate-180 w-7 p-2 bg-secondary mb-4"
        src="/icons/next.svg"
        alt="kembali"
    /></NuxtLink>
    <header class="text-center lg:border-b border-primary pb-12 lg:pb-4 mb-6">
      <h1 class="text-primary text-3xl lg:text-5xl tracking-widest mb-1">
        ARTIKEL EDUKASI
      </h1>
      <p class="font-bold lg:text-xl">D'Embung Park Pandanmulyo</p>
    </header>
    <p
      v-show="!searchQuery"
      class="font-bold lg:text-xl border-b border-primary flex-grow pb-2"
    >
      Artikel Terbaru
    </p>
    <p v-show="searchQuery" class="font-bold text-xl mt-16">
      Hasil Pencarian "{{ searchQuery }}"
    </p>
    <article
      v-show="!searchQuery"
      v-if="posts.data.length > 0"
      class="mx-auto md:w-4/5 my-12"
    >
      <img
        class="w-full mb-8"
        :src="posts.data[0].image"
        :alt="posts.data[0].title"
      />
      <h3 class="mb-1">{{ posts.data[0].title }}</h3>
      <time class="text-sm">{{ formatDate(posts.data[0].CreatedAt) }}</time>
      <p class="mt-4">
        {{ posts.data[0].excerpt }}
      </p>
      <div class="text-right mt-8">
        <ButtonAction
          as-link
          class="secondary"
          :to="`/artikel/${posts.data[0].slug}`"
          >Selengkapnya</ButtonAction
        >
      </div>
    </article>
    <div class="border-b border-primary pb-4"></div>
    <div class="mx-auto md:w-4/5 my-12 flex flex-col gap-8">
      <PostCard v-for="p in posts.data" :key="p.slug" :post="p" />
    </div>
    <p v-if="posts.data.length === 0" class="text-center">Tidak ditemukan</p>
  </ContentWrapper>
</template>

<script lang="ts" setup>
import { APIResponse, PostStrip } from '~~/types/content';

const route = useRoute();
const searchQuery = ref(route.query?.q || '');

const { data: posts, refresh } = await useFetch<
  APIResponse<PostStrip[], { query: string }>
>(searchQuery.value ? '/article' : '/articles', {
  baseURL: useRuntimeConfig().public.apiEndpoint,
  params: {
    q: searchQuery.value,
  },
});

watch(
  () => route.query,
  async () => {
    searchQuery.value = route.query.q as string;
    await refresh();
  }
);

const formatDate = (date) =>
  new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
</script>