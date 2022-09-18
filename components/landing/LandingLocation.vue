<template>
  <SectionWrapper class="bg-secondary">
    <div
      class="lg:flex gap-8 items-center text-center lg:text-left py-12 lg:px-12"
    >
      <div class="lg:w-2/5">
        <div class="mb-8">
          <h2 class="mb-6">KUNJUNGI SEKARANG!</h2>
          <div class="hidden lg:block mb-8">
            <h3>Alamat</h3>
            <p class="text-justify">
              Jl. Raya Dusun Jambu Pandanmulyo, Jambu, Pandanmulyo, Kec.
              Tajinan, Kabupaten Malang, Jawa Timur 65172
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.313404869151!2d112.6956098!3d-8.069481600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62762e7ca94ed%3A0x18355398663fc53!2sD&#39;Embung%20Park%20Pandanmulyo!5e0!3m2!1sen!2sid!4v1661345640442!5m2!1sen!2sid"
            class="w-full aspect-square lg:hidden"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <h3 class="mb-4 font-bold">
          Buka {{ operational.day }} Pukul {{ operational.hour }} WIB
        </h3>
        <div
          class="text-center font-semibold bg-accent border-1 border-[#9BB0A5] py-6 px-2 mb-12"
        >
          <p class="text-3xl font-semibold mb-2">{{ operational.price }}</p>
          <p>Tiket masuk + Parkir</p>
        </div>
        <ButtonAction
          as-link
          to="https://www.google.com/maps/dir//Embung+Pandanmulyo/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd62762e7ca94ed:0x18355398663fc53!2m2!1d112.6956098!2d-8.0694816"
          target="blank"
          class="secondary"
          >Lihat Lokasi</ButtonAction
        >
      </div>
      <div class="hidden lg:block w-3/5 aspect-video bg-slate-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.313404869151!2d112.6956098!3d-8.069481600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62762e7ca94ed%3A0x18355398663fc53!2sD&#39;Embung%20Park%20Pandanmulyo!5e0!3m2!1sen!2sid!4v1661345640442!5m2!1sen!2sid"
          class="w-full h-full"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </SectionWrapper>
</template>

<script lang="ts" setup>
import { APIResponse, Operational } from '~~/types/content';

const { data } = await useFetch<APIResponse<Operational>>(`/operasional`, {
  baseURL: useRuntimeConfig().public.apiEndpoint,
});

const operational = data.value.data;
</script>