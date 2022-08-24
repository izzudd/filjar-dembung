<template>
  <div class="w-full px-4 shadow-md fixed top-0 left-0 z-40 bg-accent-white">
    <header class="container mx-auto flex justify-between py-4">
      <!-- Logo -->
      <NuxtLink to="/"
        ><img src="/img/logo.svg" alt="D'EMBUNG PARK"
      /></NuxtLink>

      <!-- Nav menu and CTA -->
      <div class="flex items-center font-semibold">
        <!-- TODO: Add link and onclick event -->
        <nav class="flex gap-8">
          <NuxtLink to="/#fasilitas">Fasilitas</NuxtLink>
          <NuxtLink to="/#lokasi">Lokasi</NuxtLink>
          <NuxtLink to="/#testimoni">Testimoni</NuxtLink>
          <NuxtLink to="/artikel">Artikel</NuxtLink>
        </nav>
        <ButtonAction class="primary ml-8"> Hubungi Kami </ButtonAction>
      </div>
    </header>
  </div>
</template>

<style lang="postcss" scoped>
nav a {
  @apply hover:text-primary;
}
</style>