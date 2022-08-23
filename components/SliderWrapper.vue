<template>
  <div class="relative">
    <button class="-right-5 rotate" @click="changeView()">
      <img class="w-3" src="/icons/next.svg" alt="lanjut" />
    </button>
    <button class="-left-5 rotate-180" @click="changeView(-1)">
      <img class="w-3" src="/icons/next.svg" alt="sebelumnya" />
    </button>
    <div
      ref="slider"
      class="w-full snap-x snap-mandatory overflow-x-hidden flex gap-4 scroll-smooth"
    >
      <slot />
    </div>
    <div class="absolute w-full bottom-0 left-0 flex gap-2 justify-center pb-2">
      <span
        v-for="idx in slideCount"
        :key="idx"
        class="w-2 h-2 rounded-full"
        :class="idx - 1 === slideState ? 'bg-accent-black' : 'bg-secondary'"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
const slider = ref(null);
const scrollDistance = 10;
const showDuration = 3000;
const slideCount = ref(0);
const slideState = ref(0);

const triggerScroll = (direction = 1) => {
  slideState.value += direction;

  if (slideState.value >= slideCount.value) {
    slider.value.scroll(0, 0);
    slideState.value = 0;
  } else if (slideState.value < 0) {
    const sliderWidth = slider.value.clientWidth * slideCount.value;
    window.console.log(sliderWidth);
    slider.value.scroll(sliderWidth, 0);
    slideState.value = slideCount.value - 1;
  } else slider.value.scrollBy(scrollDistance * direction, 0);
};

const changeView = (direction = 1) => {
  triggerScroll(direction);
  stopAutoSlide(showDuration);
};

let autoSlide;
let transitionSlide;

const startAutoSlide = () => {
  autoSlide = setInterval(triggerScroll, showDuration);
};

const stopAutoSlide = (timeout = 0) => {
  clearInterval(autoSlide);
  if (timeout) {
    clearTimeout(transitionSlide);
    transitionSlide = setTimeout(startAutoSlide, timeout);
  }
};

onMounted(() => {
  startAutoSlide();
  slideCount.value = slider.value.childElementCount;
});
onUnmounted(() => stopAutoSlide());
</script>

<style lang="postcss" scoped>
button {
  @apply absolute top-1/2;
  background-image: url('/icons/next.svg');
  background-size: cover;
}
</style>