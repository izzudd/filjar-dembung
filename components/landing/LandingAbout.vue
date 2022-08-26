<template>
  <SectionWrapper>
    <div class="bg-secondary flex items-center gap-16 p-16">
      <div class="flex-1">
        <h2 class="mb-2">WISATA EDUKASI</h2>
        <h3 class="mb-6">D'Embung Park Pandanmulyo</h3>
        <p class="text-justify">
          D'Embung Park memiliki tujuan yang lebih besar dari hanya sekedar
          tempat wisata. Dengan memanfaatkan sumber daya yang ada kami
          menyajikan pengalaman bagi pengunjung untuk bisa bertani dan beternak
          secara langsung. Memahami tahapan, kegunaan, dan hasil yang
          didapatkan.
        </p>
      </div>
      <SliderWrapper v-once class="flex-1">
        <SliderItem v-for="idx in 5" :key="idx">
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