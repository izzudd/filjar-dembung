<!-- 
  2 style button, primary and secondary
  use class t0 choose button style
  - primary: primary background with white accent text
  - secondary: accent background with black accent text
-->

<template>
  <NuxtLink v-if="asLink" class="button">
    <slot />
  </NuxtLink>
  <button v-else class="button">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  asLink?: boolean;
}>();
</script>

<style lang="postcss" scoped>
.button {
  @apply px-4 py-2;
  &.primary {
    @apply bg-primary hover:bg-[#42756E] text-accent-white;
  }

  &.secondary {
    @apply bg-accent hover:bg-[#E9F0E7] text-accent-black px-12 font-semibold tracking-wider border hover:border-[#9BB0A5];
  }
}
</style>