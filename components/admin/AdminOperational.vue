<template>
  <AdminWidgetWrapper class="flex flex-col items-center">
    <h2 class="mb-4">Informasi</h2>
    <div class="wrapper">
      <h3>Jam Operasional</h3>
      <input v-model="opsHour" type="text" />
    </div>
    <div class="wrapper">
      <h3>Hari Operasional</h3>
      <input v-model="opsDay" type="text" />
    </div>
    <div class="wrapper">
      <h3>Harga Tiket</h3>
      <input v-model="opsPrice" type="text" />
    </div>
    <ButtonAction class="primary mt-6 !px-10" @click="submit()"
      >Simpan</ButtonAction
    >
  </AdminWidgetWrapper>
</template>

<script lang="ts" setup>
import { APIResponse, Operational } from '~~/types/content';

const { data, refresh } = await useFetch<APIResponse<Operational>>(
  `/operasional`,
  {
    baseURL: useRuntimeConfig().public.apiEndpoint,
  }
);

const opsHour = ref(data.value.data.hour);
const opsDay = ref(data.value.data.day);
const opsPrice = ref(data.value.data.price);

async function submit() {
  const confirmed = window.confirm(
    'Anda yakin ingin mengubah data operasional?'
  );
  if (!confirmed) return;

  const { error } = await useFetch<APIResponse<Operational>>(`/operasional`, {
    baseURL: useRuntimeConfig().public.apiEndpoint,
    method: 'PATCH',
    body: {
      day: opsDay.value,
      hour: opsHour.value,
      price: opsPrice.value,
    },
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('admin_token')}`,
    },
  });
  if (error.value || !data.value?.success) {
    window.alert('Terjadi kesalahan, silahkan coba lagi');
    return;
  }
  window.alert('Data operasional berhasil diubah');
  refresh();
}
</script>

<style lang="postcss">
.wrapper {
  @apply py-2;

  input {
    @apply text-center py-1 px-2 bg-accent-white mt-1;
  }
}
</style>