<template>
  <SectionWrapper class="relative">
    <img
      class="absolute top-0 left-0 w-full h-full object-cover"
      src="/img/landscape/2.jpg"
    />
    <video
      autoplay
      loop
      muted
      poster="/img/landscape/2.jpg"
      class="w-full h-full absolute top-0 left-0 object-cover hidden lg:block"
    >
      <source src="/video/cover-low.mp4" />
    </video>
    <div class="relative">
      <div class="min-h-screen flex items-center justify-center mt-12">
        <div class="text-center max-w-3xl">
          <h1 class="mb-4">D'EMBUNG PARK PANDANMULYO</h1>
          <p class="text-xl mb-12">
            Tempat Wisata Terbaik, Untuk Keluarga Tercinta
          </p>
          <button class="hidden lg:inline" @click="overlay = true">
            <IconPlay class="fill-accent-white hover:fill-[#D6D8CE]" />
          </button>
          <ButtonAction as-link class="lg:hidden secondary" href="#tentang"
            >Selengkapnya</ButtonAction
          >
        </div>
      </div>
      <div
        v-show="overlay"
        class="bg-accent-black/40 fixed top-20 left-0 w-screen h-screen flex items-center justify-center"
      >
        <div class="relative">
          <button class="top-5 left-5 absolute z-50" @click="overlay = false">
            <IconClose class="stroke-accent-black" />
          </button>
          <video ref="video" controls>
            <source src="/video/cover-low.mp4" />
          </video>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
const overlay = ref(false);
const video = ref(null);

watch(overlay, (v) => {
  if (v) video.value.play();
  else video.value.pause();
});
</script>

<style lang="postcss" scoped>
h1,
p {
  @apply text-accent-white;
}
</style>