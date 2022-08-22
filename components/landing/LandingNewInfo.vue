<template>
  <SectionWrapper class="bg-secondary">
    <div class="py-24 text-center">
      <h2 class="mb-16">INFORMASI TERBARU</h2>
      <div class="flex gap-6 mb-12">
        <img
          src="https://source.unsplash.com/random/?village"
          class="w-1/3 aspect-square object-cover"
          alt="lorem"
        />
        <img
          src="https://source.unsplash.com/random/?village"
          class="w-1/3 aspect-square object-cover"
          alt="lorem"
        />
        <img
          src="https://source.unsplash.com/random/?village"
          class="w-1/3 aspect-square object-cover"
          alt="lorem"
        />
      </div>
      <ButtonAction class="secondary mb-10 mx-auto">Selengkapnya</ButtonAction>
      <p class="font-semibold mb-4">atau kunjungi sosial media kami lainnya</p>
      <div class="flex gap-4 justify-center">
        <NuxtLink to="#"
          ><img src="/icons/instagram.svg" alt="instagram"
        /></NuxtLink>
        <NuxtLink to="#"
          ><img src="/icons/youtube.svg" alt="youtube"
        /></NuxtLink>
        <NuxtLink to="#"
          ><img src="/icons/facebook.svg" alt="facebook"
        /></NuxtLink>
      </div>
    </div>
  </SectionWrapper>
</template>