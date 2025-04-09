'use client'

import _ from 'lodash'
import React from 'react'

import { useTypeSelector } from '@/shared/lib/hooks/redux'
import UiTooltip from '@/shared/ui/ui-tooltip'

import { HEADER_LINKS } from '@/widgets/root-layout/model/constants'
import NavLinkItem from '@/widgets/root-layout/ui/NavLinkItem'

const NavLinks = () => {
	const isAuth = useTypeSelector(state => state.auth.isAuth)

	if (!isAuth) return null

	return (
		<div className='flex items-center'>
			{_.map(HEADER_LINKS, (item, index) =>
				item.tooltipText ? (
					<UiTooltip key={index} text={item.tooltipText}>
						<NavLinkItem link={item.link} Icon={item.Icon} />
					</UiTooltip>
				) : (
					<NavLinkItem link={item.link} Icon={item.Icon} />
				),
			)}
		</div>
	)
}

export default NavLinks
