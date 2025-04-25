export function trimParagraphs(text: string, count: number) {
	if (count <= 0) return ''

	const paragraphRegex = /<p\b[^>]*>[\s\S]*?<\/p>/gi
	const matches = text.match(paragraphRegex)

	if (!matches) return text.slice(0, 150)

	return matches.slice(0, count).join('')
}
