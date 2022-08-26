<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ContentWrapper>
    <NuxtLink v-show="searchQuery" to="/artikel"
      ><img
        class="rotate-180 w-7 p-2 bg-secondary mb-4"
        src="/icons/next.svg"
        alt="kembali"
    /></NuxtLink>
    <header class="text-center border-b border-primary pb-4 mb-4">
      <h1 class="text-primary text-5xl tracking-widest mb-1">
        ARTIKEL EDUKASI
      </h1>
      <p class="font-bold text-xl">D'Embung Park Pandanmulyo</p>
    </header>
    <div class="flex items-end justify-between border-b border-primary pb-4">
      <p class="font-bold text-xl">
        {{ searchQuery ? `Hasil Pencarian ${searchQuery}` : 'Artikel Terbaru' }}
      </p>
      <SearchBar />
    </div>
    <article class="mx-auto w-4/5 my-12">
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
    <div class="mx-auto w-4/5 my-12 flex flex-col gap-8">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
    <ButtonAction class="secondary mt-16 mx-auto block"
      >Lebih Banyak</ButtonAction
    >
  </ContentWrapper>
</template>

<script lang="ts" setup>
const route = useRoute();
const searchQuery = ref('');
watch(
  () => route.query,
  () => (searchQuery.value = route.query.s as string)
);
</script>