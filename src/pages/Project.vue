<template>
  <div class="section-container space-y-12">
    <section class="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
      <div class="order-2 overflow-hidden rounded-[40px] border border-primary/20 bg-white shadow-subtle lg:order-1">
        <ImageCarousel
          :images="projectPngImages"
          :autoPlay="true"
          :autoPlayInterval="1500"
          :enableClickNavigation="true"
          heightClass="aspect-square"
        />
      </div>
      <div class="order-1 space-y-5 lg:order-2">
        <p class="text-sm font-semibold uppercase tracking-[0.4em] text-primary">Project</p>
        <h1 class="text-3xl font-semibold text-slate-900">Comprehensive Pediatric Orthopedics Initiative</h1>
        <p class="text-base leading-relaxed text-slate-600">
          Op. Dr. Çabukoğlu leads a multidisciplinary program dedicated to rare congenital anomalies and complex
          deformities that traditionally have limited treatment pathways. The initiative unites surgical planning,
          rehabilitation sciences, and family-centered support to elevate patient outcomes.
        </p>
      </div>
    </section>

    <section class="space-y-6 rounded-3xl bg-white p-8 shadow-subtle">
      <h2 class="text-2xl font-semibold text-slate-900">Scope, Purpose & Implementation</h2>
      <p class="text-base leading-relaxed text-slate-600">
        Many cases in pediatric orthopedics can be managed by specialists across the globe. However, treatment
        strategies continue to evolve for challenging conditions such as tibial hemimelia, fibular hemimelia, and
        proximal femoral focal deficiency—congenital anomalies that can culminate in severe deformities. Advanced
        cerebral palsy deformities often fall into the same category, where amputation or the absence of
        definitive care has historically been the outcome.
      </p>
      <p class="text-base leading-relaxed text-slate-600">
        These diagnoses remain among the most demanding areas within orthopedics. Even surgeons with formal
        subspecialty training rarely encounter them, making the pool of experienced physicians remarkably small.
        Management requires lengthy, resource-intensive care pathways. The project therefore focuses on these
        specific disease groups, reaching the many patients who have previously been left untreated and expanding
        the cadre of orthopedic specialists who advance scientific solutions in this domain.
      </p>
    </section>
  </div>
</template>

<script setup>
import ImageCarousel from '@/components/ImageCarousel.vue';
import allProjectImages from '@/data/projectImages.js';

// Only PNG images for this page (as requested)
const projectPngImages = Array.isArray(allProjectImages)
  ? allProjectImages.filter((src) => /\.(png)$/i.test(src))
  : [];
</script>

