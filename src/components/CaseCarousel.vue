<template>
  <section class="space-y-6">
    <header class="flex flex-col gap-2 text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.4em] text-primary">Clinical Cases</p>
      <h2 class="text-2xl font-semibold text-slate-900">Selected surgical outcomes & rehabilitation journeys</h2>
      <p class="text-sm text-slate-500">
        Explore a snapshot of complex cases treated by Op. Dr. Çabukoğlu. Add or update images in
        <code class="rounded bg-slate-100 px-1 py-0.5 text-[0.75rem]">src/assets/images/cases</code> and extend the
        gallery data for more stories.
      </p>
    </header>

    <div class="relative overflow-hidden rounded-3xl bg-white shadow-subtle" @mouseenter="stopAuto" @mouseleave="startAuto">
      <transition name="carousel" mode="out-in">
        <figure v-if="currentImage" :key="currentImage.id" class="relative">
          <div class="aspect-[16/9] overflow-hidden bg-slate-200">
            <img
              :src="currentImage.src"
              :alt="currentImage.alt"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent p-6 text-left text-white">
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-primary-light">{{ currentImage.category }}</p>
            <h3 class="mt-2 text-xl font-semibold">{{ currentImage.title }}</h3>
            <p class="mt-2 text-sm text-slate-200">{{ currentImage.description }}</p>
          </figcaption>
        </figure>
      </transition>

      <button
        v-if="hasMultiple"
        class="group absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-primary shadow-subtle transition hover:bg-primary hover:text-white"
        type="button"
        aria-label="Show previous case"
        @click="showPrevious"
      >
        <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="m14 6-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <button
        v-if="hasMultiple"
        class="group absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-primary shadow-subtle transition hover:bg-primary hover:text-white"
        type="button"
        aria-label="Show next case"
        @click="showNext"
      >
        <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="m10 6 6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>

    <div v-if="images.length" class="flex flex-wrap justify-center gap-3">
      <button
        v-for="(image, index) in images"
        :key="image.id"
        type="button"
        class="group flex items-center gap-3 rounded-2xl border border-primary/20 bg-white/80 p-3 text-left shadow-sm transition hover:border-primary hover:shadow-md"
        :class="{ 'border-primary bg-primary/10 shadow-md': index === activeIndex }"
        @click="goTo(index)"
      >
        <div class="h-14 w-20 overflow-hidden rounded-xl bg-slate-200">
          <img :src="image.src" :alt="image.alt" class="h-full w-full object-cover" loading="lazy" />
        </div>
        <div class="max-w-[14rem]">
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">{{ image.category }}</p>
          <p class="text-sm font-semibold text-slate-700">{{ image.title }}</p>
        </div>
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
  autoPlay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 7000,
  },
});

const activeIndex = ref(0);
let timerId;

const hasMultiple = computed(() => props.images.length > 1);

const currentImage = computed(() => props.images[activeIndex.value] ?? null);

const goTo = (index) => {
  if (!props.images.length) return;
  activeIndex.value = index;
};

const showNext = () => {
  if (!props.images.length) return;
  activeIndex.value = (activeIndex.value + 1) % props.images.length;
};

const showPrevious = () => {
  if (!props.images.length) return;
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length;
};

const startAuto = () => {
  if (!props.autoPlay || !hasMultiple.value) return;
  stopAuto();
  timerId = window.setInterval(showNext, props.interval);
};

const stopAuto = () => {
  if (timerId) {
    window.clearInterval(timerId);
    timerId = undefined;
  }
};

const handleKeydown = (event) => {
  if (!hasMultiple.value) return;
  if (event.key === 'ArrowRight') {
    showNext();
  } else if (event.key === 'ArrowLeft') {
    showPrevious();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
  startAuto();
});

onBeforeUnmount(() => {
  stopAuto();
  window.removeEventListener('keydown', handleKeydown);
});

watch(
  () => props.images,
  (images) => {
    if (!images.length) {
      stopAuto();
      activeIndex.value = 0;
      return;
    }
    activeIndex.value = 0;
    startAuto();
  },
  { deep: true }
);

watch(activeIndex, () => {
  startAuto();
});
</script>

<style scoped>
.carousel-enter-active,
.carousel-leave-active {
  transition: opacity 0.5s ease, transform 0.6s ease;
}

.carousel-enter-from {
  opacity: 0;
  transform: translateX(40px) scale(0.98);
}

.carousel-leave-to {
  opacity: 0;
  transform: translateX(-40px) scale(0.98);
}
</style>

