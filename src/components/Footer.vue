<template>
  <footer class="bg-slate-900 text-slate-200">
    <div class="section-container flex flex-col gap-10 lg:flex-row lg:items-start">
      <div class="max-w-sm space-y-4">
        <p class="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
          Orthopedics & Traumatology
        </p>
        <h2 class="text-2xl font-semibold">Op. Dr. Cengiz Çabukoğlu</h2>
        <p class="text-sm leading-relaxed text-slate-300">
          Orthopedics and traumatology specialist with extensive experience in joint reconstruction, spine
          surgery, pediatric orthopedics, and neuro-orthopedic rehabilitation. Committed to evidence-based,
          multidisciplinary care.
        </p>
      </div>

      <div class="flex-1">
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">Professional Details</h3>
          <ul class="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-3">
            <li class="rounded-2xl bg-slate-800/50 p-3">
              <p class="text-xs uppercase tracking-widest text-primary/60">Turkey</p>
              <p class="mt-1 text-slate-100">License No: 123456</p>
            </li>
            <li class="rounded-2xl bg-slate-800/50 p-3">
              <p class="text-xs uppercase tracking-widest text-primary/60">Azerbaijan</p>
              <p class="mt-1 text-slate-100">License No: 789012</p>
            </li>
            <li class="rounded-2xl bg-slate-800/50 p-3">
              <p class="text-xs uppercase tracking-widest text-primary/60">Kosovo</p>
              <p class="mt-1 text-slate-100">License No: 345678</p>
            </li>
            <li class="rounded-2xl bg-slate-800/50 p-3">
              <p class="text-xs uppercase tracking-widest text-primary/60">Georgia</p>
              <p class="mt-1 text-slate-100">License No: 901234</p>
            </li>
            <li class="rounded-2xl bg-slate-800/50 p-3">
              <p class="text-xs uppercase tracking-widest text-primary/60">Bulgaria</p>
              <p class="mt-1 text-slate-100">License No: 567890</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-t border-white/5 bg-slate-950 py-6">
      <p class="text-center text-xs text-slate-500">
        © {{ currentYear }} Op. Dr. Cengiz Çabukoğlu. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
];
</script>

