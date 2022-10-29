<template>
  <SectionWrapper>
    <div class="lg:bg-secondary flex lg:items-center gap-16 lg:p-16">
      <div class="flex-1 text-center lg:text-left">
        <h2 class="mb-2">INFORMASI LAINNYA</h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="prose mb-6" v-html="data.description"></div>
        <ButtonAction
          class="secondary"
          as-link
          to="https://ig.me/m/dembungpark"
          target="blank"
        >
          Hubungi Sekarang
        </ButtonAction>
        <div class="font-semibold flex items-center justify-between mt-6">
          Atau kunjungi sosial media kami
          <SocialIcons green class="flex gap-4 h-8 justify-end" />
        </div>
      </div>
      <SliderWrapper v-once class="hidden lg:block flex-1">
        <SliderItem v-for="img in data.linkImage" :key="img">
          <img :src="img" class="w-full object-cover" alt="lorem" />
        </SliderItem>
      </SliderWrapper>
    </div>
  </SectionWrapper>
</template>

<script lang="ts" setup>
import { Info } from '~~/types/content';

const { data } = await useFetch<Info>(`/info`, {
  baseURL: useRuntimeConfig().public.apiEndpoint,
  initialCache: false,
  server: false,
});
</script>