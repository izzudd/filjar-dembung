<template>
  <SectionWrapper>
    <h2 class="text-center mb-6">FASILITAS</h2>
    <p class="text-center max-w-4xl mx-auto mb-12 lg:mb-24 font-bold">
      Kami menyediakan fasilitas dan atraksi utama dalam konsep yang berbeda,
      memberikan pengalaman terbaik bagi setiap pengunjung.
    </p>

    <div class="naked-card">
      <div>
        <h3>Kolam Renang</h3>
        <p>
          Kolam renang dengan ukuran yang luas dan ramah bagi setiap anggota
          keluarga, dilengkapi pemandangan hijau tumbuhan yang mengelilingi.
        </p>
      </div>
      <img src="/img/landscape/5.jpg" alt="lorem" />
    </div>

    <div class="naked-card lg:!text-right lg:!flex-row">
      <div>
        <h3 class="lg:!text-right">Budidaya Ikan</h3>
        <p>
          Budidaya ikan mujair dan nila yang tersedia di halaman belakang
          dilengkapi saung istirahat menjadikan tempat yang tepat untuk
          memanjakan mata.
        </p>
      </div>
      <img src="/img/landscape/3.jpg" alt="lorem" />
    </div>

    <div class="naked-card">
      <div>
        <h3>Cocok Tanam</h3>
        <p>
          Dikelilingi oleh tanaman hijau yang luas, D'Embung Park menyediakan
          pengalaman bercocok tanam dimulai dari bunga hingga tanaman sayur
          mayur.
        </p>
      </div>
      <img src="/img/landscape/alt/4.jpg" alt="lorem" />
    </div>
  </SectionWrapper>
</template>

<style lang="postcss" scoped>
.naked-card {
  @apply flex flex-col-reverse lg:flex-row-reverse gap-8 items-center mt-12 text-justify lg:text-left bg-secondary lg:bg-transparent p-8 lg:p-0;

  h3 {
    @apply text-center lg:text-left mb-6 text-3xl text-primary;
  }

  p {
    @apply mb-8;
  }

  > div {
    @apply lg:w-1/2;
  }

  > img {
    @apply lg:w-1/3 object-cover;
  }
}
</style>