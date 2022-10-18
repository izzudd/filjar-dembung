<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="w-screen h-screen flex items-center justify-center bg-secondary">
    <div class="bg-accent p-8 flex flex-col gap-2">
      <h2
        class="text-2xl font-bold font-body text-accent-black mb-4 text-center"
      >
        Login
      </h2>
      <label>Username</label>
      <input v-model="username" class="px-4 py-2" type="text" />
      <label>Password</label>
      <input v-model="password" class="px-4 py-2" type="password" />
      <ButtonAction class="primary mt-8" @click="login">Login</ButtonAction>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { APIResponse, AuthToken } from '~~/types/content';

definePageMeta({
  layout: false,
});

const username = ref('');
const password = ref('');

async function getToken() {
  const { data, error } = await useFetch<APIResponse<AuthToken>>('/login', {
    baseURL: useRuntimeConfig().public.apiEndpoint,
    method: 'POST',
    body: {
      nickname: username.value,
      password: password.value,
    },
    initialCache: false,
  });

  if (error.value || !data.value.success) return false;
  return data.value.data.token;
}

async function login() {
  if (!username.value && !password.value) {
    alert('Username dan Password tidak boleh kosong');
    return;
  }

  const token = await getToken();
  if (!token) {
    alert('Username atau Password salah');
    return;
  }

  window.localStorage.setItem('admin_token', token);
  navigateTo('/admin');
}
</script>

