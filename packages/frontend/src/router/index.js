import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../pages/LandingPage.vue'
import CupsInfo from '../pages/CupsInfo.vue'
import NotFound from '../pages/NotFound.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/landing-page' },
		{ path: '/landing-page', component: LandingPage },
		{ path: '/info/:cups', component: CupsInfo },
		{ path: '/:notFound(.*)', component: NotFound },
	],
})

export default router
