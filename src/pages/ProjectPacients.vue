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
    <div class="space-y-16">
      <article
        v-for="(caseItem, index) in patientCases"
        :key="caseItem.id"
        class="rounded-3xl bg-white p-8 shadow-subtle"
        :class="{ 'lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center': caseItem.images?.length > 0 || caseItem.video }"
      >
        <!-- Content Section -->
        <div class="space-y-6" :class="{ 'lg:order-2': index % 2 === 0 && (caseItem.images?.length > 0 || caseItem.video) }">
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
          v-if="caseItem.images?.length > 0 || caseItem.video"
          class="mt-8 lg:mt-0"
          :class="{ 'lg:order-1': index % 2 === 0 && (caseItem.images?.length > 0 || caseItem.video) }"
        >
          <!-- Video -->
          <div v-if="caseItem.video" class="overflow-hidden rounded-2xl border border-primary/20 bg-slate-100">
            <video
              :src="caseItem.video"
              controls
              class="h-full w-full object-cover"
              :poster="caseItem.images?.[0]"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <!-- Images Carousel -->
          <div v-else-if="caseItem.images?.length > 0" class="overflow-hidden rounded-2xl border border-primary/20">
            <ImageCarousel
              :images="caseItem.images"
              :autoPlay="true"
              :autoPlayInterval="3000"
              :enableClickNavigation="true"
              heightClass="aspect-[4/3]"
            />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import ImageCarousel from '@/components/ImageCarousel.vue';
import patientCases from '@/data/patientCases.js';
</script>

<style scoped>
</style>


