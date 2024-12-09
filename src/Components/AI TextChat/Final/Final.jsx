import React, {
	useState,
	useEffect,
} from 'react';
import TextComponent from '../TextComponent/TextComponent';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TbSnowflake } from 'react-icons/tb';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import { RiRobot2Line } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { CgSpinner } from 'react-icons/cg';

const Final = () => {
	const [text, setText] = useState('');
	const [isStepsHidden, setIsStepsHidden] =
		useState(false);

	const [reset, setReset] = useState(false);

	const killAllAnimations = async () => {
		return new Promise((resolve) => {
			gsap.killTweensOf('.spinner2');
			gsap.killTweensOf('.icon2');
			gsap.killTweensOf('.spinner3');
			gsap.killTweensOf('.result');
			gsap.killTweensOf('.icon3');
			gsap.killTweensOf('.text2');
			gsap.killTweensOf('.animWrapper');
			gsap.killTweensOf('.stepsWrapper');
			gsap.killTweensOf('.main');
			resolve();
		});
	};

	useGSAP(
		() => {
			if (text.length > 0) {
				const tl = gsap.timeline();

				gsap.set('.animWrapper', { opacity: 1 });
				gsap.set('.main', { height: '7rem' });
				gsap.set('.result', { opacity: 0 });
				gsap.set('.stepsWrapper', { opacity: 0 });
				gsap.set('.spinner2', {
					scale: 1,
					opacity: 1,
				});
				gsap.set('.icon2', { scale: 0, opacity: 0 });
				gsap.set('.item3', { opacity: 0 });
				gsap.set('.spinner3', {
					scale: 1,
					opacity: 1,
				});
				gsap.set('.icon3', { scale: 0, opacity: 0 });
				gsap.set('.text2', { opacity: 0, x: -10 });

				tl
					.to('.main', {
						duration: 0.3,
						bottom: 0,
						height: '20rem',
					})
					.to('.result', {
						duration: 0.75,
						opacity: 1,
					})
					.to('.stepsWrapper', {
						duration: 0.5,
						opacity: 1,
					})
					.to('.spinner2', {
						duration: 0.5,
						delay: 1,
						scale: 0,
						opacity: 0,
						ease: 'power2.out',
					})
					.to('.icon2', {
						duration: 0.5,
						opacity: 1,
						scale: 1,
						ease: 'back.out(1.7)',
					})
					.to('.item3', {
						duration: 0.5,
						opacity: 1,
					})
					.to('.spinner3', {
						duration: 0.5,
						delay: 1,
						scale: 0,
						opacity: 0,
						ease: 'power2.out',
					})
					.to('.icon3', {
						duration: 0.5,
						opacity: 1,
						scale: 1,
						ease: 'back.out(1.7)',
					})
					.to('.text2', {
						delay: -2.5,
						duration: 0.5,
						x: 0,
						opacity: 1,
						ease: 'power2.out',
					})
					.to('.animWrapper', {
						delay: 1,
						duration: 0.5,
						opacity: 0,
						ease: 'power2.out',
					})
					.to('.main', {
						duration: 0.75,
						height: '7rem',
						onComplete: () => {
							setReset(true);
						},
					});
			}
		},
		{
			dependencies: [text],
		}
	);

	useGSAP(
		async () => {
			if (isStepsHidden) {
				await killAllAnimations();
				gsap.to('.stepsWrapper', {
					duration: 0.5,
					opacity: 0,
				});
				gsap.to('.main', {
					duration: 0.5,
					bottom: 0,
					height: '7rem',
					onComplete: () => {
						setReset(true);
					},
				});
			}
		},
		{
			dependencies: [isStepsHidden],
		}
	);

	useEffect(() => {
		if (isStepsHidden) {
			setReset(true);
		}
	}, [isStepsHidden]);

	const submitQuery = (text) => {
		setText(text);
	};

	return (
		<div className='h-dvh w-full flex items-center justify-center flex-col'>
			<div className='main relative min-h-[7rem] bottom-0 p-7 rounded-2xl bg-white w-[35%] flex flex-col overflow-hidden'>
				<div
					className={
						text.length > 0
							? 'animWrapper transition-all'
							: 'h-0 transition-all'
					}
				>
					<div className='result w-full flex opacity-0 justify-between items-center px-2'>
						<div className='flex items-center gap-3'>
							<TbSnowflake size={30} />
							<p className='text-black font-semibold'>
								Results
							</p>
						</div>
						<div
							className='flex items-center gap-3 text-black/60 cursor-pointer'
							onClick={() =>
								setIsStepsHidden((prev) => !prev)
							}
						>
							<FaWandMagicSparkles size={20} />
							<p>Hide Steps</p>
						</div>
					</div>
					<div className='stepsWrapper opacity-0 flex flex-col gap-3 mt-4 w-full border rounded-lg border-black/10 p-3 bg-black/5'>
						<div className='flex items-center gap-3'>
							<FiSearch size={20} />
							<p>Searching examples and definitions</p>
						</div>
						<div className='flex items-center gap-3'>
							<div className='relative w-5 h-5'>
								{/* Icon 1 */}
								<RiRobot2Line
									size={20}
									className='icon2 opacity-0 scale-0 absolute inset-0'
								/>
								{/* Spinner */}
								<CgSpinner
									size={20}
									className='spinner2 animate-spin text-[#82be21] absolute inset-0'
								/>
							</div>
							<p className='text1'>
								Considering sources
							</p>
						</div>
						<div className='item3 opacity-0 flex items-center gap-3'>
							<div className='relative w-5 h-5'>
								<IoCodeSlashOutline
									size={20}
									className='icon3 opacity-0 scale-0 absolute inset-0'
								/>
								<CgSpinner
									size={20}
									className='spinner3 animate-spin text-[#82be21] absolute inset-0'
								/>
							</div>
							<p className='text2 opacity-0 translate-x-[-10px]'>
								Writing and running query
							</p>
						</div>
					</div>
				</div>
				<TextComponent
					submitQuery={submitQuery}
					reset={reset}
				/>
			</div>
		</div>
	);
};

export default Final;
