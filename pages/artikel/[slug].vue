<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ContentWrapper>
    <NuxtLink to="/artikel"
      ><img
        class="rotate-180 w-7 p-2 bg-secondary mb-4"
        src="/icons/next.svg"
        alt="kembali"
    /></NuxtLink>
    <div class="border-t border-primary pt-4 mb-12 flex justify-end"></div>
    <article class="mx-auto max-w-5xl">
      <h1 class="mb-2 leading-snug">
        {{ post.title }}
      </h1>
      <time>{{ post.createdAt }}</time>
      <img class="w-full my-8" :src="post.image" alt="lorem" />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="prose max-w-none" v-html="post.body"></div>
      <div class="mt-12 flex items-center justify-between">
        <span class="text-sm block">Tags: Budidaya Ikan, Cocok Tanam</span>
        <SocialIcons class="flex gap-4" green />
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
import type { PostData } from '~~/types/content';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const slug = useRoute().params['slug'] as string;

const { data } = await useFetch<{ data: PostData }>(`/article/${slug}`, {
  baseURL: useRuntimeConfig().apiEndpoint,
});

const post = data.value.data;

post.body = String(
  await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(post.body)
);
</script>