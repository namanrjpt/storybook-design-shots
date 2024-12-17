import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import signupImage from '../../../assets/Onboarding/signup1.svg';

const ComponentOne = ({ moveNext }) => {
	useGSAP(() => {
		gsap.defaults({
			delay: 0.25,
			duration: 0.5,
		});

		gsap.from('.left1', {
			x: 200,
			y: 100,
			scale: 0,
		});
		gsap.from('.left2', {
			x: 300,
			y: 0,
			scale: 0,
		});
		gsap.from('.left3', {
			x: 100,
			y: -100,
			scale: 0,
		});

		gsap.from('.right1', {
			x: -200,
			y: 100,
			scale: 0,
		});

		gsap.from('.right2', {
			x: -300,
			y: 0,
			scale: 0,
		});

		gsap.from('.right3', {
			x: -100,
			y: -100,
			scale: 0,
		});

		gsap.from('.middleComponent', {
			opacity: 0,
			scale: 0.85,
			y: 30,
		});
	});

	const [nextClicked, setNextClicked] =
		useState(false);

	const [email, setEmail] = useState('');

	const validateEmail = () => {
		const re = /\S+@\S+\.\S+/;

		if (re.test(email)) {
			setNextClicked(true);
		} else {
			alert('Please enter a valid email address');
		}
	};

	useGSAP(
		() => {
			if (nextClicked) {
				gsap.to('.component1', {
					opacity: 0,
					scale: 0.9,
					y: 30,
					duration: 0.2,
					onComplete: () => {
						moveNext(1);
					},
				});
			}
		},
		{
			dependencies: [nextClicked],
		}
	);

	return (
		<div className='component1 h-full w-full p-1 flex items-center justify-center'>
			<div className='h-full p-1 w-full relative'>
				<div className='left1 absolute top-[4rem] right-[10rem] rounded-full p-3 w-fit bg-black/5 flex items-center justify-center'>
					<p className='text-xl'>💃</p>
				</div>
				<div className='left2 top-[50%] left-10 absolute rounded-full w-fit flex items-center gap-3'>
					<svg
						width='32'
						height='32'
						viewBox='0 0 32 32'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<rect
							x='0.5'
							y='0.5'
							width='31'
							height='31'
							rx='15.5'
							fill='white'
						></rect>
						<g clip-path='url(#clip0_2330_408)'>
							<path
								d='M24.0003 24.0054H18.817H15.8994L15.9305 20.7143V16.2031L24.0003 24.0054Z'
								fill='url(#paint0_linear_2330_408)'
							></path>
							<path
								d='M22.1846 11.853C22.1691 9.71778 20.493 8 18.429 8H18.398H15.9305H15.8994V11.8209V11.853V15.6738V15.7381H18.398H18.429C20.493 15.7381 22.1691 14.0203 22.2001 11.8851V11.869C22.1846 11.869 22.1846 11.869 22.1846 11.853Z'
								fill='url(#paint1_linear_2330_408)'
							></path>
							<path
								d='M15.5422 8H8V15.8023H15.5422V8Z'
								fill='url(#paint2_linear_2330_408)'
							></path>
							<path
								d='M15.5422 16.2031H8V24.0054H15.5422V16.2031Z'
								fill='url(#paint3_linear_2330_408)'
							></path>
						</g>
						<rect
							x='0.5'
							y='0.5'
							width='31'
							height='31'
							rx='15.5'
							stroke='#F9F9F9'
						></rect>
						<defs>
							<linearGradient
								id='paint0_linear_2330_408'
								x1='15.9'
								y1='20.1045'
								x2='24.0003'
								y2='20.1045'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#715EA9'></stop>
								<stop
									offset='1'
									stop-color='#5673B8'
								></stop>
							</linearGradient>
							<linearGradient
								id='paint1_linear_2330_408'
								x1='15.8994'
								y1='11.8687'
								x2='22.2006'
								y2='11.8687'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#8DCFB6'></stop>
								<stop
									offset='0.51'
									stop-color='#8DD2CF'
								></stop>
								<stop
									offset='1'
									stop-color='#8ED5E4'
								></stop>
							</linearGradient>
							<linearGradient
								id='paint2_linear_2330_408'
								x1='8'
								y1='11.9014'
								x2='15.5422'
								y2='11.9014'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#F3C133'></stop>
								<stop
									offset='0.24'
									stop-color='#EEA638'
								></stop>
								<stop
									offset='0.75'
									stop-color='#E77543'
								></stop>
								<stop
									offset='1'
									stop-color='#E46248'
								></stop>
							</linearGradient>
							<linearGradient
								id='paint3_linear_2330_408'
								x1='8'
								y1='20.1037'
								x2='15.5422'
								y2='20.1037'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#715EA9'></stop>
								<stop
									offset='0.1'
									stop-color='#7A5AA6'
								></stop>
								<stop
									offset='0.7'
									stop-color='#AD459A'
								></stop>
								<stop
									offset='1'
									stop-color='#C23E96'
								></stop>
							</linearGradient>
							<clipPath id='clip0_2330_408'>
								<rect
									width='16'
									height='16'
									fill='white'
									transform='translate(8 8)'
								></rect>
							</clipPath>
						</defs>
					</svg>
					<div className='p-2 px-3 bg-black/5 rounded-full text-sm font-light text-black/90'>
						Hi 👋 How can I help you ?
					</div>
				</div>
				<div className='left3 bottom-[5rem] right-[4rem] absolute rounded-full p-3 w-fit bg-black/5 flex items-center justify-center'>
					<p className='text-xl'>💎</p>
				</div>
			</div>
			<div className='middleComponent h-full p-1 w-full flex items-center justify-start flex-col'>
				<div>
					<img
						src={signupImage}
						alt=''
					/>
				</div>
				<h3 className='text-black font-extrabold text-2xl'>
					Get started with your email
				</h3>
				<input
					className='text-black font-bold bg-transparent font-base text-5xl w-[80%] p-3 outline-none text-center mt-6 placeholder:font-normal caret-blue-700'
					type='text'
					placeholder='type here'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<button
					class='mt-7 px-6 py-3 text-white font-medium rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-md hover:shadow-lg transition duration-300'
					onClick={validateEmail}
				>
					Get Started
				</button>
				<p className='font-light text-sm text-center w-[70%] mt-5'>
					By checking this box, I acknowledge and agree
					to the terms of the on behalf of the Company
					identified above
				</p>
			</div>
			<div className='h-full p-1 w-full relative'>
				<div className='right1 absolute top-0 right-[25rem] rounded-full p-3 w-fit bg-black/5 flex items-center justify-center'>
					<p className='text-xl'>👋</p>
				</div>
				<div className='right2 top-[35%] right-10 absolute rounded-full w-fit flex items-center gap-3'>
					<p className='rounded-full p-3 bg-black/5'>
						I am looking for 🚗
					</p>
					<div className='p-3 px-4 aspect-square bg-black/5 rounded-[100%]'>
						M
					</div>
				</div>
				<div className='right3 bottom-[5rem] right-[20rem] absolute rounded-full p-3 w-fit bg-black/5 flex items-center justify-center'>
					<p className='text-xl'>🎮</p>
				</div>
			</div>
		</div>
	);
};

export default ComponentOne;
