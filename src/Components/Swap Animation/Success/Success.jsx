import React, { useState } from 'react';
import './Success.css';

const Success = () => {
	return (
		<div className='flex border justify-center flex-col items-center h-full w-full'>
			<p className='text-white/80 text-[1.75rem] font-light'>
				Transfer has been
			</p>
			<h1 className='text-3xl font-light bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent'>
				completed!
			</h1>
		</div>
	);
};

export default Success;
