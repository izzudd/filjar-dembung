<template>
  <SectionWrapper>
    <div class="lg:bg-secondary flex lg:items-center gap-16 lg:p-16">
      <div class="flex-1 text-center lg:text-left">
        <h2 class="mb-2">INFORMASI LAINNYA</h2>
        <p class="text-justify mb-2">
          Selain sebagai tempat wisata, D'Embung Park Pandanmulyo juga
          menyediakan fasilitas yang dapat Anda gunakan untuk kegiatan lainnya,
          seperti:
        </p>
        <ul class="list-disc list-inside mb-12">
          <li>Pernikahan</li>
          <li>Pertemuan Keluarga</li>
          <li>Kegiatan Kunjungan, dan sebagainya...</li>
        </ul>
        <ButtonAction
          class="secondary"
          as-link
          to="https://ig.me/m/dembungpark"
          target="blank"
        >
          Hubungi Sekarang
        </ButtonAction>
        <div class="font-semibold flex items-center justify-between mt-6">
          Atau kunjungi sosial media kami
          <SocialIcons green class="flex gap-4 h-8 justify-end" />
        </div>
      </div>
      <SliderWrapper v-once class="hidden lg:block flex-1">
        <SliderItem v-for="idx in 5" :key="idx">
          <!-- TODO: Fetch image from API -->
          <img
            :src="`/img/landscape/${idx}.jpg`"
            class="w-full object-cover"
            alt="lorem"
          />
        </SliderItem>
      </SliderWrapper>
    </div>
  </SectionWrapper>
</template>