<template>
  <SectionWrapper class="cover">
    <div class="min-h-screen flex items-center justify-center mt-12">
      <div class="text-center max-w-3xl">
        <h1 class="mb-4">D'EMBUNG PARK PANDANMULYO</h1>
        <p class="text-xl">Tempat Wisata Terbaik, Untuk Keluarga Tercinta</p>
        <button>
          <!-- TODO: Implement onclick event -->
          <IconPlay class="fill-accent-white hover:fill-[#D6D8CE] mt-6" />
        </button>
      </div>
    </div>
    <!-- TODO: Add video overlay -->
  </SectionWrapper>
</template>

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