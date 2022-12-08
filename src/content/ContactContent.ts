import ContactContent from '$lib/Contact/ContactContent.svelte';

import LinkedIn from '$icons/LinkedIn.svelte';
import Steam from '$icons/Steam.svelte';
import Discord from '$icons/Discord.svelte';
import Email from '$icons/Email.svelte';

export default {
	component: ContactContent,
	props: {
		title: 'CONTACT ME',
		description:
			'<b>Intrested in hiring me</b> or just want to <b>talk about business solutions</b>. Then you have came to the right individual. I am <b>fully open to a long term projects that include frontend and backend web development</b>.',
		links: [
			{
				icon: LinkedIn,
				href: '/social/linkedin'
			},
			{
				icon: Steam,
				href: '/social/steam'
			},
			{
				icon: Discord,
				href: '/social/discord'
			},
			{
				icon: Email,
				href: 'mailto:contact@jankominek.cz'
			}
		]
	}
};
