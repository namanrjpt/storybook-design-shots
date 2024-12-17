import {
	motion,
	AnimatePresence,
} from 'framer-motion';
import { useState } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { HiOutlineReply } from 'react-icons/hi';
import { Radio, ConfigProvider } from 'antd';

import FlowChart from './Flowchart';

const ComponentThree = ({ moveNext }) => {
	const [selectedIcon, setSelectedIcon] =
		useState('shopify');

	const handleBack = () => {
		setStep(2);
	};

	const handleNext = () => {
		moveNext(4);
	};

	return (
		<div className='h-3/4 w-full flex items-center justify-center px-[5rem]'>
			<div className='w-full h-full'>
				<AnimatePresence>
					<div className='h-full w-full flex flex-col items-center justify-center'>
						<div className='flex flex-col items-center justify-center mb-12'>
							<motion.img
								initial={{ opacity: 0, y: 40 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: { delay: 0.2 },
								}}
								exit={{ opacity: 0, y: -40 }}
								transition={{
									duration: 1,
									ease: 'easeInOut',
								}}
								src={
									'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f389.svg'
								}
								className='h-20 w-20 mb-6'
							/>
							<motion.h3
								initial={{ opacity: 0, y: 40 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: { delay: 0.3 },
								}}
								exit={{ opacity: 0, y: -40 }}
								transition={{
									duration: 1,
									ease: 'easeInOut',
								}}
								className='text-4xl font-medium text-black text-center'
							>
								You're invited to our <br />
								Demo Meeting !
							</motion.h3>
							<motion.p
								initial={{ opacity: 0, y: 40 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: { delay: 0.4 },
								}}
								exit={{ opacity: 0, y: -40 }}
								transition={{
									duration: 1,
									ease: 'easeInOut',
								}}
								className='text-center text-md mt-6 text-black/40'
							>
								The next step would be Rep Demonstration.
								<br />
								Let us know when you'll be free.
							</motion.p>
						</div>
						<motion.button
							initial={{ opacity: 0, y: 40 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.5 },
							}}
							exit={{ opacity: 0, y: -40 }}
							transition={{
								duration: 1,
								ease: 'easeInOut',
							}}
							class='px-10 py-3 text-white font-medium rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-md hover:shadow-lg'
							onClick={handleNext}
						>
							Book A Demo
						</motion.button>
					</div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ComponentThree;
