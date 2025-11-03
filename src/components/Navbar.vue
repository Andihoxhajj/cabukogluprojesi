<template>
  <header
    class="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm shadow-slate-200"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
      <RouterLink to="/" class="flex items-center gap-3" @click="closeMenu">
        <img
          :src="logo"
          alt="Logo"
          class="h-14 w-14 object-contain"
        />
        <div class="leading-tight">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Orthopedics</p>
          <p class="text-lg font-semibold text-slate-900">Op. Dr. Cengiz Çabukoğlu</p>
        </div>
      </RouterLink>

      <button
        class="inline-flex items-center justify-center rounded-md p-2 text-slate-600 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:hidden"
        type="button"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <svg
          v-if="!isMenuOpen"
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path d="M3 6h18" stroke-linecap="round" />
          <path d="M3 12h18" stroke-linecap="round" />
          <path d="M3 18h18" stroke-linecap="round" />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path d="M6 6l12 12" stroke-linecap="round" />
          <path d="M18 6L6 18" stroke-linecap="round" />
        </svg>
      </button>

      <div class="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
        <RouterLink
          v-for="link in navigation"
          :key="link.to"
          :to="link.to"
          class="relative transition-all duration-200 hover:text-primary"
          :class="{ 'text-primary': isActive(link.to) }"
        >
          {{ link.label }}
          <span
            v-if="isActive(link.to)"
            class="absolute -bottom-2 left-0 h-[2px] w-full bg-primary"
          />
        </RouterLink>
      </div>
    </nav>

    <transition name="fade">
      <div v-if="isMenuOpen" class="sm:hidden">
        <div class="space-y-2 bg-white px-4 pb-6">
          <RouterLink
            v-for="link in navigation"
            :key="link.to"
            :to="link.to"
            class="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-primary/10 hover:text-primary"
            :class="{ 'bg-primary/10 text-primary': isActive(link.to) }"
            @click="closeMenu"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import logo from '@/assets/images/logoo.svg';

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Project', to: '/project' },
  { label: 'About', to: '/about' },
  { label: 'Project Pacients', to: '/project-pacients' },
];

const isMenuOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const currentPath = computed(() => route.path);

const isActive = (path) => {
  if (path === '/') {
    return currentPath.value === '/';
  }
  return currentPath.value.startsWith(path);
};

watch(route, () => {
  closeMenu();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

