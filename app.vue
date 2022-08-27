<template>
  <div class="min-h-screen bg-accent-white">
    <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
      />
      <Link
        href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <NavBar />
    <NuxtPage />
    <PageFooter />
  </div>
</template>

<style lang="postcss">
html {
  @apply font-body text-accent-black/80 tracking-widest;
}

h1,
h2 {
  @apply font-heading;
}

h1 {
  @apply text-4xl lg:text-6xl text-accent-black;
}

h2 {
  @apply text-3xl lg:text-5xl text-primary;
}

h3 {
  @apply lg:text-xl font-semibold;
}
</style>
