<template>
  <SectionWrapper class="bg-secondary">
    <div class="py-24 text-center">
      <h2 class="mb-16">INFORMASI TERBARU</h2>
      <div class="flex gap-6 mb-12">
        <div
          v-for="image in images"
          :key="image"
          class="aspect-square w-full bg-slate-200"
        >
          <img :src="image" alt="lorem" />
        </div>
      </div>
      <div class="text-center mb-8">
        <ButtonAction as-link class="secondary" to="/artikel/mock-post"
          >Selengkapnya</ButtonAction
        >
      </div>
      <p class="font-semibold mb-4">atau kunjungi sosial media kami lainnya</p>
      <div class="flex gap-4 justify-center">
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
  </SectionWrapper>
</template>

<script lang="ts" setup>
const start = Math.floor(Math.random() * 5);
const images: string[] = [];

for (let i = 0; i < 3; i++)
  images.push(
    `/img/landscape/${Math.random() > 0.5 ? 'alt/' : ''}${
      ((start + i) % 5) + 1
    }.jpg`
  );
</script>

<style scoped lang="postcss">
img {
  @apply aspect-square object-cover block w-full;
}
</style>