import { SquarePlayIcon } from 'lucide-react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { COLORS } from '@/shared/constants/colors.constants'
import { PAGE } from '@/shared/constants/routes'

const UiLogo = ({
	classNames,
	logoSize = 25,
}: {
	classNames?: string
	logoSize?: number
}) => (
	<Link href={PAGE.HOME} className='inline-flex items-center gap-1'>
		<SquarePlayIcon size={logoSize} color={COLORS.primary} />
		<span className={twMerge('text-xl font-semibold', classNames)}>
			YourPlatform
		</span>
	</Link>
)

export default UiLogo
