import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      title: 'Orthopedics & Traumatology Expertise',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/About.vue'),
    meta: {
      title: 'About Op. Dr. Cengiz Çabukoğlu',
    },
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/pages/Project.vue'),
    meta: {
      title: 'Project Overview',
    },
  },
  {
    path: '/project-pacients',
    name: 'project-pacients',
    component: () => import('@/pages/ProjectPacients.vue'),
    meta: {
      title: 'Project Pacients',
    },
  },
  {
    path: '/project/:id',
    name: 'project-detail',
    component: () => import('@/pages/ProjectDetail.vue'),
    meta: {
      title: 'Project Details',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  },
});

const defaultTitle = 'Op. Dr. Cengiz Çabukoğlu | Orthopedics & Traumatology';

router.afterEach((to) => {
  const pageTitle = to.meta?.title;
  document.title = pageTitle ? `${pageTitle} | Op. Dr. Cengiz Çabukoğlu` : defaultTitle;
});

export default router;

