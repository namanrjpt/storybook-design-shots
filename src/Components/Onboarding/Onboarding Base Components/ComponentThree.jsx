import {
	motion,
	AnimatePresence,
} from 'framer-motion';
import { useState, useEffect } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { HiOutlineReply } from 'react-icons/hi';
import { Radio, ConfigProvider } from 'antd';

import FlowChart from './Flowchart';

const ComponentThree = ({ moveNext }) => {
	const [selectedIcon, setSelectedIcon] =
		useState('');

	const handleBack = () => {
		moveNext(1);
	};

	useEffect(() => {
		document.removeEventListener(
			'keydown',
			handleKeyDown
		);
		document.addEventListener(
			'keydown',
			handleKeyDown
		);
	}, [selectedIcon]);

	const handleNext = () => {
		if (selectedIcon === '') return;
		document.removeEventListener(
			'keydown',
			handleKeyDown
		);
		moveNext(3);
	};

	const handleCheck = (e) => {
		setSelectedIcon(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			console.log('Enter');
			handleNext();
		}
	};

	useEffect(() => {
		document.addEventListener(
			'keydown',
			handleKeyDown
		);

		return () => {
			document.removeEventListener(
				'keydown',
				handleKeyDown
			);
		};
	}, []);

	return (
		<div className='h-3/4 w-full flex items-center justify-center px-[5rem]'>
			<div className='w-full h-full'>
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, y: 40 }} // Start with fade-in and down position
						animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
						exit={{ opacity: 0, y: -40 }} // Fade out and move up
						transition={{
							duration: 0.75,
							ease: 'easeInOut',
						}} // Smooth transition
						className='h-full w-full'
					>
						<div className='w-full h-full flex flex-col items-start justify-center'>
							<div
								className='mt-10 flex items-center justify-start gap-2 cursor-pointer'
								onClick={handleBack}
							>
								<IoChevronBack className='text-black text-lg' />
								<p className='text-black font-medium'>
									Back
								</p>
							</div>
							<p className='mt-10 text-4xl font-semibold'>
								Your Ecommerce Platform
							</p>
							<div className='flex justify-start items-start gap-4 flex-col my-7'>
								<ConfigProvider
									theme={{
										components: {
											Radio: {
												dotSize: 8,
												radioSize: 15,
											},
										},
									}}
								>
									<Radio.Group
										className='flex flex-col gap-4'
										onChange={handleCheck}
										value={selectedIcon}
									>
										<Radio
											className='text-lg'
											value='shopify'
										>
											Shopify
										</Radio>
										<Radio
											className='text-lg'
											value='magento'
										>
											Magento
										</Radio>
										<Radio
											className='text-lg'
											value='woocommerce'
										>
											WooCommerce
										</Radio>
										<Radio
											className='text-lg'
											value='bigcommerce'
										>
											BigCommerce
										</Radio>
										<Radio
											className='text-lg'
											value='salesforce'
										>
											Salesforce
										</Radio>
										<Radio
											className='text-lg'
											value='other'
										>
											Other
										</Radio>
									</Radio.Group>
								</ConfigProvider>
							</div>
							<div className='flex items-center justify-center gap-5 mt-5'>
								<button
									class='px-10 py-3 text-white font-medium rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-md hover:shadow-lg transition-all duration-300'
									onClick={handleNext}
								>
									Next
								</button>
								<div className='flex items-center justify-center gap-2'>
									<HiOutlineReply
										className='text-black bg-black/5 p-2 rounded-lg'
										size={30}
									/>
									<p className='font-light'>
										Or Press Enter
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
			<div className='w-full mr-[7rem] h-full'>
				<div className='relative h-full w-full '>
					<FlowChart tagname={selectedIcon} />
				</div>
			</div>
		</div>
	);
};

export default ComponentThree;
