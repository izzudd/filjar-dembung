<template>
  <div>
    <NuxtLink to="https://www.instagram.com/embungpark_official"
      ><img :src="`/icons/instagram${suffix}.svg`" alt="instagram"
    /></NuxtLink>
    <!-- <NuxtLink to="#"
      ><img :src="`/icons/youtube${suffix}.svg`" alt="youtube"
    /></NuxtLink>
    <NuxtLink to="#"
      ><img :src="`/icons/facebook${suffix}.svg`" alt="facebook"
    /></NuxtLink> -->
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ green?: boolean }>();

const suffix = props.green ? '-green' : '';
</script>

<style scoped lang="postcss">
img {
  @apply h-full;
}
</style>