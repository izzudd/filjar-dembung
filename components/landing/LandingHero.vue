<template>
  <SectionWrapper class="cover">
    <div class="relative">
      <div class="min-h-screen flex items-center justify-center mt-12">
        <div class="text-center max-w-3xl">
          <h1 class="mb-4">D'EMBUNG PARK PANDANMULYO</h1>
          <p class="text-xl">Tempat Wisata Terbaik, Untuk Keluarga Tercinta</p>
          <button @click="overlay = true">
            <!-- TODO: Implement onclick event -->
            <IconPlay class="fill-accent-white hover:fill-[#D6D8CE] mt-6" />
          </button>
        </div>
      </div>
      <div
        v-show="overlay"
        class="bg-accent-black/20 fixed top-0 left-0 w-screen h-screen p-12 z-50"
      >
        <div class="w-full h-full bg-slate-200 relative">
          <button class="top-5 left-5 absolute" @click="overlay = false">
            <IconClose class="stroke-accent-black" />
          </button>
          <!-- TODO: Add video -->
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
const overlay = ref(false);
</script>

<style lang="postcss" scoped>
.cover {
  @apply bg-cover;
  /* TODO: Use fixed image for prod */
  background-image: url(https://source.unsplash.com/random);
}

h1,
p {
  @apply text-accent-white;
}
</style>