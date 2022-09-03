<template>
  <SectionWrapper>
    <div
      class="my-32 lg:my-0 lg:min-h-screen lg:px-12 flex flex-col items-center justify-center"
    >
      <h2 class="text-center mb-16">TESTIMONI</h2>
      <SliderWrapper
        :button-outside="false"
        :display-indicator="false"
        class="quotebox w-full"
      >
        <SliderItem>
          <div class="slider-item">
            <p>
              "Sebuah terobosan dan inovasi yang hebat ditunjukkan Desa
              Pandanmulyo dengan telah membangun Wisata Edukasi D'Embung Park
              ini.."
            </p>
            <h3>Abah Sanusi, Bupati Malang</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div class="slider-item">
            <p>
              "Sebuah terobosan dan inovasi yang hebat ditunjukkan Desa
              Pandanmulyo dengan telah membangun Wisata Edukasi D'Embung Park
              ini.."
            </p>
            <h3>Abah Sanusi, Bupati Malang</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div class="slider-item">
            <p>
              "Sebuah terobosan dan inovasi yang hebat ditunjukkan Desa
              Pandanmulyo dengan telah membangun Wisata Edukasi D'Embung Park
              ini.."
            </p>
            <h3>Abah Sanusi, Bupati Malang</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div class="slider-item">
            <p>
              "Sebuah terobosan dan inovasi yang hebat ditunjukkan Desa
              Pandanmulyo dengan telah membangun Wisata Edukasi D'Embung Park
              ini.."
            </p>
            <h3>Abah Sanusi, Bupati Malang</h3>
          </div>
        </SliderItem>
      </SliderWrapper>
    </div>
  </SectionWrapper>
</template>

<style lang="postcss" scoped>
.quotebox::after {
  @apply font-heading text-9xl text-primary absolute left-6 -top-6;
  content: '“';
}

.slider-item {
  @apply bg-secondary py-8 lg:py-24 relative px-12 lg:px-0;

  p {
    @apply lg:w-4/5 mx-auto lg:text-justify mt-12;
  }

  h3 {
    @apply text-center mt-8 lg:mt-16;
  }
}
</style>