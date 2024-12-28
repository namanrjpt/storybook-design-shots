import React from 'react';
import { IoOpenOutline } from 'react-icons/io5';
import './Success.css';
import {
	motion,
	AnimatePresence,
} from 'framer-motion';

const Success = ({ close }) => {
	return (
		<div className='flex justify-center flex-col items-center w-full min-h-[60vh] h-[60vh]'>
			<div className='flex basis-[70%] w-full flex-col items-center justify-center'>
				<div className='max-w-[200px] max-h-[200px] bg-black rounded-full flex justify-center items-center'>
					<AnimatePresence mode='exit'>
						<motion.div
							initial={{
								scale: 0,
								opacity: 0,
							}}
							animate={{
								scale: 1,
								opacity: 1,
							}}
							exit={{
								scale: 0,
								opacity: 0,
							}}
							transition={{
								duration: 0.5,
							}}
							className='success-checkmark'
						>
							<div className='check-icon'>
								<span className='icon-line line-tip'></span>
								<span className='icon-line line-long'></span>
								<div className='icon-circle'></div>
								<div className='icon-fix'></div>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
				<p className='text-white/80 text-[1.75rem] font-normal mt-6'>
					Transfer has been
				</p>
				<h1 className='m-0 -mt-2 p-0 text-3xl font-normal bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent'>
					completed!
				</h1>
			</div>
			<div className='flex basis-[30%] flex-col items-center justify-end pb-6 mt-6'>
				<div
					className='mt-9 rounded-full border border-white/90 text-white/80 text-[1rem] px-6 py-3 cursor-pointer hover:bg-white/10'
					onClick={close}
				>
					Back to home
				</div>
				<p className='text-white/40 text-[1rem] mt-2 flex items-center'>
					View in Explorer{' '}
					<IoOpenOutline className='ml-2 text-white/60' />
				</p>
			</div>
		</div>
	);
};

export default Success;
