<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="min-h-screen bg-accent-white">
    <NavBar />
    <slot />
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
  