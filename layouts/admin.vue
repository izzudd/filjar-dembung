<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="grid grid-cols-6 min-h-screen bg-accent-white">
    <aside class="col-span-1 bg-secondary">
      <div class="flex flex-col gap-8 h-screen sticky top-0 left-0 px-6 py-12">
        <img src="/img/logo.svg" alt="D'EMBUNG PARK" />
        <nav class="flex gap-4 flex-col items-center">
          <NuxtLink to="/admin">Beranda</NuxtLink>
          <NuxtLink to="/admin/analitik">Google Analytics</NuxtLink>
          <NuxtLink to="/admin/artikel">Berita</NuxtLink>
          <NuxtLink to="/admin/testimoni">Testimoni</NuxtLink>
        </nav>
        <ButtonAction as-link class="primary text-center mt-auto" to="/"
          >Kembali ke Website</ButtonAction
        >
      </div>
    </aside>
    <main class="col-span-5 p-4">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { APIResponse } from '~~/types/content';

async function validateAdminToken(token) {
  const { data, error, refresh } = await useFetch<APIResponse<{}>>(
    '/authToken',
    {
      baseURL: useRuntimeConfig().public.apiEndpoint,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      initialCache: false,
    }
  );
  await refresh();

  return data.value?.success && !error.value;
}

onMounted(async () => {
  const tokenIsValid = await validateAdminToken(
    window.localStorage.getItem('admin_token')
  );

  if (!tokenIsValid) {
    navigateTo('/admin/login');
  }
});
</script>

<style lang="postcss">
h2 {
  @apply text-2xl font-bold font-body text-accent-black;
}

h3 {
  @apply text-lg font-bold;
}
</style>

<style lang="postcss" scoped>
a {
  @apply w-full py-3 font-semibold text-center hover:bg-accent/40;
  &.router-link-active {
    @apply bg-accent;
  }
}
</style>