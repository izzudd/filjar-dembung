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
const emit = defineEmits(['delete']);

const formatDate = (date) =>
  new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

async function deleteArticle() {
  const confirmed = window.confirm(
    `Anda yakin akan menghapus artikel berjudul "${props.post.title}"?`
  );
  if (!confirmed) return;

  const { data, error } = await useFetch<APIResponse<string>>(
    `/article/${props.post.slug}`,
    {
      baseURL: useRuntimeConfig().public.apiEndpoint,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('admin_token')}`,
      },
      initialCache: false,
    }
  );

  if (error.value || !data.value?.success) {
    window.alert('Gagal menghapus artikel, silahkan coba lagi');
    return;
  }

  window.alert('Artikel berhasil dihapus');
  emit('delete');
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