import React, { useEffect } from 'react';
import Menucard from '../MenuCard/Menucard';
import { FaArrowRight } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { GoArrowUpRight } from 'react-icons/go';
import './style.scss';
import gsap from 'gsap';
import {
	motion,
	AnimatePresence,
} from 'framer-motion';

const Final = () => {
	useEffect(() => {
		const timeline = gsap.timeline({
			defaults: { ease: 'power3.out' },
		});

		// Animate header elements
		timeline
			.fromTo(
				'.header',
				{ opacity: 0, y: -30 },
				{ opacity: 1, y: 0, duration: 0.8 }
			)
			// Stagger animation for menu items
			.fromTo(
				'.item',
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					stagger: 0.2,
				},
				'-=0.5'
			)
			// Animate the input section
			.fromTo(
				'.input-section',
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.6 },
				'-=0.4'
			);
	}, []);

	return (
		<div className='h-screen flex flex-col w-full p-2 bg-black px-[4rem] overflow-y-auto'>
			{/* Header */}
			<div className='flex justify-between w-full py-5 header'>
				<p className='text-white text-2xl'>
					showcasy.
				</p>
				<div className='flex items-stretch justify-center gap-5'>
					<div className='rounded-full p-3 px-6 gap-3 flex items-center justify-center border border-white'>
						<p className='text-white'>Let's Talk</p>
						<FaArrowRight className='text-white' />
					</div>
					<div className='rounded-full p-3 px-6 gap-3 flex items-center justify-center border border-white cursor-pointer'>
						<IoMdClose className='text-white text-xl' />
					</div>
				</div>
			</div>

			{/* Menu Card */}
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -30 }}
					transition={{ duration: 0.8, delay: 0.5 }}
				>
					<Menucard />
				</motion.div>
			</AnimatePresence>

			<div className='h-[1px] my-3 w-full bg-white/10' />

			{/* Main Content */}
			<div className='w-full min-h-[25%] flex items-center overflow-y-auto py-10'>
				<div className='w-[75%] h-full flex flex-col items-start justify-between'>
					<p className='text-white/40 text-[1.5rem]'>
						Follow Me.
					</p>
					<div className='flex w-full gap-12'>
						{[
							'INSTAGRAM',
							'BEHANCE',
							'TWITTER',
							'DRIBBBLE',
						].map((platform, index) => (
							<div
								key={index}
								className='item text-white flex gap-3 items-center'
							>
								<p className='text-lg'>{platform}</p>
								<GoArrowUpRight className='text-3xl' />
							</div>
						))}
					</div>
				</div>
				<div className='w-[25%] h-full flex flex-col items-center justify-between'>
					<p className='text-white/40 text-[1.5rem] w-full'>
						Stay connected w/ me.
					</p>
					<div className='w-full flex items-center border-b border-white/60 gap-3 py-5 input-section'>
						<input
							className='w-full bg-transparent text-xl text-white placeholder:text-white/40 outline-none'
							type='text'
							placeholder='Enter your mail'
						/>
						<GoArrowUpRight className='text-white text-3xl cursor-pointer' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Final;
