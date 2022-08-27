<template>
  <SectionWrapper class="bg-secondary">
    <div class="py-24 text-center">
      <h2 class="mb-16">INFORMASI TERBARU</h2>
      <div class="flex gap-6 mb-12 overflow-x-auto lg:overflow-hidden">
        <div
          v-for="image in images"
          :key="image"
          class="aspect-square w-4/5 bg-slate-200 flex-shrink-0 lg:flex-shrink"
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
      <SocialIcons green class="flex gap-4 h-8 justify-center" />
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