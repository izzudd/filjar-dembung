<template>
  <SectionWrapper>
    <div class="lg:bg-secondary flex lg:items-center gap-16 lg:p-16">
      <div class="flex-1 text-center lg:text-left">
        <h2 class="mb-2">WISATA EDUKASI</h2>
        <h3 class="mb-6">D'Embung Park Pandanmulyo</h3>
        <div class="lg:hidden w-full my-12">
          <div class="w-full aspect-video bg-slate-200"></div>
          <!-- add video player -->
          <p class="mt-8">Berwisata sambil belajar? Hanya disini!</p>
        </div>
        <p class="text-justify">
          D'Embung Park memiliki tujuan yang lebih besar dari hanya sekedar
          tempat wisata. Dengan memanfaatkan sumber daya yang ada kami
          menyajikan pengalaman bagi pengunjung untuk bisa bertani dan beternak
          secara langsung. Memahami tahapan, kegunaan, dan hasil yang
          didapatkan.
        </p>
      </div>
      <SliderWrapper v-once class="hidden lg:block flex-1">
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