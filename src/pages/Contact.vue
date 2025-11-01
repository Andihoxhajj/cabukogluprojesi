<template>
  <div class="section-container space-y-16">
    <header class="space-y-4 text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.4em] text-primary">Contact</p>
      <h1 class="text-3xl font-semibold text-slate-900">Book an appointment</h1>
      <p class="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500">
        Share a few details about your needs and our coordination team will respond within one business day.
        For urgent cases, please call the clinic directly.
      </p>
    </header>

    <section class="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
      <form
        class="space-y-6 rounded-3xl bg-white p-8 shadow-subtle"
        novalidate
        @submit.prevent="handleSubmit"
      >
        <div class="grid gap-6 sm:grid-cols-2">
          <label class="flex flex-col gap-2 text-sm font-semibold text-slate-700">
            Full Name
            <input
              v-model.trim="form.name"
              type="text"
              name="name"
              autocomplete="name"
              placeholder="e.g. Ayşe Demir"
              class="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-normal text-slate-600 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
            <span v-if="errors.name" class="text-xs text-red-500">{{ errors.name }}</span>
          </label>

          <label class="flex flex-col gap-2 text-sm font-semibold text-slate-700">
            Email Address
            <input
              v-model.trim="form.email"
              type="email"
              name="email"
              autocomplete="email"
              placeholder="you@example.com"
              class="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-normal text-slate-600 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
            <span v-if="errors.email" class="text-xs text-red-500">{{ errors.email }}</span>
          </label>
        </div>

        <label class="flex flex-col gap-2 text-sm font-semibold text-slate-700">
          How can we help?
          <textarea
            v-model.trim="form.message"
            name="message"
            rows="6"
            placeholder="Please describe your concern, previous diagnoses, or preferred appointment timing."
            class="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-normal text-slate-600 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
          <span v-if="errors.message" class="text-xs text-red-500">{{ errors.message }}</span>
        </label>

        <label class="flex items-center gap-3 text-xs text-slate-500">
          <input v-model="form.agree" type="checkbox" class="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" />
          I consent to the storage of my information for appointment scheduling purposes.
        </label>
        <span v-if="errors.agree" class="block text-xs text-red-500">{{ errors.agree }}</span>

        <button
          type="submit"
          class="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-subtle transition hover:-translate-y-0.5 hover:bg-primary-dark"
        >
          Submit Request
        </button>

        <p v-if="successMessage" class="rounded-2xl bg-primary/10 p-4 text-sm text-primary-dark">
          {{ successMessage }}
        </p>
      </form>

      <aside class="space-y-6 text-sm text-slate-600">
        <div class="rounded-3xl bg-white p-8 shadow-subtle">
          <h2 class="text-lg font-semibold text-slate-900">Doctor Details</h2>
          <ul class="mt-5 space-y-4">
            <li>
              <p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Address</p>
              <p class="mt-1"> İstanbul</p>
            </li>
            <li>
              <p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Phone</p>
              <a href="tel:+902122223344" class="mt-1 block text-primary hover:text-primary-dark">+90 (212) 222 33 44</a>
            </li>
            <li>
              <p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Email</p>
              <a href="mailto:cengizcabukoglu@gmail.com" class="mt-1 block text-primary hover:text-primary-dark">cengizcabukoglu@gmail.com</a>
            </li>
          </ul>
        </div>

        <div class="overflow-hidden rounded-3xl shadow-subtle">
          <iframe
            title="Op. Dr. Cengiz Çabukoğlu Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.339479436874!2d29.022022976571182!3d41.10974113696062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab63cde3d3e25%3A0xc9bbf3711503edeb!2sIstinye%20University%20Hospital%20Liv%20Hospital%20Vadistanbul!5e0!3m2!1sen!2str!4v1698673910954!5m2!1sen!2str"
            width="100%"
            height="360"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </aside>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: '',
  agree: false,
});

const errors = reactive({
  name: '',
  email: '',
  message: '',
  agree: '',
});

const successMessage = ref('');

const validate = () => {
  let isValid = true;

  errors.name = form.name ? '' : 'Please provide your full name.';
  errors.email = /\S+@\S+\.\S+/.test(form.email)
    ? ''
    : 'Please enter a valid email address.';
  errors.message = form.message.length >= 20
    ? ''
    : 'Please provide at least 20 characters so we can better prepare for your visit.';
  errors.agree = form.agree ? '' : 'Consent is required to process your request.';

  Object.values(errors).forEach((value) => {
    if (value) {
      isValid = false;
    }
  });

  return isValid;
};

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.message = '';
  form.agree = false;
  Object.keys(errors).forEach((key) => {
    errors[key] = '';
  });
};

const handleSubmit = () => {
  successMessage.value = '';
  if (!validate()) {
    return;
  }

  successMessage.value =
    'Thank you for reaching out. Our patient coordinator will get back to you shortly to confirm appointment options.';

  resetForm();
};
</script>

