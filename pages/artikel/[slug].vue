<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ContentWrapper>
    <NuxtLink to="/artikel"
      ><img
        class="rotate-180 w-7 p-2 bg-secondary mb-4"
        src="/icons/next.svg"
        alt="kembali"
    /></NuxtLink>
    <div class="border-t border-primary pt-4 mb-12 flex justify-end">
      <SearchBar />
    </div>
    <article class="mx-auto max-w-5xl">
      <h1 class="mb-2 leading-snug">
        {{ post.title }}
      </h1>
      <time>{{ post.createdAt }}</time>
      <img class="w-full my-8" :src="post.cover" alt="lorem" />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="prose max-w-none" v-html="post.body"></div>
      <div class="mt-12 flex items-center justify-between">
        <span class="text-sm block">Tags: Budidaya Ikan, Cocok Tanam</span>
        <div class="flex gap-4">
          <NuxtLink to="#"
            ><img src="/icons/instagram.svg" alt="instagram"
          /></NuxtLink>
          <NuxtLink to="#"
            ><img src="/icons/youtube.svg" alt="youtube"
          /></NuxtLink>
          <NuxtLink to="#"
            ><img src="/icons/facebook.svg" alt="facebook"
          /></NuxtLink>
        </div>
      </div>
    </article>
    <h3 class="font-bold text-xl border-b border-primary mt-24 pb-2">
      Atikel Lainnya
    </h3>
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
import getContent from '~~/composables/getContent';

const post = await getContent();
</script>