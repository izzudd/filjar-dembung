<template>
  <SectionWrapper>
    <h2 class="text-center mb-6">FASILITAS</h2>
    <p class="text-center max-w-4xl mx-auto mb-24 font-bold">
      Kami menyediakan fasilitas dan atraksi utama dalam konsep yang berbeda,
      memberikan pengalaman terbaik bagi setiap pengunjung.
    </p>

    <div class="naked-card flex-row-reverse">
      <div class="w-1/2">
        <h3>Kolam Renang</h3>
        <p>
          Kolam renang dengan ukuran yang luas dan ramah bagi setiap anggota
          keluarga, dilengkapi pemandangan hijau tumbuhan yang mengelilingi.
        </p>
      </div>
      <img
        src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
        class="w-1/3 object-cover"
        alt="lorem"
      />
    </div>

    <div class="naked-card text-right">
      <div class="w-1/2">
        <h3>Budidaya Ikan</h3>
        <p>
          Budidaya ikan mujair dan nila yang tersedia di halaman belakang
          dilengkapi saung istirahat menjadikan tempat yang tepat untuk
          memanjakan mata.
        </p>
        <div class="text-right mt-8">
          <ButtonAction as-link class="secondary" to="/artikel/mock-post"
            >Lihat Artikel</ButtonAction
          >
        </div>
      </div>
      <img
        src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
        class="w-1/3 object-cover"
        alt="lorem"
      />
    </div>

    <div class="naked-card flex-row-reverse">
      <div class="w-1/2">
        <h3>Cocok Tanam</h3>
        <p>
          Dikelilingi oleh tanaman hijau yang luas, D'Embung Park menyediakan
          pengalaman bercocok tanam dimulai dari bunga hingga tanaman sayur
          mayur.
        </p>
        <ButtonAction as-link class="secondary" to="/artikel/mock-post"
          >Lihat Artikel</ButtonAction
        >
      </div>
      <img
        src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
        class="w-1/3 object-cover"
        alt="lorem"
      />
    </div>
  </SectionWrapper>
</template>

<style lang="postcss" scoped>
h3 {
  @apply mb-6 text-3xl text-primary;
}

.naked-card p {
  @apply mb-8;
}

.naked-card {
  @apply flex gap-8 items-center mt-12;
}
</style>