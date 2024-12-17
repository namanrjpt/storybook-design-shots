import React, {
	useState,
	useCallback,
} from 'react';
import { useGSAP } from '@gsap/react';
import { IoChevronBack } from 'react-icons/io5';
import { HiOutlineReply } from 'react-icons/hi';
import {
	motion,
	AnimatePresence,
} from 'motion/react';
import gsap from 'gsap';

const ComponentTwo = ({ moveNext }) => {
	const [step, setStep] = useState(1);
	const [data, setData] = useState({
		name: '',
		companyName: '',
		companyWebsite: '',
	});

	const handleNext = () => {
		if (step === 3) {
			moveNext(2);
		} else {
			setStep((prev) => prev + 1);
		}
	};

	const handleBack = () => {
		setStep((prev) => prev - 1);
	};

	useGSAP(
		() => {
			if (data.companyName != '') {
				gsap.to('.imageCard', {
					height: '10vh',
					opacity: 1,
					duration: 0.5,
					ease: 'power2.inOut',
					onComplete: () => {
						gsap.to('.icon', {
							opacity: 1,
							duration: 0.25,
						});
						gsap.to('.companyname', {
							opacity: 1,
							duration: 0.25,
						});
					},
				});
			} else {
				gsap.to('.icon', {
					opacity: 0,
					duration: 0.25,
					onComplete: () => {
						gsap.to('.imageCard', {
							height: '0vh',
							opacity: 0,
							duration: 0.5,
							ease: 'power2.inOut',
						});
					},
				});
				gsap.to('.companyname', {
					opacity: 0,
					duration: 0.25,
				});
			}
		},
		{
			dependencies: [data.companyName],
		}
	);

	useGSAP(
		() => {
			if (data.companyWebsite) {
				gsap.to('.companywebsite', {
					opacity: 1,
					duration: 0.25,
				});
			} else {
				gsap.to('.companywebsite', {
					opacity: 0,
					duration: 0.25,
				});
			}
		},
		{
			dependencies: [data.companyWebsite],
		}
	);

	useGSAP(() => {
		gsap.from('.btIcon', {
			opacity: 0,
			duration: 0.25,
			x: 20,
		});

		const tl = gsap.timeline();
		tl
			.fromTo(
				'.interactionCard',
				{
					opacity: 0,
					scale: 0,
					y: 40,
					x: 40,
					duration: 0.5,
					ease: 'power2.out',
				},
				{
					opacity: 1,
					scale: 1.05,
					transformOrigin: 'bottom right',
					y: -10,
					x: -10,
					duration: 0.25,
					ease: 'power2.inOut',
				}
			)
			.to('.interactionCard', {
				scale: 1,
				y: 0,
				x: 0,
				duration: 0.2,
				delay: 0.15,
			});
	});

	return (
		<div className='h-3/4 w-full flex items-center justify-center px-[5rem]'>
			<div className='w-full h-full'>
				{step == 1 && (
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
								<p className='mt-10 text-2xl font-bold'>
									Your Full Name
								</p>
								<div className='flex justify-start items-center my-3'>
									<input
										className='text-black font-bold bg-transparent font-base text-5xl w-[80%] py-3 outline-none text-left placeholder:font-normal placeholder:text-black/25 caret-blue-700 '
										type='text'
										placeholder='type here'
										onChange={(e) =>
											setData({
												...data,
												name: e.target.value,
											})
										}
									/>
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
				)}
				{step == 2 && (
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
								<p className='mt-10 text-2xl font-bold'>
									Company Name
								</p>
								<div className='flex justify-start items-center my-3'>
									<input
										className='text-black font-bold bg-transparent font-base text-5xl w-[80%] py-3 outline-none text-left placeholder:font-normal placeholder:text-black/25 caret-blue-700 '
										type='text'
										placeholder='type here'
										onChange={(e) => {
											setData({
												...data,
												companyName: e.target.value,
											});
										}}
										value={data.companyName}
									/>
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
				)}
				{step == 3 && (
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
								<p className='mt-10 text-2xl font-bold'>
									Company Website
								</p>
								<div className='flex justify-start items-center my-3'>
									<p className='text-black/15 text-[4rem] font-semibold'>
										https://
									</p>
									<input
										className='text-black font-semibold bg-transparent font-base text-5xl w-[80%] py-3 outline-none text-left placeholder:font-normal placeholder:text-black/25 caret-blue-700 pl-2'
										type='text'
										placeholder=''
										autoFocus
										onChange={(e) => {
											setData({
												...data,
												companyWebsite: e.target.value,
											});
										}}
										value={data.companyWebsite.toLowerCase()}
									/>
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
				)}
			</div>
			<div className='w-full mr-[7rem] h-full flex items-end justify-end flex-col gap-5'>
				<div className='interactionCard bg-black/5 w-[50%] h-auto rounded-xl p-4 flex items-center justify-center flex-col'>
					<div className='imageCard h-[0vh] bg-transparent opacity-0 w-full flex items-center justify-start flex-col'>
						<div className='rounded-full icon opacity-0 aspect-square p-2 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center'>
							<p className='text-white text-lg font-'>
								{data.companyName.charAt(0).toUpperCase()}
							</p>
						</div>
						<div className='flex items-center justify-center flex-col pt-2 pb-1'>
							<p className='companyname opacity-0 font-semibold m-0 p-0 leading-3'>
								{data.companyName}
							</p>
							<p className='companywebsite text-sm text-black/50 opacity-0 m-0 p1-1'>
								{data.companyWebsite}
							</p>
						</div>
					</div>
					<div className='bg-white w-full rounded-xl rounded-b-none flex flex-col items-end px-2 py-5 gap-3'>
						<div className='flex w-full items-center gap-2'>
							<div className='w-10 aspect-square'>
								<img
									src='https://static-asset.inc42.com/rannkly.png'
									alt=''
									className='w-full h-full object-cover rounded-md'
								/>
							</div>
							<p className='bg-black/5 p-2 px-3 text-sm rounded-[1rem] rounded-bl-none'>
								Your full name?
							</p>
						</div>
						{data.name != '' && (
							<div className='flex items-center justify-start flex-row-reverse gap-2'>
								<div className='w-8 aspect-square flex items-center justify-center bg-black/40 rounded-full'>
									<p className='text-white font-semibold'>
										{data.name.charAt(0).toUpperCase()}
									</p>
								</div>
								<p className='bg-black text-white p-2 px-3 text-sm rounded-full'>
									{data.name}
								</p>
							</div>
						)}
						{data.name == '' && (
							<div className='flex w-fit p-3 items-center rounded-[1rem] rounded-br-none justify-start flex-row-reverse gap-1 bg-black/5'>
								<span class='dot'></span>
								<span class='dot'></span>
								<span class='dot'></span>
							</div>
						)}
					</div>
					<p className='bg-white text-center w-full rounded-xl rounded-t-none p-2 text-sm font-light'>
						Powered by{' '}
						<span className='text-black font-semibold'>
							Rep
						</span>
					</p>
				</div>
				<img
					className='btIcon h-[3rem] aspect-square rounded-full shadow-md'
					src='https://static-asset.inc42.com/rannkly.png'
					alt=''
				/>
			</div>
		</div>
	);
};

export default ComponentTwo;
