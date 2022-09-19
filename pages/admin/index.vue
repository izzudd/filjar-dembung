<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="grid grid-cols-10 gap-4">
    <div class="col-span-7 flex flex-col gap-4">
      <AdminAnalytics />
      <AdminArticles />
    </div>
    <div class="col-span-3 flex flex-col gap-4">
      <AdminOperational />
      <AdminTestimonials />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
});
</script>