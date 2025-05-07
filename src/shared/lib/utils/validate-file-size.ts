import toast from 'react-hot-toast'

export function validateFileSize(
	file: File,
	maxSize: number = 300 * 1024 * 1024,
) {
	const maxSizeInMb = maxSize / (1024 * 1024)
	const fileSizeInMb = Math.floor(file.size / (1024 * 1024))

	if (fileSizeInMb > maxSizeInMb) {
		toast.error(
			`Размер файла не должен превышать ${maxSizeInMb} Мб (${fileSizeInMb} Мб / ${maxSizeInMb} Мб)`,
		)
		return false
	}
	return true
}
