<template>
  <article
    class="flex flex-col lg:flex-row items-center gap-8 px-8 py-6 bg-secondary"
  >
    <img class="aspect-square lg:w-1/3" :src="post.image" :alt="post.title" />
    <div class="w-full">
      <h3 class="mb-1">{{ post.title }}</h3>
      <time class="text-sm">{{ post.createdAt }}</time>
      <p class="mt-4 excerpt">
        {{ post.excerpt }}
      </p>
      <div class="text-right mt-8">
        <ButtonAction as-link class="secondary" :to="`/artikel/${post.id}`"
          >Selengkapnya</ButtonAction
        >
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { PostStrip } from '~~/types/content';

const props = defineProps<{
  post: PostStrip;
}>();

const formatDate = (date) =>
  new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

// eslint-disable-next-line vue/no-mutating-props
props.post.createdAt = formatDate(props.post.createdAt);
// eslint-disable-next-line vue/no-mutating-props
props.post.updatedAt = formatDate(props.post.updatedAt);
</script>

<style lang="postcss" scoped>
.excerpt {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>