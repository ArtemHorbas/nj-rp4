import type { NextPage } from 'next'
import { Post } from '../components/Post/Post'
import { MainLayout } from '../layouts/MainLayout'


const Home: NextPage = () => {
  return (
    <MainLayout>
			<h1>HOOD 2 HOOD</h1>
			{/* <div className='w-[600px] flex flex-col space-y-6'>
				<Post />
				<Post />
				<Post />
				<Post />
			</div> */}
		</MainLayout>
  )
}

export default Home
