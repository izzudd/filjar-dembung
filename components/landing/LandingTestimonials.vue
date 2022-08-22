<template>
  <SectionWrapper>
    <div class="min-h-screen px-12 flex flex-col items-center justify-center">
      <h2 class="text-center mb-16">TESTIMONI</h2>
      <div class="bg-secondary py-24 relative quotebox">
        <p class="w-4/5 mx-auto text-justify mt-12">
          ''Sebuah terobosan dan inovasi yang hebat ditunjukkan Desa Pandanmulyo
          dengan telah membangun Wisata Edukasi D'Embung Park ini.."
        </p>
        <h3 class="text-center mt-16">Abah Sanusi, Bupati Malang</h3>
        <!-- TODO: Add next and prev button -->
      </div>
    </div>
  </SectionWrapper>
</template>

<style lang="postcss" scoped>
.quotebox::before {
  @apply font-heading text-9xl text-primary absolute left-6 -top-6;
  content: '“';
}
</style>