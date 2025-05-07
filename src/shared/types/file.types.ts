import { EnumVideoQuality } from './video.types'

export interface IFileResponse {
	url: string
	name: string
	maxResolution?: EnumVideoQuality
}

export interface IFileUploadStatus {
	fileName: string
	status: number
}
