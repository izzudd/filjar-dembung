<template>
  <div class="w-full px-4 shadow-md fixed top-0 left-0 z-40 bg-accent-white">
    <header class="container mx-auto flex justify-between py-4">
      <!-- Logo -->
      <NuxtLink to="/"
        ><img src="/img/logo.svg" alt="D'EMBUNG PARK"
      /></NuxtLink>

      <!-- Nav menu and CTA -->
      <div class="hidden lg:flex items-center font-semibold">
        <nav class="gap-8 flex">
          <NuxtLink to="/#fasilitas">Fasilitas</NuxtLink>
          <NuxtLink to="/#lokasi">Lokasi</NuxtLink>
          <NuxtLink to="/#testimoni">Testimoni</NuxtLink>
          <NuxtLink to="/artikel">Artikel</NuxtLink>
        </nav>
        <ButtonAction class="primary ml-8"> Hubungi Kami </ButtonAction>
      </div>

      <!-- Mobile hamburger toggle -->
      <button class="lg:hidden" @click="navOpen = !navOpen">
        <IconHamburger v-show="!navOpen" class="stroke-primary" />
        <IconClose v-show="navOpen" class="stroke-primary" />
      </button>
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
      <ButtonAction class="primary w-full block !py-4">
        <span class="container mx-auto">Hubungi Kami</span>
      </ButtonAction>
    </div>
  </div>
</template>

<script lang="ts" setup>
const navOpen = ref(false);
</script>

<style lang="postcss" scoped>
nav a {
  @apply hover:text-primary;
}
</style>