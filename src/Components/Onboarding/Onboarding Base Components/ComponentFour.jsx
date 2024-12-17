import { useState, useEffect } from 'react';
import {
	motion,
	AnimatePresence,
} from 'framer-motion';
import { IoChevronBack } from 'react-icons/io5';
import { HiOutlineReply } from 'react-icons/hi';

const ComponentFour = ({ moveNext }) => {
	const [selectedIcon, setSelectedIcon] =
		useState('shopify');

	const handleBack = () => {
		setStep(2);
	};

	const handleNext = () => {
		moveNext(4);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
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

	const productList = [
		{
			icon: '💎',
			title: 'Jewellery',
		},
		{
			icon: '💊',
			title: 'Medical & Rx',
		},
		{
			icon: '🖥️',
			title: 'Electronics',
		},
		{
			icon: '🛺',
			title: 'Automobile',
		},
		{
			icon: '🍼',
			title: 'Baby Products',
		},
		{
			icon: '👕',
			title: 'Clothing',
		},
		{
			icon: '🎮',
			title: 'Gaming',
		},
		{
			icon: '⚽',
			title: 'Sports',
		},
		{
			icon: '🐈',
			title: 'Products for Pets',
		},
		{
			icon: '🎨',
			title: 'Art & Craft',
		},
		{
			icon: '💇',
			title: 'Beauty & Cosmetics',
		},
		{
			icon: '🧑‍⚕️',
			title: 'Health & Wellness',
		},
		{
			icon: '🍽️',
			title: 'Kitchen & Dining',
		},
		{
			icon: '📚',
			title: 'Books & Stationery',
		},
		{
			icon: '🎁',
			title: 'Gifts & Decor',
		},
		{
			icon: '🎤',
			title: 'Music & Instruments',
		},
	];

	return (
		<div className='h-3/4 w-full flex items-center justify-center px-[5rem]'>
			<div className='w-full h-full'>
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -40 }}
						transition={{
							duration: 0.75,
							ease: 'easeInOut',
						}}
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
								What Kind of products do you sell?
							</p>
							<div className='flex justify-start items-start gap-4 flex-wrap max-w-[75%] my-7'>
								{productList.map((product, index) => (
									<div
										key={index}
										className={`p-3 px-6 flex items-center gap-3 rounded-full cursor-pointer border border-black/10 transition-all active:scale-90 ${
											selectedIcon === product.icon
												? 'border border-blue-400 text-blue-400'
												: ''
										}`}
										onClick={() =>
											setSelectedIcon(product.icon)
										}
									>
										<p>{product.icon}</p>
										<p>{product.title}</p>
									</div>
								))}
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
		</div>
	);
};

export default ComponentFour;
