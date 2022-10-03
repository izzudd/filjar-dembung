<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <AdminWidgetWrapper>
    <h2 class="mb-16">Testimoni</h2>
    <SliderWrapper
      :button-outside="false"
      :display-indicator="false"
      class="quotebox w-full"
    >
      <SliderItem
        v-for="testimonial in testimonials"
        :key="testimonial.identitas"
      >
        <div class="slider-item">
          <p>"{{ testimonial.testimoni }}"</p>
          <h3>{{ testimonial.identitas }}</h3>
        </div>
      </SliderItem>
    </SliderWrapper>
    <ButtonAction
      as-link
      to="/admin/testimoni/baru"
      class="primary block mx-auto mt-8 w-fit"
      >Tambah Testimoni</ButtonAction
    >
  </AdminWidgetWrapper>
</template>

<script lang="ts" setup>
import { Testimonial } from '~~/types/content';

definePageMeta({
  layout: 'admin',
});

const { data } = await useFetch<{ data: Testimonial[] }>(`/testimoni`, {
  baseURL: useRuntimeConfig().public.apiEndpoint,
});

const testimonials = data.value.data;
</script>

<style lang="postcss" scoped>
.quotebox::after {
  @apply font-heading text-9xl text-primary absolute left-6 -top-6;
  content: '“';
}

.slider-item {
  @apply bg-accent-white py-8 lg:py-24 relative px-12 lg:px-0 h-full;

  p {
    @apply lg:w-4/5 mx-auto lg:text-justify mt-12;
  }

  h3 {
    @apply text-center mt-8 lg:mt-16;
  }
}
</style>