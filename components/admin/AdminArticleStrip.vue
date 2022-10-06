<template>
  <article class="flex gap-2">
    <img
      :src="post.image"
      :alt="post.title"
      class="w-24 aspect-square object-cover"
    />
    <div class="w-full">
      <h3>{{ post.title }}</h3>
      <time class="mt-2 text-sm font-light block">{{
        formatDate(post.CreatedAt)
      }}</time>
    </div>
    <div class="flex flex-col gap-2 justify-center">
      <ButtonAction
        class="primary text-center"
        as-link
        :to="`/admin/artikel/edit/${post.slug}`"
        >Edit</ButtonAction
      >
      <button class="bg-red-500" @click="deleteArticle()">Hapus</button>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { APIResponse, PostStrip } from '~~/types/content';

const props = defineProps<{ post: PostStrip }>();

const formatDate = (date) =>
  new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

async function deleteArticle() {
  const { data, error } = await useFetch<APIResponse<string>>(
    `/article/${props.post.slug}`,
    {
      baseURL: useRuntimeConfig().public.apiEndpoint,
      method: 'DELETE',
    }
  );

  // TODO: Handle error
  window.console.log(data.value, error.value);
}
</script>

<style lang="postcss" scoped>
.h3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

button {
  @apply w-full py-1 px-4 text-white hover:opacity-80;
}
</style>