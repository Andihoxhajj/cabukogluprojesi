<template>
  <div class="section-container space-y-16">
    <header class="grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:items-center">
      <div class="relative overflow-hidden rounded-[40px] border border-primary/20 bg-white shadow-subtle">
        <img :src="aboutImage" alt="Op. Dr. Cengiz Çabukoğlu" class="w-full object-cover" />
      </div>
      <div class="space-y-6">
        <p class="text-sm font-semibold uppercase tracking-[0.4em] text-primary">About</p>
        <h1 class="text-3xl font-semibold text-slate-900">Op. Dr. Cengiz Çabukoğlu</h1>
        <p class="text-base leading-relaxed text-slate-600">
          Op. Dr. Çabukoğlu is an Istanbul-based orthopedic surgeon with more than three decades of continuous
          service across community health centers, military medicine, and tertiary hospitals. He graduated from
          Ondokuz Mayıs University Faculty of Medicine in 1991 and completed his residency in Orthopedics and
          Traumatology at Marmara University in 2001.
        </p>
        <p class="text-base leading-relaxed text-slate-600">
          His career has included leadership roles as a chief physician at Pendik Şifa Hospital and advanced
          subspecialty practice at Medical Park Gebze Hospital, where he continues to deliver evidence-based
          joint reconstruction, spine surgery, and sports injury care.
        </p>
        <p class="text-base leading-relaxed text-slate-600">
          Op. Dr. Çabukoğlu prioritizes multidisciplinary collaboration, patient education, and precise surgical
          planning. His academic focus spans postoperative biomechanics, minimally invasive techniques, and
          neuro-orthopedic rehabilitation—topics reflected throughout his publications and conference
          presentations.
        </p>
      </div>
    </header>

    
    <section class="grid gap-12 lg:grid-cols-2">
      <div class="space-y-5">
        <h2 class="text-2xl font-semibold text-slate-900">Field of Specialization & Professional Experience</h2>
        <ul class="space-y-4 text-sm leading-relaxed text-slate-600">
          <li
            v-for="item in experience"
            :key="`${item.role}-${item.organization}`"
            class="rounded-2xl border border-primary/10 bg-white p-4 shadow-subtle"
          >
            <p class="text-base font-semibold text-slate-900">{{ item.role }}</p>
            <p class="mt-1 text-sm text-slate-600">{{ item.organization }}</p>
            <p class="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">{{ item.years }}</p>
          </li>
        </ul>
      </div>
      <div class="space-y-5">
        <h2 class="text-2xl font-semibold text-slate-900">Education</h2>
        <ul class="space-y-4 text-sm leading-relaxed text-slate-600">
          <li
            v-for="item in education"
            :key="`${item.level}-${item.institution}`"
            class="rounded-2xl border border-primary/10 bg-white p-4 shadow-subtle"
          >
            <p class="text-base font-semibold text-slate-900">{{ item.level }}</p>
            <p class="mt-1 text-sm text-slate-600">{{ item.institution }}</p>
            <p class="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">{{ item.years }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-3">
      <div class="rounded-3xl bg-white p-6 shadow-subtle">
        <h3 class="text-lg font-semibold text-slate-900">Professional Memberships</h3>
        <ul class="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
          <li v-for="item in memberships" :key="item">• {{ item }}</li>
        </ul>
      </div>
      
      <div class="rounded-3xl bg-white p-6 shadow-subtle">
        <h3 class="text-lg font-semibold text-slate-900">Thesis Topic</h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-600">
          {{ thesisTopic }}
        </p>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold text-slate-900">Academic Portfolio</h2>
      <div class="space-y-4">
        <details class="group rounded-2xl border border-primary/20 bg-white p-6 shadow-subtle">
          <summary class="flex cursor-pointer items-center justify-between text-lg font-semibold text-slate-900">
            Scientific Awards
            <span class="text-primary transition group-open:rotate-45">+</span>
          </summary>
          <div class="mt-4 space-y-4 text-sm leading-relaxed text-slate-600">
            <div v-for="award in awards" :key="`${award.year}-${award.title}`" class="rounded-2xl bg-primary/5 p-4">
              <p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{{ award.year }}</p>
              <p class="mt-1 text-base font-semibold text-slate-900">{{ award.title }}</p>
              <p class="mt-2 text-sm text-slate-600">{{ award.description }}</p>
            </div>
          </div>
        </details>

        <details class="group rounded-2xl border border-primary/20 bg-white p-6 shadow-subtle">
          <summary class="flex cursor-pointer items-center justify-between text-lg font-semibold text-slate-900">
            Advanced Courses & Training
            <span class="text-primary transition group-open:rotate-45">+</span>
          </summary>
          <ul class="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
            <li v-for="item in courses" :key="item">{{ item }}</li>
          </ul>
        </details>

        <details class="group rounded-2xl border border-primary/20 bg-white p-6 shadow-subtle">
          <summary class="flex cursor-pointer items-center justify-between text-lg font-semibold text-slate-900">
            International Publications
            <span class="text-primary transition group-open:rotate-45">+</span>
          </summary>
          <ol class="mt-4 space-y-3 list-decimal pl-6 text-sm leading-relaxed text-slate-600">
            <li v-for="item in publicationsInternational" :key="item.title">
              <p class="font-semibold text-slate-900">{{ item.title }}</p>
              <p class="text-sm text-slate-600">{{ item.citation }}</p>
            </li>
          </ol>
        </details>

        <details class="group rounded-2xl border border-primary/20 bg-white p-6 shadow-subtle">
          <summary class="flex cursor-pointer items-center justify-between text-lg font-semibold text-slate-900">
            National Publications
            <span class="text-primary transition group-open:rotate-45">+</span>
          </summary>
          <ol class="mt-4 space-y-3 list-decimal pl-6 text-sm leading-relaxed text-slate-600">
            <li v-for="item in publicationsNational" :key="item">{{ item }}</li>
          </ol>
        </details>

        <details class="group rounded-2xl border border-primary/20 bg-white p-6 shadow-subtle">
          <summary class="flex cursor-pointer items-center justify-between text-lg font-semibold text-slate-900">
            International Conference Presentations
            <span class="text-primary transition group-open:rotate-45">+</span>
          </summary>
          <ol class="mt-4 space-y-3 list-decimal pl-6 text-sm leading-relaxed text-slate-600">
            <li v-for="item in conferenceInternational" :key="item">{{ item }}</li>
          </ol>
        </details>

        <details class="group rounded-2xl border border-primary/20 bg-white p-6 shadow-subtle">
          <summary class="flex cursor-pointer items-center justify-between text-lg font-semibold text-slate-900">
            National Conference Presentations
            <span class="text-primary transition group-open:rotate-45">+</span>
          </summary>
          <ol class="mt-4 space-y-3 list-decimal pl-6 text-sm leading-relaxed text-slate-600">
            <li v-for="item in conferenceNational" :key="item">{{ item }}</li>
          </ol>
        </details>

        <details class="group rounded-2xl border border-primary/20 bg-white p-6 shadow-subtle">
          <summary class="flex cursor-pointer items-center justify-between text-lg font-semibold text-slate-900">
            Book Contributions
            <span class="text-primary transition group-open:rotate-45">+</span>
          </summary>
          <ul class="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
            <li v-for="item in books" :key="item">{{ item }}</li>
          </ul>
        </details>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  experience,
  education,
  memberships,
  languages,
  references,
  thesisTopic,
  awards,
  courses,
  publicationsInternational,
  publicationsNational,
  conferenceInternational,
  conferenceNational,
  books,
} from '@/data/profile.js';
import aboutImage from '@/assets/images/12.png';
</script>

