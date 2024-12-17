import React, {
	useEffect,
	useState,
	useRef,
} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './style.css';
import {
	motion,
	AnimatePresence,
} from 'motion/react';

import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import ComponentFour from './ComponentFour';
import ComponentFive from './ComponentFive';

const Screen = () => {
	const progressRef = useRef(null);
	const [progress, setProgress] = useState(10);
	const [step, setStep] = useState(3);

	const handleNext = (step) => {
		setStep(step + 1);
	};

	useGSAP(
		() => {
			gsap.to(progressRef.current, {
				width: `${progress}%`,
				duration: 0.5,
			});
		},
		{
			dependencies: [progress],
		}
	);

	useEffect(() => {
		if (step == 1) {
			setProgress(0);
		} else if (step == 2) {
			setProgress(20);
		} else if (step == 3) {
			setProgress(40);
		} else if (step == 4) {
			setProgress(60);
		} else if (step == 5) {
			setProgress(100);
		}
	}, [step]);

	const RenderComponent = () => {
		let component = null;
		if (step === 1) {
			component = (
				<ComponentOne moveNext={handleNext} />
			);
		} else if (step === 2) {
			component = (
				<ComponentTwo moveNext={handleNext} />
			);
		} else if (step === 3) {
			component = (
				<ComponentThree moveNext={handleNext} />
			);
		} else if (step === 4) {
			component = (
				<ComponentFour moveNext={handleNext} />
			);
		} else if (step === 5) {
			component = (
				<ComponentFive moveNext={handleNext} />
			);
		}

		return (
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, y: 30 }} // Start with fade-in and down position
					animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
					exit={{ opacity: 0, y: -30 }} // Fade out and move up
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
					}} // Smooth transition
					className='h-full w-full'
				>
					{component}
				</motion.div>
			</AnimatePresence>
		);
	};

	return (
		<div className='h-full w-full flex flex-col bg-white pt-1'>
			<div
				ref={progressRef}
				className='w-100 h-1 bg-blue-500'
			/>
			<div className='main flex flex-col h-full w-full px-[5rem]'>
				<div className='w-full header p-10 flex justify-between items-start'>
					<img
						onClick={() => {
							handleNext(0);
						}}
						className='h-[5rem] aspect-square'
						src='https://static-asset.inc42.com/rannkly.png'
						alt=''
					/>
					<button className='border border-blue-500 text-black rounded-full px-5 py-2'>
						Help
					</button>
				</div>
				<div className='h-full w-full'>
					<RenderComponent />
				</div>
				<div className='w-full header p-10 flex justify-between items-start'>
					<p className='text-black font-light'>
						@2022 Rep.
					</p>
					<div className='flex gap-7 items-center text-black'>
						<p className='font-light'>Privacy Policy</p>
						<p className='font-light'>
							Terms of Service
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Screen;
