// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://maihde.github.io',
	integrations: [
		starlight({
			title: 'RandomWalking',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			favicon: '/favicon.ico',
			sidebar: [
				{
					label: 'Projects',
					autogenerate: { directory: 'projects' },
				},
				{
					label: 'Other',
					autogenerate: { directory: 'other' },
				}
			],
		}),
	],
});
