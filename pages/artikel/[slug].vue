<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ContentWrapper>
    <Head>
      <Title>{{ post.title }}</Title>
      <Meta name="description" :content="post.excerpt" />
      <Meta property="og:locale" content="id_ID" />
      <Meta property="og:type" content="article" />
      <Meta property="og:title" :content="post.title" />
      <Meta property="og:description" :content="post.excerpt" />
      <Meta
        property="article:published_time"
        :content="post.CreatedAt.toString()"
      />
      <Meta
        property="article:modified_time"
        :content="(post.UpdatedAt || post.UpdatedAt).toString()"
      />
      <Meta property="og:image" :content="post.image" />
    </Head>

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
      <time>{{ post.CreatedAt }}</time>
      <img class="w-full my-8" :src="post.image" alt="lorem" />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="prose max-w-none" v-html="post.body"></div>
      <div class="mt-12 flex items-center justify-end">
        <SocialIcons class="flex gap-4" green />
      </div>
    </article>
    <h3 class="font-bold text-xl border-b border-primary mt-24 pb-2">
      Atikel Lainnya
    </h3>
    <div class="mx-auto w-4/5 mt-12 flex flex-col gap-8">
      <PostCard v-for="p in posts.data" :key="p.slug" :post="p" />
      <ButtonAction class="secondary mt-16 mx-auto block" as-link to="/artikel"
        >Lebih Banyak</ButtonAction
      >
    </div>
  </ContentWrapper>
</template>

<script lang="ts" setup>
import type { APIResponse, PostData, PostStrip } from '~~/types/content';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const slug = useRoute().params.slug as string;

const { data, refresh } = await useFetch<APIResponse<PostData>>(
  `/article/${slug}`,
  {
    baseURL: useRuntimeConfig().public.apiEndpoint,
  }
);

const formatDate = (date) =>
  new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

async function formatResponse(data: PostData) {
  data.body = String(
    await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(data.body)
  );
  data.CreatedAt = formatDate(data.CreatedAt);
  data.UpdatedAt = formatDate(data.UpdatedAt);

  return data;
}

let post = ref(await formatResponse(data.value.data));

onMounted(async () => {
  await refresh();
  post.value = await formatResponse(data.value.data);
});

const { data: posts } = await useFetch<APIResponse<PostStrip[]>>(`/articles`, {
  baseURL: useRuntimeConfig().public.apiEndpoint,
  params: {
    limit: true,
  },
});
</script>