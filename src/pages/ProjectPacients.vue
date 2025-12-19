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
      >
        <!-- Media grid (two cards for comparison) -->
        <div v-if="caseItem.mediaItems && caseItem.mediaItems.length" class="grid gap-4 md:grid-cols-2">
          <div
            v-for="(cardIndex) in [0, 1]"
            v-show="getMediaGroup(caseItem, cardIndex).length > 0"
            :key="`card-${caseItem.id}-${cardIndex}`"
            class="relative overflow-hidden rounded-2xl border border-primary/20 bg-slate-100"
          >
            <div class="relative h-[500px] md:h-[600px] lg:h-[700px]">
              <template v-if="getCurrentMedia(caseItem.id, cardIndex, getMediaGroup(caseItem, cardIndex))">
                <video
                  v-if="getCurrentMedia(caseItem.id, cardIndex, getMediaGroup(caseItem, cardIndex))?.type === 'video'"
                  :ref="(el) => setVideoRef(caseItem.id, cardIndex, el)"
                  :src="getVideoSource(getCurrentMedia(caseItem.id, cardIndex, getMediaGroup(caseItem, cardIndex))) || getCurrentMedia(caseItem.id, cardIndex, getMediaGroup(caseItem, cardIndex))?.src"
                  controls
                  muted
                  autoplay
                  class="h-full w-full object-cover"
                  preload="auto"
                  v-show="getVideoSource(getCurrentMedia(caseItem.id, cardIndex, getMediaGroup(caseItem, cardIndex))) || !getCurrentMedia(caseItem.id, cardIndex, getMediaGroup(caseItem, cardIndex))?.isLazy"
                  @loadeddata="(e) => { e.target.muted = true; e.target.volume = 0; e.target.play().catch(() => {}); }"
                  @loadedmetadata="(e) => { e.target.muted = true; e.target.volume = 0; }"
                  @volumechange="(e) => { e.target.muted = true; e.target.volume = 0; }"
                />
                <div
                  v-else-if="getCurrentMedia(caseItem.id, cardIndex, getMediaGroup(caseItem, cardIndex))?.isLazy && !getVideoSource(getCurrentMedia(caseItem.id, cardIndex, getMediaGroup(caseItem, cardIndex)))"
                  class="flex h-full w-full items-center justify-center bg-slate-200 text-slate-500"
                >
                  Loading video...
                </div>
                <img
                  v-else
                  :src="getCurrentMedia(caseItem.id, cardIndex, getMediaGroup(caseItem, cardIndex))?.src"
                  class="h-full w-full object-cover"
                  :alt="`${caseItem.title} media ${cardIndex + 1}`"
                  loading="lazy"
                />
              </template>
              
              <!-- Navigation buttons on sides -->
              <div v-if="getMediaGroup(caseItem, cardIndex).length > 1" class="absolute inset-y-0 left-0 flex items-center">
                <button
                  @click="goToPrevious(caseItem.id, cardIndex, getMediaGroup(caseItem, cardIndex))"
                  :disabled="!canGoPrevious(caseItem.id, cardIndex, getMediaGroup(caseItem, cardIndex))"
                  class="ml-2 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous"
                >
                  <svg class="h-6 w-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div v-if="getMediaGroup(caseItem, cardIndex).length > 1" class="absolute inset-y-0 right-0 flex items-center">
                <button
                  @click="goToNext(caseItem.id, cardIndex, getMediaGroup(caseItem, cardIndex))"
                  :disabled="!canGoNext(caseItem.id, cardIndex, getMediaGroup(caseItem, cardIndex))"
                  class="mr-2 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next"
                >
                  <svg class="h-6 w-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <!-- Counter at bottom center -->
              <div v-if="getMediaGroup(caseItem, cardIndex).length > 1" class="absolute inset-x-0 bottom-2 flex items-center justify-center">
                <span class="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow-lg">
                  {{ getCardMediaIndex(caseItem.id, cardIndex, getMediaGroup(caseItem, cardIndex)) + 1 }} / {{ getMediaGroup(caseItem, cardIndex).length }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Text below media -->
        <div class="space-y-3 mt-6">
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
      </article>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, nextTick } from 'vue';
import rawPatientCases from '@/data/patientCases.js';

// Store resolved video URLs for lazy imports
const resolvedVideos = reactive({});

const resolveLazyVideo = async (importFn, key) => {
  if (resolvedVideos[key]) {
    return resolvedVideos[key];
  }
  try {
    const module = await importFn();
    const url = module.default || module;
    resolvedVideos[key] = url;
    return url;
  } catch (error) {
    console.error('Failed to load lazy video:', error);
    return null;
  }
};

const buildMediaItems = (caseItem) => {
  const items = [];
  if (Array.isArray(caseItem.media) && caseItem.media.length) {
    caseItem.media.forEach((srcOrFn, idx) => {
      // Handle lazy import functions (for videos)
      if (typeof srcOrFn === 'function') {
        // Lazy import function - will be resolved when needed
        const key = `${caseItem.id}-media-${idx}`;
        items.push({
          type: 'video',
          src: null, // Will be resolved
          lazyImport: srcOrFn,
          key,
          isLazy: true,
        });
      } else if (typeof srcOrFn === 'string') {
        // String URL (images or direct video URLs)
        items.push({
          type: /\.(mp4|mov|avi|mkv)$/i.test(srcOrFn) ? 'video' : 'image',
          src: srcOrFn,
        });
      }
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

// Split media items into two groups for two cards
const splitMediaItems = (mediaItems) => {
  if (!mediaItems || mediaItems.length === 0) {
    return { firstHalf: [], secondHalf: [] };
  }
  const mid = Math.ceil(mediaItems.length / 2);
  return {
    firstHalf: mediaItems.slice(0, mid),
    secondHalf: mediaItems.slice(mid),
  };
};

const patientCases = rawPatientCases.map((caseItem) => {
  const mediaItems = buildMediaItems(caseItem);
  const { firstHalf, secondHalf } = splitMediaItems(mediaItems);
  return {
    ...caseItem,
    mediaItems,
    firstHalf,
    secondHalf,
  };
});

// Track current media index for each card (caseId-cardIndex)
const cardMediaIndices = reactive({});

const getCardMediaKey = (caseId, cardIndex) => `${caseId}-card-${cardIndex}`;

const getCardMediaIndex = (caseId, cardIndex, mediaGroup) => {
  if (!mediaGroup || mediaGroup.length === 0) return 0;
  const key = getCardMediaKey(caseId, cardIndex);
  if (typeof cardMediaIndices[key] !== 'number') {
    // Initialize: start at index 0 for each card
    cardMediaIndices[key] = 0;
  }
  return cardMediaIndices[key];
};

const getCurrentMedia = (caseId, cardIndex, mediaGroup) => {
  if (!mediaGroup || mediaGroup.length === 0) return null;
  const index = getCardMediaIndex(caseId, cardIndex, mediaGroup);
  return mediaGroup[index];
};

// Get media group for a specific card (first half or second half)
const getMediaGroup = (caseItem, cardIndex) => {
  if (cardIndex === 0) {
    return caseItem.firstHalf || [];
  } else {
    return caseItem.secondHalf || [];
  }
};

// Helper functions to check navigation state
const canGoNext = (caseId, cardIndex, mediaGroup) => {
  if (!mediaGroup || mediaGroup.length === 0) return false;
  const currentIndex = getCardMediaIndex(caseId, cardIndex, mediaGroup);
  return currentIndex < mediaGroup.length - 1;
};

const canGoPrevious = (caseId, cardIndex, mediaGroup) => {
  if (!mediaGroup || mediaGroup.length === 0) return false;
  const currentIndex = getCardMediaIndex(caseId, cardIndex, mediaGroup);
  return currentIndex > 0;
};

// Manual navigation functions
const goToNext = async (caseId, cardIndex, mediaGroup) => {
  if (!canGoNext(caseId, cardIndex, mediaGroup)) return;
  const key = getCardMediaKey(caseId, cardIndex);
  const currentIndex = getCardMediaIndex(caseId, cardIndex, mediaGroup);
  cardMediaIndices[key] = currentIndex + 1;
  await playMedia(caseId, cardIndex, mediaGroup, currentIndex + 1);
};

const goToPrevious = async (caseId, cardIndex, mediaGroup) => {
  if (!canGoPrevious(caseId, cardIndex, mediaGroup)) return;
  const key = getCardMediaKey(caseId, cardIndex);
  const currentIndex = getCardMediaIndex(caseId, cardIndex, mediaGroup);
  cardMediaIndices[key] = currentIndex - 1;
  await playMedia(caseId, cardIndex, mediaGroup, currentIndex - 1);
};

// Play media at specific index
const playMedia = async (caseId, cardIndex, mediaGroup, index) => {
  if (index < 0 || index >= mediaGroup.length) return;
  
  const key = getCardMediaKey(caseId, cardIndex);
  const media = mediaGroup[index];
  
  // Wait for Vue to update DOM
  await nextTick();
  await new Promise(resolve => setTimeout(resolve, 200));
  
  if (media?.type === 'video') {
    const videoRef = videoRefs[key];
    if (videoRef) {
      // If video source is lazy-loaded, wait for it
      if (media.isLazy && !getVideoSource(media)) {
        // Wait for video source to load
        const checkVideo = setInterval(() => {
          const src = getVideoSource(media);
          if (src && videoRef.src === src) {
            clearInterval(checkVideo);
            videoRef.muted = true;
            videoRef.volume = 0;
            videoRef.play().catch(() => {});
          }
        }, 100);
        setTimeout(() => clearInterval(checkVideo), 5000);
      } else if (videoRef.src) {
        videoRef.muted = true;
        videoRef.volume = 0;
        videoRef.play().catch(() => {});
      }
    }
  }
};

// Store video element refs
const videoRefs = reactive({});

const setVideoRef = (caseId, cardIndex, el) => {
  if (el) {
    const key = getCardMediaKey(caseId, cardIndex);
    videoRefs[key] = el;
  }
};

// Reactive video sources
const videoSources = reactive({});
const getVideoSource = (mediaItem) => {
  if (!mediaItem) return null;
  if (!mediaItem.isLazy) {
    return mediaItem.src;
  }
  const key = mediaItem.key;
  if (!videoSources[key]) {
    resolveLazyVideo(mediaItem.lazyImport, key).then((url) => {
      if (url) {
        videoSources[key] = url;
        // Auto-play video once it's loaded
        const videoRef = Object.values(videoRefs).find(v => v && v.src === url);
        if (videoRef) {
          videoRef.muted = true;
          videoRef.volume = 0;
          videoRef.play().catch(() => {});
        }
      }
    });
    return null;
  }
  return videoSources[key];
};

// Initialize and auto-play videos on mount (first item only)
onMounted(() => {
  // Wait for media to load, then auto-play videos if they're the first item
  setTimeout(() => {
    patientCases.forEach((caseItem) => {
      [0, 1].forEach((cardIndex) => {
        const mediaGroup = getMediaGroup(caseItem, cardIndex);
        if (mediaGroup.length > 0) {
          const media = getCurrentMedia(caseItem.id, cardIndex, mediaGroup);
          if (media?.type === 'video') {
            const key = getCardMediaKey(caseItem.id, cardIndex);
            const videoRef = videoRefs[key];
            if (videoRef && videoRef.src) {
              videoRef.muted = true;
              videoRef.volume = 0;
              videoRef.play().catch(() => {});
            }
          }
        }
      });
    });
  }, 500);
});
</script>

<style scoped>
video {
  display: block;
}

/* Hide any text content or tooltips */
video::before,
video::after {
  display: none !important;
  content: none !important;
}

/* Ensure no filename text appears below video */
.overflow-hidden video + * {
  display: none;
}
</style>


