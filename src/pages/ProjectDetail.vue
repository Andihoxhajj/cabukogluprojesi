<template>
  <div class="section-container">
    <div v-if="project" class="space-y-12">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-center">
        <div class="flex-1">
          <p class="text-sm font-semibold uppercase tracking-[0.4em] text-primary">Project</p>
          <h1 class="mt-3 text-3xl font-semibold text-slate-900">{{ project.title }}</h1>
          <p class="mt-4 text-base leading-relaxed text-slate-600">{{ project.summary }}</p>
          <div class="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">
            <span class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 4h16v16H4z" />
              </svg>
              {{ project.focus }}
            </span>
            <span class="inline-flex items-center gap-2 rounded-full bg-slate-200 px-4 py-2 text-slate-700">
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M12 8v4l3 3" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              {{ project.year }}
            </span>
          </div>
        </div>
        <div class="relative h-72 flex-1 overflow-hidden rounded-3xl shadow-subtle">
          <img :src="project.image" :alt="project.title" class="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>

      <div class="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
        <article class="space-y-4 text-base leading-relaxed text-slate-600">
          <p>{{ project.description }}</p>
          <p>
            Outcomes were tracked through standardized clinical metrics and patient-reported measures, ensuring
            each milestone aligned with recovery goals. Cross-functional meetings and data reviews allowed the
            team to adjust protocols in real time for optimal patient experience.
          </p>
        </article>
        <aside class="space-y-6 rounded-3xl bg-white p-6 shadow-subtle">
          <h2 class="text-lg font-semibold text-slate-900">Key Highlights</h2>
          <ul class="space-y-3 text-sm text-slate-600">
            <li v-for="highlight in project.highlights" :key="highlight" class="flex gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-primary"></span>
              <span>{{ highlight }}</span>
            </li>
          </ul>
          <div class="rounded-2xl bg-primary/10 p-4 text-sm text-primary-dark">
            <p class="font-semibold">Outcome</p>
            <p class="mt-2 text-slate-600">{{ project.outcome }}</p>
          </div>
        </aside>
      </div>

      <RouterLink
        to="/project"
        class="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"
      >
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="m14 6-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Back to project overview
      </RouterLink>
    </div>

    <div v-else class="text-center">
      <p class="text-lg font-semibold text-slate-900">Project not found.</p>
      <p class="mt-2 text-sm text-slate-500">
        The case study you are looking for may have been archived. Please browse other projects.
      </p>
      <RouterLink
        to="/project"
        class="mt-6 inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"
      >
        Return to project overview
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { findProjectById } from '@/data/projects.js';

const route = useRoute();

const project = computed(() => findProjectById(route.params.id));
</script>

