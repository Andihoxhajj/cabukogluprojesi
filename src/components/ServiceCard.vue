<template>
  <article
    class="group flex h-full flex-col gap-4 rounded-3xl bg-white p-6 shadow-subtle transition hover:-translate-y-1 hover:shadow-xl"
  >
    <div
      class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white"
    >
      <svg
        class="h-7 w-7"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path v-for="(segment, index) in iconPath" :key="index" :d="segment" />
      </svg>
    </div>
    <h3 class="text-lg font-semibold text-slate-900">{{ service.title }}</h3>
    <p class="text-sm leading-relaxed text-slate-500">
      {{ service.description }}
    </p>
  </article>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
});

const iconLibrary = {
  joint: [
    'M10 14c0-4 4-8 8-8h12c4 0 8 4 8 8v20c0 4-4 8-8 8H18c-4 0-8-4-8-8V14Z',
    'M10 26h28',
    'M18 6v8',
    'M30 6v8',
  ],
  spine: [
    'M24 6v36',
    'M16 10h16',
    'M16 16h16',
    'M16 22h16',
    'M16 28h16',
    'M16 34h16',
    'M16 40h16',
  ],
  sports: [
    'M24 6a18 18 0 1 0 0 36 18 18 0 0 0 0-36Z',
    'M11 17c4 3 13 3 17 7 7 6 5 13 9 17',
    'M24 6v12',
    'M6 24h12',
  ],
  rehab: [
    'M10 34h28',
    'M14 26v12',
    'M20 18v20',
    'M26 10v28',
    'M32 18v20',
    'M38 26v12',
  ],
};

const iconPath = computed(() => iconLibrary[props.service.icon] ?? iconLibrary.joint);
</script>

