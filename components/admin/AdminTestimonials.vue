<template>
  <AdminWidgetWrapper>
    <h2 class="text-center mb-4">Testimoni Terbaru</h2>
    <div class="">
      <SliderWrapper
        :display-indicator="false"
        class="w-full bg-accent-white py-4 px-2"
      >
        <SliderItem
          v-for="testimonial in testimonials"
          :key="testimonial.identitas"
          class="flex flex-col justify-center"
        >
          <div class="text-center">
            <p>"{{ testimonial.testimoni }}"</p>
            <h3 class="mt-4">{{ testimonial.identitas }}</h3>
          </div>
        </SliderItem>
      </SliderWrapper>
    </div>
    <ButtonAction
      as-link
      to="/admin/testimoni/baru"
      class="primary w-fit block mx-auto mt-4"
      >Tambah Testimoni</ButtonAction
    >
  </AdminWidgetWrapper>
</template>

<script lang="ts" setup>
import { Testimonial } from '~~/types/content';

const { data } = await useFetch<{ data: Testimonial[] }>(`/testimoni`, {
  baseURL: useRuntimeConfig().public.apiEndpoint,
  initialCache: false,
});

const testimonials = data.value.data;
</script>