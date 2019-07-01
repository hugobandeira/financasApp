
const routes = [
  {
    path: '/',
    component: () => import('../layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Home') },
      { path: 'cadastrar', component: () => import('../pages/CriarMovimentacao') },
    ],
  },
  {
    path: '/login',
    component: () => import('../layouts/LoginTemplate'),
    children: [{ path: '', component: () => import('../pages/Login') }],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
