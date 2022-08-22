<template>
  <footer class="bg-accent px-4 pb-8 pt-16 text-accent-white">
    <div class="container mx-auto flex gap-8">
      <div class="w-1/4">
        <img src="/img/logo.svg" class="mb-4" alt="D'EMBUNG PARK" />
        <p class="text-sm">
          Jl. Raya Dusun Jambu Pandanmulyo, Jambu, Pandanmulyo, Kec. Tajinan,
          Kabupaten Malang, Jawa Timur 65172
        </p>
      </div>
      <nav>
        <NuxtLink to="#">Fasilitas</NuxtLink>
        <NuxtLink to="#">Lokasi</NuxtLink>
        <NuxtLink to="#">Testimoni</NuxtLink>
        <NuxtLink to="#">Artikel</NuxtLink>
      </nav>
      <div class="w-2/5">
        <p class="font-bold mb-2">Alamat</p>
        <div class="aspect-video w-full bg-slate-300"></div>
      </div>
      <div>
        <p class="font-bold mb-2">Kontak</p>
        <ButtonAction class="primary whitespace-nowrap"
          >Hubungi Kami</ButtonAction
        >
      </div>
    </div>
    <div class="text-center border-t-2 border-accent-white mt-8 pt-4 font-bold">
      COPYRIGHT © {{ new Date().getFullYear() }} D'EMBUNG PARK PANDANMULYO
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
nav a {
  @apply font-bold  mb-6 block;
}
</style>