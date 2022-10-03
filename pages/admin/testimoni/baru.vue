<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <AdminWidgetWrapper>
    <h2>Tambah Testimoni</h2>
    <div class="input">
      <h3>Nama</h3>
      <input v-model="name" type="text" />
    </div>
    <div class="input">
      <h3>Testimoni</h3>
      <textarea v-model="testimonial" rows="8"></textarea>
    </div>
    <ButtonAction
      class="primary ml-auto w-fit block mt-4 !px-8"
      @click="submitTestimonial()"
      >Selesai</ButtonAction
    >
  </AdminWidgetWrapper>
</template>

<script lang="ts" setup>
import { APIResponse } from '~~/types/content';

definePageMeta({
  layout: 'admin',
});

const name = ref('');
const testimonial = ref('');

async function submitTestimonial() {
  const { data, error } = await useFetch<APIResponse<string>>(`/testimoni`, {
    baseURL: useRuntimeConfig().public.apiEndpoint,
    method: 'POST',
    body: {
      identitas: name.value,
      testimoni: testimonial.value,
    },
  });

  // TODO: Handle error
  window.console.log(data.value, error.value);
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