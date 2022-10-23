<template>
  <footer class="bg-accent px-4 pb-8 pt-16 text-accent-white">
    <div class="container mx-auto flex flex-col lg:flex-row gap-8">
      <div class="lg:w-1/4 text-center lg:text-left">
        <img
          src="/img/logo.svg"
          class="mb-4 mx-auto lg:mx-0"
          alt="D'EMBUNG PARK"
        />
        <p class="text-sm">
          Jl. Raya Dusun Jambu Pandanmulyo, Jambu, Pandanmulyo, Kec. Tajinan,
          Kabupaten Malang, Jawa Timur 65172
        </p>
      </div>
      <nav class="hidden lg:block">
        <NuxtLink to="/#fasilitas">Fasilitas</NuxtLink>
        <NuxtLink to="/#lokasi">Lokasi</NuxtLink>
        <NuxtLink to="/#testimoni">Testimoni</NuxtLink>
        <NuxtLink to="/artikel">Artikel</NuxtLink>
      </nav>
      <div class="w-2/5 hidden lg:block">
        <p class="font-bold mb-2">Alamat</p>
        <div class="aspect-video w-full bg-slate-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.313404869151!2d112.6956098!3d-8.069481600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62762e7ca94ed%3A0x18355398663fc53!2sD&#39;Embung%20Park%20Pandanmulyo!5e0!3m2!1sen!2sid!4v1661345640442!5m2!1sen!2sid"
            class="w-full h-full"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="hidden lg:block">
        <p class="font-bold mb-2">Kontak</p>
        <ButtonAction
          class="primary whitespace-nowrap"
          as-link
          to="https://ig.me/m/embungpark_official"
          >Hubungi Kami</ButtonAction
        >
      </div>
      <SocialIcons class="flex justify-center gap-4 lg:hidden h-8" green />
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