import React from 'react';
import {WhatshotOutlined, SmsOutlined, TrendingUpRounded, FormatListBulletedOutlined} from '@mui/icons-material'
import Link from 'next/link';
import { Button, IconButton } from '@mui/material';

const menu = [
	{ text: 'News', icon: <WhatshotOutlined />, path: '/' },
	{ text: 'Messages', icon: <SmsOutlined />, path: '/messages' },
	{ text: 'Rating NJ', icon: <TrendingUpRounded />, path: '/rating' },
	{ text: 'Subscribes', icon: <FormatListBulletedOutlined />, path: '/follows' },
]


export const LeftSide: React.FC = () => {
	return (
		<div className='left-side w-[150px]'>
			<ul className='flex flex-col space-y-4'>
				{menu.map(obj => (
					<li key={obj.path}>
						<Link href={obj.path}>
							<Button className='flex items-center space-x-2'>							
								{obj.icon}
								<div>{obj.text}</div>
							</Button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
