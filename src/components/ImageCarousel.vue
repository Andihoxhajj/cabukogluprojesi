<template>
  <div class="relative w-full overflow-hidden rounded-[40px] border border-primary/20 bg-white shadow-subtle">
    <!-- Images container -->
    <div
      class="relative"
      :class="heightClass"
      :tabindex="enableKeyboardNavigation ? 0 : undefined"
      @mouseenter="pauseOnHover && pauseAutoPlay()"
      @mouseleave="pauseOnHover && resetAutoPlay()"
      @touchstart.passive="onTouchStart"
      @touchend.passive="onTouchEnd"
      @keydown.prevent="onKeydown"
    >
      <div
        class="relative h-full w-full"
        :class="{ 'cursor-pointer': enableClickNavigation }"
        @click="enableClickNavigation && handleNext()"
      >
        <transition name="carousel-fade" mode="out-in">
          <div :key="images[currentIndex]" class="absolute inset-0">
            <img
              :src="images[currentIndex]"
              :alt="`Project image ${currentIndex + 1}`"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </transition>
      </div>

      <!-- Navigation arrows -->
      <button
        v-if="images.length > 1"
        @click="handlePrevious"
        class="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all hover:bg-white hover:scale-110"
        aria-label="Previous image"
      >
        <svg viewBox="0 0 24 24" class="h-6 w-6 text-primary" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <button
        v-if="images.length > 1"
        @click="handleNext"
        class="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all hover:bg-white hover:scale-110"
        aria-label="Next image"
      >
        <svg viewBox="0 0 24 24" class="h-6 w-6 text-primary" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <!-- Dots indicator -->
      <div
        v-if="images.length > 1"
        class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2"
      >
        <button
          v-for="(image, index) in images"
          :key="image"
          @click="goToImage(index)"
          class="h-2 rounded-full transition-all"
          :class="index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'"
          :aria-label="`Go to image ${index + 1}`"
        />
      </div>
    </div>

    <!-- Counter -->
    <div
      v-if="images.length > 1"
      class="absolute right-6 top-6 rounded-full bg-black/50 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
    >
      {{ currentIndex + 1 }} / {{ images.length }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  autoPlay: {
    type: Boolean,
    default: true,
  },
  autoPlayInterval: {
    type: Number,
    default: 1000,
  },
  enableClickNavigation: {
    type: Boolean,
    default: false,
  },
  heightClass: {
    type: String,
    default: 'h-[500px] md:h-[600px] lg:h-[700px]',
  },
  pauseOnHover: {
    type: Boolean,
    default: true,
  },
  enableKeyboardNavigation: {
    type: Boolean,
    default: true,
  },
  swipeThreshold: {
    type: Number,
    default: 50,
  },
});

const currentIndex = ref(0);
let autoPlayTimer = null;
let touchStartX = 0;

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const previousImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const handleNext = () => {
  nextImage();
  resetAutoPlay();
};

const handlePrevious = () => {
  previousImage();
  resetAutoPlay();
};

const pauseAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

const onTouchStart = (event) => {
  const touch = event.changedTouches?.[0];
  if (touch) {
    touchStartX = touch.clientX;
  }
};

const onTouchEnd = (event) => {
  const touch = event.changedTouches?.[0];
  if (!touch) return;
  const deltaX = touch.clientX - touchStartX;
  if (Math.abs(deltaX) < props.swipeThreshold) return;
  if (deltaX < 0) {
    handleNext();
  } else {
    handlePrevious();
  }
};

const onKeydown = (event) => {
  if (!props.enableKeyboardNavigation) return;
  if (event.key === 'ArrowRight') {
    handleNext();
  } else if (event.key === 'ArrowLeft') {
    handlePrevious();
  }
};

const goToImage = (index) => {
  currentIndex.value = index;
  resetAutoPlay();
};

const resetAutoPlay = () => {
  if (props.autoPlay && props.images.length > 1) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(nextImage, props.autoPlayInterval);
  }
};

onMounted(() => {
  if (props.autoPlay && props.images.length > 1) {
    autoPlayTimer = setInterval(nextImage, props.autoPlayInterval);
  }
});

onUnmounted(() => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
  }
});
</script>

<style scoped>
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.carousel-fade-enter-from,
.carousel-fade-leave-to {
  opacity: 0;
}
</style>

