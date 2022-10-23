<template>
  <div class="w-full px-4 shadow-md fixed top-0 left-0 z-40 bg-accent-white">
    <header
      class="container mx-auto flex py-4 items-center justify-between lg:justify-start"
    >
      <!-- Logo -->
      <NuxtLink to="/"
        ><img src="/img/logo.svg" alt="D'EMBUNG PARK"
      /></NuxtLink>

      <!-- Search bar -->
      <div class="flex-grow px-12 hidden lg:block">
        <SearchBar class="w-full" />
      </div>

      <!-- Nav menu and CTA -->
      <div class="hidden lg:flex items-center font-semibold">
        <nav class="gap-8 flex">
          <NuxtLink to="/#fasilitas">Fasilitas</NuxtLink>
          <NuxtLink to="/#lokasi">Lokasi</NuxtLink>
          <NuxtLink to="/#testimoni">Testimoni</NuxtLink>
          <NuxtLink to="/artikel">Artikel</NuxtLink>
        </nav>
        <ButtonAction
          class="primary ml-8"
          as-link
          to="https://ig.me/m/embungpark_official"
        >
          Hubungi Kami
        </ButtonAction>
      </div>

      <div class="lg:hidden">
        <!-- Search toggle -->
        <button class="mr-4" @click="searchOpen = !searchOpen">
          <img src="/icons/search.svg" class="w-8" alt="cari" />
        </button>
        <!-- Mobile hamburger toggle -->
        <button @click="navOpen = !navOpen">
          <IconHamburger v-show="!navOpen" class="stroke-primary" />
          <IconClose v-show="navOpen" class="stroke-primary" />
        </button>
      </div>
    </header>

    <!-- Mobile nav menu and CTA -->
    <div
      v-show="navOpen"
      class="lg:hidden top-full left-0 absolute w-screen bg-accent-white pt-4 font-bold"
    >
      <div class="container mx-auto mb-6 px-4">
        <SearchBar />
        <nav class="gap-8 flex flex-col items-center mt-6">
          <NuxtLink to="/#fasilitas">Fasilitas</NuxtLink>
          <NuxtLink to="/#lokasi">Lokasi</NuxtLink>
          <NuxtLink to="/#testimoni">Testimoni</NuxtLink>
          <NuxtLink to="/artikel">Artikel</NuxtLink>
        </nav>
      </div>
      <ButtonAction
        class="primary w-full block !py-4 text-center"
        as-link
        to="https://ig.me/m/embungpark_official"
      >
        <span class="container mx-auto">Hubungi Kami</span>
      </ButtonAction>
    </div>

    <div>
      <div
        v-show="searchOpen"
        class="lg:hidden top-full left-0 absolute w-screen bg-accent-white pt-4 font-bold"
      >
        <div class="container mx-auto mb-6 px-4">
          <SearchBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const navOpen = ref(false);
const searchOpen = ref(false);
</script>

<style lang="postcss" scoped>
nav a {
  @apply hover:text-primary;
}
</style>