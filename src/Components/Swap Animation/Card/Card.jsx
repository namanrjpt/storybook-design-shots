import React from 'react';
import Transfer from '../Transfer/Transfer';
import Success from '../Success/Success';

const Card = () => {
	return (
		<div className='flex justify-center items-center h-[100vh]'>
			<div className='min-h-[75dvh] w-[27vw] rounded-[1rem] bg-black'>
				<Success />
			</div>
		</div>
	);
};

export default Card;
