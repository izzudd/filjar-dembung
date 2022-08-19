<template>
  <div class="w-full px-4 shadow-md fixed top-0 left-0 z-40 bg-accent-white">
    <header class="container mx-auto flex justify-between py-4">
      <!-- Logo -->
      <div class="h-12 w-36 bg-slate-300">
        <!-- TODO: Add logo -->
      </div>

      <!-- Nav menu and CTA -->
      <div class="flex items-center font-semibold">
        <!-- TODO: Add link and onclick event -->
        <nav class="flex gap-8">
          <NuxtLink to="#">Wisata Edukasi</NuxtLink>
          <NuxtLink to="#">Fasilitas</NuxtLink>
          <NuxtLink to="#">Artikel</NuxtLink>
          <NuxtLink to="#">Lokasi</NuxtLink>
          <NuxtLink to="#">Testimoni</NuxtLink>
          <NuxtLink to="#">Media Sosial</NuxtLink>
        </nav>
        <button class="bg-primary text-accent-white px-4 py-2 ml-8">
          Hubungi Kami
        </button>
      </div>
    </header>
  </div>
</template>

<style lang="postcss" scoped>
nav a {
  @apply hover:text-primary;
}
</style>