// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AlexGBot Discord Bot',
			social: {
				github: 'https://github.com/AlexMan123456/alex-g-bot',
			},
			sidebar: [
				{
					label: "General",
					items: [
						{
							label: "ping", 
							slug: "general/ping"
						},
						{
							label: "help",
							slug: "general/help"
						},
						{
							label: "github", 
							slug: "general/github"
						},
						{
							label: "user", 
							slug: "general/user"
						},
						{
							label: "role", 
							slug: "general/role"
						},
					],
				}
			],
		}),
	],
});
