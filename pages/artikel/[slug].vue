<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ContentWrapper>
    <NuxtLink to="/artikel"
      ><img
        class="rotate-180 w-7 p-2 bg-secondary mb-4"
        src="/icons/next.svg"
        alt="kembali"
    /></NuxtLink>
    <div class="border-t border-primary pt-4 mb-12">
      <div class="bg-slate-200 w-72 h-12 ml-auto"></div>
    </div>
    <article class="mx-auto max-w-5xl">
      <h1 class="mb-2 leading-snug">
        {{ post.title }}
      </h1>
      <time>{{ post.createdAt }}</time>
      <img class="w-full my-8" :src="post.cover" alt="lorem" />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="prose max-w-none" v-html="post.body"></div>
    </article>
  </ContentWrapper>
</template>

<script lang="ts" setup>
import getContent from '~~/composables/getContent';

const post = await getContent();
</script>