'use client'

import { LoaderCircleIcon } from 'lucide-react'
import dynamic from 'next/dynamic'

import { IVideo } from '@/shared/types/video.types'

import { useComments } from '@/widgets/comments/model/useComments'

const DynamicAddCommentForm = dynamic(
	() =>
		import('@/features/comment/add-comment-form').then(
			mod => mod.AddCommentForm,
		),
	{ ssr: false },
)

const DynamicCommentItemWithActions = dynamic(
	() => import('./CommentItemWithActions'),
	{ ssr: false },
)

const Comments = ({ video }: { video: IVideo }) => {
	const { comments, isLoading } = useComments(video.publicId, video.id)

	if (isLoading)
		return (
			<div className='flex justify-center pt-10 pb-72'>
				<LoaderCircleIcon size={30} className='animate-spin' />
			</div>
		)

	return (
		<div>
			<DynamicAddCommentForm videoId={video.id} />
			{comments?.length
				? comments.map(comment => (
						<div
							key={comment.id}
							className='py-4 border-b border-border last:border-none last:py-0 last:pt-4'
						>
							<DynamicCommentItemWithActions
								comment={comment}
								videoId={video.id}
							/>
						</div>
					))
				: null}
		</div>
	)
}

export default Comments
