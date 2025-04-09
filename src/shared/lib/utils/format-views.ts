export function formatViews(views: number): string {
	let formattedViews: string

	if (views >= 1_000_000_000) {
		formattedViews = (views / 1_000_000_000).toFixed(1)
		formattedViews = formattedViews.endsWith('.0')
			? formattedViews.slice(0, -2)
			: formattedViews
		return `${formattedViews}B показов`
	} else if (views >= 1_000_000) {
		formattedViews = (views / 1_000_000).toFixed(1)
		formattedViews = formattedViews.endsWith('.0')
			? formattedViews.slice(0, -2)
			: formattedViews
		return `${formattedViews}M показов`
	} else if (views >= 1_000) {
		formattedViews = (views / 1_000).toFixed(1)
		formattedViews = formattedViews.endsWith('.0')
			? formattedViews.slice(0, -2)
			: formattedViews
		return `${formattedViews}K показов`
	} else return `${views} показов`
}
