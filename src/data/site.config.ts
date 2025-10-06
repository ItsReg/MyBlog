interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://sandeeptrycatch.com/', // Write here your website url
	author: 'Sandeep', // Site author
	title: 'Knowledge Blog', // Site title.
	description:
		'This site is to enhance your technical knowledge which gives you confidence and power to do more. Thats what my aim is.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
