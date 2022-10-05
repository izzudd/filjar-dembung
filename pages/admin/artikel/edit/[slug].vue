<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <AdminWidgetWrapper>
    <h2>Tambah Artikel</h2>
    <div class="input">
      <h3>Judul Artikel</h3>
      <input v-model="title" type="text" />
    </div>
    <div class="input">
      <h3>Foto</h3>
      <input
        type="file"
        accept="image/png, image/jpeg"
        @change="selectFile($event)"
      />
    </div>
    <div class="input">
      <h3>Isi Artikel</h3>
      <textarea v-model="body" rows="8"></textarea>
    </div>
    <ButtonAction
      class="primary ml-auto w-fit block mt-4 !px-8"
      @click="submit()"
      >Selesai</ButtonAction
    >
  </AdminWidgetWrapper>
</template>

<script lang="ts" setup>
import { APIResponse, PostData } from '~~/types/content';

definePageMeta({
  layout: 'admin',
});

const slug = useRoute().params.slug;

const { data, refresh } = await useFetch<APIResponse<PostData>>(
  `/article/${slug}`,
  {
    baseURL: useRuntimeConfig().public.apiEndpoint,
  }
);

const title = ref('');
const cover = ref(null);
const body = ref('');

onMounted(async () => {
  await refresh();
  title.value = data.value.data.title;
  body.value = data.value.data.body;
});

onUnmounted(async () => {
  title.value = '';
  body.value = '';
});

function selectFile(event) {
  cover.value = event.target.files[0] || null;
}

async function submit() {
  const confirmed = window.confirm('Anda yakin akan mengunggah artikel ini?');
  if (!confirmed) return;

  const formData = new FormData();
  formData.append('image', cover.value);
  formData.append('title', title.value);
  formData.append('body', body.value);

  const { data, error } = await useFetch<APIResponse<string>>(
    `/article/${slug}`,
    {
      baseURL: useRuntimeConfig().public.apiEndpoint,
      method: 'PATCH',
      body: formData,
    }
  );

  if (error.value || data.value?.error) {
    window.alert('Terjadi kesalahan, silahkan coba lagi');
    return;
  }

  window.alert('Artikel berhasil diunggah');
  navigateTo('/admin/artikel');
}
</script>

<style lang="postcss" scoped>
.input {
  @apply mt-6;

  input,
  textarea {
    @apply bg-accent-white p-2 w-full;
  }

  h3 {
    @apply mb-2;
  }
}
</style>