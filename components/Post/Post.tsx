import React from 'react'

export const Post: React.FC = () => {
	return (
		<div className='bg-white rounded-md p-5'>
			<h1 className='mb-4 font-bold text-xl'>What is Lorem Ipsum?</h1>
			<p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur, eveniet odio quo pariatur voluptas fugiat tenetur, amet dolores neque in nulla dolorum reiciendis quos repellat accusantium maiores error magni.</p>
			<img className='mb-4' src="http://placekitten.com/560/560" alt="" />
		</div>
	)
}
