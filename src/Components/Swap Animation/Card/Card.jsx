import React from 'react';
import Transfer from '../Transfer/Transfer';
import Success from '../Success/Success';

const Card = () => {
	return (
		<div className='flex overflow-hidden justify-center items-center h-[100vh]'>
			<div className='w-[27vw] overflow-hidden rounded-[1rem] bg-black py-5'>
				<Transfer />
			</div>
		</div>
	);
};

export default Card;
