import React from 'react'
import ArrowRightIcon from '@mui/icons-material/NavigateNextOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from '@mui/material';
import { userAgent } from 'next/server';

const items = [
	{
		user: {
			fullname: 'Naruto Udzumaki'
		},
		text: 'Every t-sirt from CUM i have burnt',
		post: {
			title: 'What is ABO?'
		}
	},
	{
		user: {
			fullname: 'Naruto Udzumaki'
		},
		text: 'Every t-sirt from CUM i have burnt',
		post: {
			title: 'What is ABOB?'
		}
	},
	{
		user: {
			fullname: 'Naruto Udzumaki'
		},
		text: 'Every t-sirt from CUM i have burnt',
		post: {
			title: 'What is ABOBA?'
		}
	},
]

interface CommentItemProps{
	user: {
		fullname: string
	};
	text: string;
	post: {
		title: string
	};
}

export const RightSide: React.FC = () => {
	
	const [open, setOpen] = React.useState(true)
	
	return (
		<div className='right-side w-[260px]'>
			<div onClick={() => setOpen(!open)} className='flex items-center space-x-3 mb-5 cursor-pointer'>
				<h1>Comments</h1>
				<IconButton>
					{open 
					? <KeyboardArrowDownIcon />
					: <ArrowRightIcon />
					}
				</IconButton>
			</div>
			{open && items.map(item => (
				<div key={item.post.title}>
					<div className='flex items-center space-x-3 mb-4'>
						<img src='http://placekitten.com/30/30' alt="" />
						<h2 className=' font-bold'>{item.user.fullname}</h2>
					</div>
					<p className='mb-3'>{item.text}</p>
					<h3 className='mb-5 font-medium'>{item.post.title}</h3>
				</div>
			))}
		</div>
	)
}
