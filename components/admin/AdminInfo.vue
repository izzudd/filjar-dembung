<template>
  <AdminWidgetWrapper>
    <h2 class="mb-4">Informasi Lainnya</h2>
    <h3>Deskripsi</h3>
    <div class="bg-white">
      <ClientOnly>
        <QuillEditor
          ref="editor"
          v-model:content="body"
          content-type="html"
          :toolbar="[
            ['bold', 'italic', 'underline'],
            ['blockquote', 'link'],
            [{ list: 'ordered' }, { list: 'bullet' }],
          ]"
        />
      </ClientOnly>
    </div>
    <h3 class="mt-2">Foto</h3>
    <div class="flex justify-between">
      <div>
        <input
          ref="filePicker"
          type="file"
          accept="image/png, image/jpeg"
          multiple
          @change="selectFile()"
        />
        <ButtonAction class="primary" @click="addImages()"
          >Tambah Foto</ButtonAction
        >
      </div>
      <ButtonAction class="primary" @click="submit()">Simpan</ButtonAction>
    </div>
    <div
      v-for="(img, idx) in imgs"
      :key="img"
      class="flex flex-col items-center mt-4"
    >
      <img :src="img" />
      <button
        class="bg-red-500 mt-2 py-2 px-3 text-white"
        @click="removeImage(idx)"
      >
        Hapus
      </button>
    </div>
  </AdminWidgetWrapper>
</template>

<script lang="ts" setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { Info } from '~~/types/content';

const body = ref('');
const editor = ref(null);
const filePicker = ref(null);
const imgs = ref([]);
let uploadImgs = [];

const { data, refresh } = await useFetch<Info>(`/info`, {
  baseURL: useRuntimeConfig().public.apiEndpoint,
  initialCache: false,
  server: false,
});

onMounted(async () => {
  await refresh();
  body.value = data.value.description;
  imgs.value = data.value.linkImage;
  editor.value.setContents(body.value, 'api');
});

function selectFile() {
  uploadImgs = filePicker.value.files || null;
}

function removeImage(idx) {
  imgs.value.splice(idx, 1);
}

async function addImages() {
  const confirmed = window.confirm('Anda yakin akan mengunggah foto?');
  if (!confirmed) return;

  try {
    for (const img of uploadImgs) {
      imgs.value.push(await useUploadImage(img));
    }
  } catch (error) {
    window.alert('Foto gagal diunggah, silahkan coba lagi');
    return;
  }

  window.alert('Foto berhasil diunggah');
  filePicker.value.files = null;
  uploadImgs = [];
}

async function submit() {
  const confirmed = window.confirm('Anda yakin akan memperbarui info?');
  if (!confirmed) return;

  const { data, error } = await useFetch<Info>(`/info`, {
    method: 'PATCH',
    body: {
      description: body.value,
      linkImage: imgs.value,
    },
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('admin_token')}`,
    },
    baseURL: useRuntimeConfig().public.apiEndpoint,
    initialCache: false,
    server: false,
  });

  if (error.value || !data.value.success) {
    window.alert('Info gagal diperbarui, silahkan coba lagi');
    return;
  }

  window.alert('Info berhasil diperbarui');
  refresh();
}
</script>