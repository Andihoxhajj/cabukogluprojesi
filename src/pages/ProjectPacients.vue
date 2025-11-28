<template>
  <div class="section-container space-y-12">
    <header class="space-y-3 text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.4em] text-primary">Project</p>
      <h1 class="text-3xl font-semibold text-slate-900">Project Pacients</h1>
      <p class="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500">
        Patient-focused outcomes and stories from ongoing orthopedic projects.
      </p>
    </header>

    <!-- Cases List -->
    <div class="space-y-10">
      <article
        v-for="(caseItem, index) in patientCases"
        :key="caseItem.id"
        class="rounded-3xl bg-white p-6 shadow-subtle"
        :class="{ 'lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center': hasMedia(caseItem) }"
      >
        <!-- Content Section -->
        <div
          class="space-y-6"
          :class="{ 'lg:order-2': index % 2 === 0 && hasMedia(caseItem) }"
        >
          <div class="space-y-3">
            <h2 class="text-2xl font-semibold text-slate-900">{{ caseItem.title }}</h2>
            <div class="space-y-4">
              <p
                v-for="(paragraph, pIndex) in caseItem.description"
                :key="pIndex"
                class="text-base leading-relaxed text-slate-600"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>

        <!-- Media Section -->
        <div
          v-if="caseItem.mediaItems && caseItem.mediaItems.length"
          class="mt-6 lg:mt-0"
          :class="{ 'lg:order-1': index % 2 === 0 }"
        >
          <template
            v-for="currentIndex in [getMediaIndex(caseItem.id, caseItem.mediaItems.length)]"
            :key="`media-${caseItem.id}`"
          >
            <div class="overflow-hidden rounded-2xl border border-primary/20 bg-slate-100">
              <div class="relative h-[500px] md:h-[600px] lg:h-[700px]">
                <transition name="carousel-fade" mode="out-in">
                  <div
                    :key="caseItem.mediaItems[currentIndex]?.src"
                    class="absolute inset-0"
                  >
                    <video
                      v-if="caseItem.mediaItems[currentIndex]?.type === 'video'"
                      :src="caseItem.mediaItems[currentIndex]?.src"
                      controls
                      class="h-full w-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                    <img
                      v-else
                      :src="caseItem.mediaItems[currentIndex]?.src"
                      class="h-full w-full object-cover"
                      :alt="`${caseItem.title} media ${currentIndex + 1}`"
                      loading="lazy"
                    />
                  </div>
                </transition>

                <button
                  v-if="caseItem.mediaItems.length > 1"
                  @click="handleMediaNav(caseItem.id, caseItem.mediaItems.length, -1)"
                  class="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition hover:bg-white"
                  aria-label="Previous media"
                >
                  <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <button
                  v-if="caseItem.mediaItems.length > 1"
                  @click="handleMediaNav(caseItem.id, caseItem.mediaItems.length, 1)"
                  class="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition hover:bg-white"
                  aria-label="Next media"
                >
                  <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <div v-if="caseItem.mediaItems.length > 1" class="flex justify-center gap-2 px-4 pb-4 pt-3">
                <button
                  v-for="(media, mediaIdx) in caseItem.mediaItems"
                  :key="media.src"
                  class="h-2 rounded-full transition-all"
                  :class="mediaIdx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-slate-300'"
                  @click="selectMediaIndex(caseItem.id, mediaIdx)"
                  :aria-label="`Go to media ${mediaIdx + 1}`"
                />
              </div>
            </div>
          </template>
        </div>

        <div
          v-else-if="caseItem.video || (caseItem.images?.length > 0)"
          class="mt-6 lg:mt-0"
          :class="{ 'lg:order-1': index % 2 === 0 }"
        >
          <div v-if="caseItem.video" class="overflow-hidden rounded-2xl border border-primary/20 bg-slate-100">
            <video
              :src="caseItem.video"
              controls
              class="h-[500px] md:h-[600px] lg:h-[700px] w-full object-cover"
              :poster="caseItem.images?.[0]"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div v-else class="overflow-hidden rounded-2xl border border-primary/20">
            <ImageCarousel
              :images="caseItem.images"
              :autoPlay="true"
              :autoPlayInterval="3000"
              :enableClickNavigation="true"
              heightClass="h-[500px] md:h-[600px] lg:h-[700px]"
            />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import ImageCarousel from '@/components/ImageCarousel.vue';
import rawPatientCases from '@/data/patientCases.js';

const buildMediaItems = (caseItem) => {
  const items = [];
  if (Array.isArray(caseItem.media) && caseItem.media.length) {
    caseItem.media.forEach((src) => {
      items.push({
        type: /\.(mp4|mov)$/i.test(src) ? 'video' : 'image',
        src,
      });
    });
    return items;
  }

  if (caseItem.video) {
    items.push({ type: 'video', src: caseItem.video });
  }

  if (Array.isArray(caseItem.images)) {
    caseItem.images.forEach((src) => items.push({ type: 'image', src }));
  }

  return items;
};

const patientCases = rawPatientCases.map((caseItem) => ({
  ...caseItem,
  mediaItems: buildMediaItems(caseItem),
}));

const hasMedia = (caseItem) =>
  (Array.isArray(caseItem.mediaItems) && caseItem.mediaItems.length > 0) ||
  !!caseItem.video ||
  (Array.isArray(caseItem.images) && caseItem.images.length > 0);

const mediaIndices = reactive({});

const getMediaIndex = (caseId, length) => {
  if (!length) return 0;
  if (typeof mediaIndices[caseId] === 'number' && mediaIndices[caseId] < length) {
    return mediaIndices[caseId];
  }
  mediaIndices[caseId] = 0;
  return 0;
};

const handleMediaNav = (caseId, length, direction) => {
  if (!length) return;
  const currentIndex = getMediaIndex(caseId, length);
  mediaIndices[caseId] = (currentIndex + direction + length) % length;
};

const selectMediaIndex = (caseId, index) => {
  mediaIndices[caseId] = index;
};
</script>

<style scoped>
</style>


