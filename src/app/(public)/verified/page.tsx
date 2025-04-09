import { CheckIcon } from 'lucide-react'
import React from 'react'

const VerifiedPage = () => {
	return (
		<div className='w-1/2 mx-auto text-center mt-24'>
			<h1 className='inline-flex items-center gap-2 font-bold text-4xl mb-5'>
				<CheckIcon className='text-green-500' size={50} />
				<span>Почта успешно подтверждена!</span>
			</h1>
		</div>
	)
}

export default VerifiedPage
