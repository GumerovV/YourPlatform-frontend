import { SquarePlayIcon } from 'lucide-react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { COLORS } from '@/shared/constants/colors.constants'
import { PAGE } from '@/shared/constants/routes'

const UiLogo = ({
	title = 'YourPlatform',
	classNames,
	logoSize = 25,
	isTitle = true,
}: {
	title?: string
	classNames?: string
	logoSize?: number
	isTitle?: boolean
}) => (
	<Link href={PAGE.HOME} className='inline-flex items-center gap-1'>
		<SquarePlayIcon size={logoSize} color={COLORS.primary} />
		{isTitle && (
			<span className={twMerge('text-xl font-semibold', classNames)}>
				{title}
			</span>
		)}
	</Link>
)

export default UiLogo
