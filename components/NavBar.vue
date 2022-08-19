<template>
  <div class="w-full px-4 shadow-md fixed top-0 left-0 z-40 bg-accent-white">
    <header class="container mx-auto flex justify-between py-4">
      <!-- Logo -->
      <img src="/img/logo.svg" alt="D'EMBUNG PARK" />

      <!-- Nav menu and CTA -->
      <div class="flex items-center font-semibold">
        <!-- TODO: Add link and onclick event -->
        <nav class="flex gap-8">
          <NuxtLink to="#">Fasilitas</NuxtLink>
          <NuxtLink to="#">Lokasi</NuxtLink>
          <NuxtLink to="#">Testimoni</NuxtLink>
          <NuxtLink to="#">Artikel</NuxtLink>
        </nav>
        <button
          class="bg-primary hover:bg-[#42756E] text-accent-white px-4 py-2 ml-8"
        >
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