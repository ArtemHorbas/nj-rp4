import clsx from 'clsx'
import Head from 'next/head'
import React from 'react'
import { Header } from '../components/Header/Header'
import { LeftSide } from '../components/LeftSide/LeftSide'
import { RightSide } from '../components/RightSide/RightSide'

export interface MainLayoutProps{
	children: React.ReactNode
	title?: string
	description?: string
	keywords?: string
	contentFullWidth?: boolean
	className?: string
}

export const MainLayout: React.FC<MainLayoutProps> = ({
	children, title, description, keywords, contentFullWidth, className
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={'TJournal clone' + description} />
				<meta name="robots" content="index, follow" />
				<meta name="keywords" content={keywords || 'News, fan, artists, trends'} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<Header />
			<div className='wrapper'>
				<main className='flex justify-between'>
					<LeftSide />
					<div className='flex flex-col space-y-6'>
						{children}
					</div>
					<RightSide />
				</main>					
			</div>

		</>
	)
}
