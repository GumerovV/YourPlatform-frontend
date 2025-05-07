'use client'

import UploadVideoForm from '@/features/video/upload-video-form/ui/UploadVideoForm'

const UploadPage = () => {
	return (
		<div className='absolute inset-0 z-5 flex items-center justify-center bg-black/40'>
			<div className='bg-neutral-800 rounded-lg p-6 w-full max-w-[60rem] mx-auto shadow-xl'>
				<UploadVideoForm />
			</div>
		</div>
	)
}

export default UploadPage
