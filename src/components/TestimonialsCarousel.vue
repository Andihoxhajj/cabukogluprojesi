<template>
  <section class="relative overflow-hidden rounded-3xl bg-white p-8 shadow-subtle">
    <div class="flex items-center justify-between">
      <div class="max-w-2xl">
        <p class="text-sm font-semibold uppercase tracking-[0.4em] text-primary">Testimonials</p>
        <h2 class="mt-3 text-2xl font-semibold text-slate-900">Words from patients & partners</h2>
      </div>
      <div class="hidden gap-3 md:flex">
        <button
          class="rounded-full border border-primary/30 p-2 text-primary transition hover:border-primary hover:bg-primary hover:text-white"
          type="button"
          aria-label="Show previous testimonial"
          @click="goPrev"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="m15 6-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button
          class="rounded-full border border-primary/30 p-2 text-primary transition hover:border-primary hover:bg-primary hover:text-white"
          type="button"
          aria-label="Show next testimonial"
          @click="goNext"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="m9 6 6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>

    <transition-group v-if="activeTestimonial" name="slide" tag="div" class="mt-10">
      <article
        v-for="item in [activeTestimonial]"
        :key="item?.id"
        class="flex flex-col gap-6 rounded-2xl bg-gradient-to-br from-primary/10 via-white to-primary/5 p-6 text-slate-700"
      >
        <p class="text-lg font-medium leading-relaxed text-slate-600">
          “{{ item.message }}”
        </p>
        <div>
          <p class="text-base font-semibold text-slate-900">{{ item.name }}</p>
          <p class="text-sm text-slate-500">{{ item.role }}</p>
        </div>
      </article>
    </transition-group>

    <div v-if="items.length" class="mt-6 flex justify-center gap-2">
      <button
        v-for="(item, index) in items"
        :key="item.id"
        type="button"
        :class="[
          'h-2.5 w-7 rounded-full transition-all duration-300',
          index === currentIndex ? 'bg-primary' : 'bg-primary/30',
        ]"
        @click="goTo(index)"
        :aria-label="`Show testimonial from ${item.name}`"
      />
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  interval: {
    type: Number,
    default: 6000,
  },
});

const currentIndex = ref(0);
let timerId;

const activeTestimonial = computed(() => props.items[currentIndex.value] ?? null);

const goTo = (index) => {
  currentIndex.value = index;
};

const goNext = () => {
  if (!props.items.length) return;
  currentIndex.value = (currentIndex.value + 1) % props.items.length;
};

const goPrev = () => {
  if (!props.items.length) return;
  currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length;
};

const startTimer = () => {
  stopTimer();
  if (!props.items.length) return;
  timerId = window.setInterval(goNext, props.interval);
};

const stopTimer = () => {
  if (timerId) {
    window.clearInterval(timerId);
    timerId = undefined;
  }
};

onMounted(() => {
  startTimer();
});

onBeforeUnmount(() => {
  stopTimer();
});

watch(
  () => props.items,
  (items) => {
    if (!items.length) return;
    currentIndex.value = 0;
    startTimer();
  },
  { deep: true }
);

watch(currentIndex, () => {
  startTimer();
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

