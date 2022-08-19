<template>
  <div class="min-h-screen">
    <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
      />
      <Link
        href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Open+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap"
        rel="stylesheet"
      />
    </Head>
    <NavBar />
    <LandingHero />
    <div class="flex flex-col gap-4">
      <h1>Hello World</h1>
      <h2>Lorem ipsum</h2>
      <h3>This is H3</h3>
      <p>This is paragraph</p>
    </div>
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
  @apply text-6xl text-accent-black;
}

h2 {
  @apply text-5xl text-primary;
}

h3 {
  @apply text-xl font-semibold;
}
</style>
