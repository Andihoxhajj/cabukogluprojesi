<template>
  <div>
    <section class="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-primary/10">
      <div class="section-container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div class="space-y-6">
          <p class="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
            Op. Dr. Cengiz Çabukoğlu
          </p>
          <h1 class="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Comprehensive orthopedics and traumatology care built on three decades of expertise.
          </h1>
          <p class="max-w-xl text-base leading-relaxed text-slate-600">
            Op. Dr. Çabukoğlu is an orthopedic and traumatology specialist serving patients since 1991 across
            community health centers, military medicine, and leading private hospitals. His practice spans joint
            reconstruction, spine surgery, pediatric orthopedics, and rehabilitation-focused treatment plans.
          </p>
          <div class="flex flex-wrap items-center gap-4">
            <RouterLink
              to="/project"
              class="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-dark"
            >
              Explore success stories
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M5 12h14" stroke-linecap="round" />
                <path d="m13 6 6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </RouterLink>
          </div>
          <!-- <div class="flex flex-wrap gap-6 pt-4 text-sm text-slate-500">
            <div class="flex items-center gap-2">
              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">30+</span>
              <span>years in orthopedic and traumatology practice</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">3K</span>
              <span>successful procedures</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">98%</span>
              <span>patient satisfaction score</span>
            </div>
          </div> -->
        </div>
        <div class="relative">
          <div class="relative overflow-hidden rounded-[40px] border border-primary/20 bg-white shadow-subtle">
            <img
              :src="doctorPortrait"
              alt="Op. Dr. Cengiz Çabukoğlu in clinic"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            class="absolute -bottom-10 left-1/2 w-[85%] -translate-x-1/2 rounded-3xl bg-white p-6 shadow-subtle"
          >
            <p class="text-sm font-semibold text-slate-900">Why patients choose Op. Dr. Çabukoğlu</p>
            <ul class="mt-3 space-y-2 text-sm text-slate-500">
              <li class="flex items-center gap-2">
                <span class="text-primary">•</span> Board-certified in orthopedics and traumatology
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">•</span> Multidisciplinary coordination across surgical and rehab teams
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">•</span> Personalized recovery roadmaps from diagnosis to reintegration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section-container">
      <header class="space-y-3 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.4em] text-primary">Services</p>
        <h2 class="text-3xl font-semibold text-slate-900">Comprehensive orthopedic solutions</h2>
        <p class="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500">
          From joint preservation to complex spine surgery, each service combines evidence-based practice with
          compassionate guidance tailored to the individual goals of every patient.
        </p>
      </header>
      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <ServiceCard v-for="service in services" :key="service.id" :service="service" />
      </div>
    </section>

    <!-- Moved from About: History & Family Legacy -->
    <section class="space-y-6 rounded-3xl bg-white p-8 shadow-subtle section-container">
      <h2 class="text-2xl font-semibold text-slate-900">History & Family Legacy</h2>
      <p class="text-base leading-relaxed text-slate-600">
        The project traces its origins to the Çabukoğlu family. Op. Dr. Cengiz Çabukoğlu is the only son of Beşir
        Çabukoğlu (July 21, 1935 – February 23, 2025), a member of the prominent Çabuk lineage in Mardin. His
        commitment to medicine was shaped by his mother, Cahide Çabukoğlu (December 26, 1946 – May 21, 2025), whose
        heart condition inspired him to pursue healing rather than a military career.
      </p>
      <p class="text-base leading-relaxed text-slate-600">
        The family legacy also owes much to his sister Deniz Çabukoğlu (January 5, 1967 – April 11, 2024), whose
        resilience and belief that every challenge has a solution guided his surgical journey. Today, Op. Dr.
        Çabukoğlu performs procedures mastered by only a few specialists worldwide.
      </p>
      <blockquote class="rounded-3xl border border-primary/20 bg-primary/5 p-6 text-sm italic text-primary-dark">
        “Carry on our name, raise our lineage, spread your healing, share your knowledge.” – Beşir Çabukoğlu
      </blockquote>
      <p class="text-base leading-relaxed text-slate-600">
        Honoring the wishes of his elders, Op. Dr. Çabukoğlu established this project to continue delivering
        world-class orthopedic care under the Çabukoğlu name. The initiative stands as a tribute to the memory of
        his parents and sister, and it also acknowledges the enduring support of family members Filiz Çabukoğlu and
        Zekiye Nergiz Çabukoğlu Birlik.
      </p>
    </section>

    <section class="section-container grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-center">
      <div class="space-y-5">
        <p class="text-sm font-semibold uppercase tracking-[0.4em] text-primary">Meet the Specialist</p>
        <h2 class="text-3xl font-semibold text-slate-900">Trusted orthopedic and traumatology expert in Istanbul</h2>
        <p class="text-sm leading-relaxed text-slate-500">
          Op. Dr. Çabukoğlu completed his medical training at Ondokuz Mayıs University and pursued residency at
          Marmara University Faculty of Medicine. His tenure includes community healthcare leadership, military
          service, and medical directorship at Pendik Şifa Hospital before joining Medical Park Gebze Hospital.
          He actively contributes to national and international orthopedic societies and research networks.
        </p>
        <ul class="space-y-3 text-sm text-slate-600">
          <li class="flex items-center gap-3">
            <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">1</span>
            Specialization in Orthopedics and Traumatology, Marmara University Faculty of Medicine (2001)
          </li>
          <li class="flex items-center gap-3">
            <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">2</span>
            Active memberships: TOTBİD, TOTEK, Pendik Healthcare Association, Kartal Bridge Club Board
          </li>
          <li class="flex items-center gap-3">
            <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">3</span>
            Lead and co-author of numerous peer-reviewed studies on biomechanics, sports medicine, and spinal surgery
          </li>
        </ul>
        <RouterLink
          to="/about"
          class="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-dark"
        >
          Learn more about the practice
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M5 12h14" stroke-linecap="round" />
            <path d="m13 6 6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </RouterLink>
      </div>
      <div class="relative">
        <div class="relative overflow-hidden rounded-[36px] border border-primary/20 bg-white shadow-subtle">
          <img
            src="@/assets/images/doctor-portrait.svg"
            alt="Illustrated portrait of Op. Dr. Cengiz Çabukoğlu"
            class="w-full"
          />
        </div>
      </div>
    </section>

    <!-- <section class="section-container">
      <TestimonialsCarousel :items="testimonials" />
    </section> -->

    <section class="section-container">
      <div
        class="rounded-3xl bg-gradient-to-r from-primary to-primary-dark px-8 py-12 text-center text-white shadow-subtle"
      >
        <h2 class="text-3xl font-semibold">Ready to move without limits?</h2>
        <p class="mt-3 text-sm text-primary-light">
          Schedule an assessment to receive a personalized surgical or rehabilitation plan tailored to your
          diagnostic findings and lifestyle goals.
        </p>
        <div class="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+902122223344"
            class="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-white"
          >
            Call the clinic
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue';
import TestimonialsCarousel from '@/components/TestimonialsCarousel.vue';
import services from '@/data/services.js';
import testimonials from '@/data/testimonials.js';
import doctorPortrait from '@/data/doctorImage.js';
</script>

