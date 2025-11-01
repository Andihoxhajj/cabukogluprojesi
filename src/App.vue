<template>
  <div class="flex min-h-screen flex-col bg-gradient-to-b from-white via-slate-50 to-slate-100">
    <Navbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

