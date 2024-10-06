import React from 'react';

const Error = () => {
	return (
		<div className='h-screen w-full bg-[#181818] flex justify-center items-center flex-col'>
			<img
				className='h-1/2'
				src='https://cdni.iconscout.com/illustration/premium/thumb/not-found-illustration-download-in-svg-png-gif-file-formats--error-search-result-state-page-empty-states-pack-design-development-illustrations-3363936.png?f=webp'
				alt=''
			/>
			<p className='text-white text-2xl'>
				Page Not Found
			</p>
			<button
				onClick={() => {
					window.location.pathname = '/';
				}}
				className='text-white bg-blue-500 px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 hover:scale-[1.05] transition-all'
			>
				Go Home
			</button>
		</div>
	);
};

export default Error;
