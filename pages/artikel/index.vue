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
    <article class="mx-auto md:w-4/5 my-12">
      <img
        class="w-full mb-8"
        src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
        alt="lorem"
      />
      <h3 class="mb-1">Budidaya Ikan Sidat Banyak Beri Warga Sekitar</h3>
      <time class="text-sm">1 Januari 2022</time>
      <p class="mt-4">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <div class="text-right mt-8">
        <ButtonAction as-link class="secondary" to="/artikel/mock-post"
          >Selengkapnya</ButtonAction
        >
      </div>
    </article>
    <div class="border-b border-primary pb-4"></div>
    <div class="mx-auto md:w-4/5 my-12 flex flex-col gap-8">
      <PostCard v-for="p in posts.data" :key="p.slug" :post="p" />
    </div>
    <ButtonAction class="secondary mt-16 mx-auto block"
      >Lebih Banyak</ButtonAction
    >
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
    searchQuery.value = route.query.s as string;
    await refresh();
  }
);
</script>