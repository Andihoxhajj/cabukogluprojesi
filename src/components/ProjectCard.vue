<template>
  <RouterLink
    :to="`/project/${project.id}`"
    class="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-subtle transition hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="relative h-56 overflow-hidden">
      <img
        :src="project.image"
        :alt="`${project.title} case study`"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span
        class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
      >
        {{ project.focus }}
      </span>
      <span class="absolute bottom-4 left-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-white">
        {{ project.year }}
      </span>
    </div>
    <div class="flex flex-1 flex-col gap-3 px-6 pb-6 pt-5">
      <h3 class="text-lg font-semibold text-slate-900">{{ project.title }}</h3>
      <p class="flex-1 text-sm leading-relaxed text-slate-500">
        {{ project.summary }}
      </p>
      <span class="inline-flex items-center gap-2 text-sm font-semibold text-primary">
        View details
        <svg
          class="h-4 w-4 transition-transform group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </span>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

