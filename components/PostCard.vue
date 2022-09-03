<template>
  <article
    class="flex flex-col lg:flex-row items-center gap-8 px-8 py-6 bg-secondary"
  >
    <img
      class="aspect-square lg:w-1/3"
      src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
      alt="lorem"
    />
    <div>
      <h3 class="mb-1">Budidaya Ikan Sidat Banyak Beri Warga Sekitar</h3>
      <time class="text-sm">1 Januari 2022</time>
      <p class="mt-4 excerpt">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."
      </p>
      <div class="text-right mt-8">
        <ButtonAction as-link class="secondary" to="/artikel/mock-post"
          >Selengkapnya</ButtonAction
        >
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
// TODO: Implement props content rendering
</script>

<style lang="postcss" scoped>
.excerpt {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>