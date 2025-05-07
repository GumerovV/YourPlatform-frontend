import Image from 'next/image'
import React from 'react'

import { useUpload } from '@/shared/lib/hooks/useUpload'
import UiSkeletonLoader from '@/shared/ui/ui-skeleton-loader'
import UiUploadField, { type IUploadField } from '@/shared/ui/ui-upload-field'

interface Props extends IUploadField {
	value: string
	folder?: string
	onChangeFile: (url: string) => void
	aspectRatio?: '16:9' | '1:1'
}

const UploadImageField = ({
	value,
	onChangeFile,
	folder,
	aspectRatio = '1:1',
	...rest
}: Props) => {
	const { uploadFile, isLoading } = useUpload({
		onChange: onChangeFile,
		folder,
	})

	const width = aspectRatio === '1:1' ? 150 : 500
	const height = aspectRatio === '1:1' ? 150 : 400

	return (
		<div className='mb-10'>
			<UiUploadField onChange={uploadFile} accept='image/*' {...rest} />
			<div>
				{isLoading ? (
					<UiSkeletonLoader classNames='h-30 w-40' />
				) : (
					value && (
						<Image
							src={value}
							alt='Uploaded file'
							width={width}
							height={height}
							priority
							className={`${aspectRatio === '1:1' ? 'rounded-full' : 'rounded-md'} mt-8`}
						/>
					)
				)}
			</div>
		</div>
	)
}

export default UploadImageField
