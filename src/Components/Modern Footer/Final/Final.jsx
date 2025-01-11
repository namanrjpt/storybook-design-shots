import React, { useRef, useEffect } from 'react';
import './styles.scss';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import gsap from 'gsap';

const Final = () => {
	const brandText = useRef(null);
	const headerRef = useRef(null);
	const buttonGroupRef = useRef(null);
	const socialIconsRef = useRef(null);
	const menuItemsRef1 = useRef(null);
	const menuItemsRef2 = useRef(null);
	const menuItemsRef3 = useRef(null);

	useEffect(() => {
		if (brandText.current) {
			// Wrap each letter in <span> for animation
			const textContent =
				brandText.current.innerText;
			const wrappedLetters = textContent
				.split('')
				.map((letter) => `<span>${letter}</span>`)
				.join('');
			brandText.current.innerHTML = wrappedLetters;

			// GSAP Timeline for synchronized animations
			const tl = gsap.timeline({ delay: 0.5 });

			tl
				.fromTo(
					headerRef.current,
					{ y: 100, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.55,
						ease: 'power4.out',
					}
				)
				.fromTo(
					buttonGroupRef.current,
					{ y: 100, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.55,
						ease: 'power4.out',
					},
					'-=0.2'
				)
				.fromTo(
					socialIconsRef.current,
					{
						y: 100,
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: 0.55,
						ease: 'power4.out',
					},
					'-=0.2'
				);

			gsap.fromTo(
				menuItemsRef1.current.querySelectorAll('h3'),
				{
					x: 30,
					opacity: 0,
				},
				{
					x: 0,
					delay: 0.5,
					opacity: 1,
					duration: 0.55,
					stagger: 0.1,
				}
			);

			gsap.fromTo(
				menuItemsRef1.current.querySelectorAll('a'),
				{
					x: 20,
					opacity: 0,
				},
				{
					x: 0,
					delay: 0.5,
					opacity: 1,
					duration: 0.55,
					stagger: 0.1,
				}
			);

			gsap.fromTo(
				menuItemsRef2.current.querySelectorAll('h3'),
				{
					x: 30,
					opacity: 0,
				},
				{
					x: 0,
					delay: 0.5,
					opacity: 1,
					duration: 0.55,
					stagger: 0.1,
				}
			);

			gsap.fromTo(
				menuItemsRef2.current.querySelectorAll('a'),
				{
					x: 20,
					opacity: 0,
				},
				{
					x: 0,
					delay: 0.5,
					opacity: 1,
					duration: 0.55,
					stagger: 0.1,
				}
			);

			gsap.fromTo(
				menuItemsRef3.current.querySelectorAll('h3'),
				{
					x: 30,
					opacity: 0,
				},
				{
					x: 0,
					delay: 0.5,
					opacity: 1,
					duration: 0.55,
					stagger: 0.1,
				}
			);

			gsap.fromTo(
				menuItemsRef3.current.querySelectorAll('a'),
				{
					x: 20,
					opacity: 0,
				},
				{
					x: 0,
					delay: 0.5,
					opacity: 1,
					duration: 0.55,
					stagger: 0.1,
				}
			);

			tl.fromTo(
				brandText.current.querySelectorAll('span'),
				{ y: 1000, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.45,
					stagger: 0.04,
					ease: 'power4.out',
				}
			);
		}
	}, []);

	return (
		<div className='min-h-screen w-full bg-black px-10 py-5 flex flex-col'>
			<div className='basis-[40%] flex justify-start items-start w-full gap-4 mt-10'>
				<div className='w-[30%] mr-[10%] flex flex-col gap-7 px-5'>
					<h2
						className='text-white text-xl'
						ref={headerRef}
					>
						Hire Different <sup>TM</sup>
					</h2>
					<div
						className='flex gap-2 items-center'
						ref={buttonGroupRef}
					>
						<input
							type='text'
							placeholder='Enter your email'
							className='w-[70%] h-10 bg-transparent border border-white/40 text-white px-2 rounded-md'
						/>
						<button className='h-10 w-[30%] bg-[#EAFA35] text-black font-semibold rounded-md line-clamp-1 transition-all active:outline-none active:bg-white active:scale-90'>
							<p className='line-clamp-1'>
								Join for free
							</p>
						</button>
					</div>
					<div
						className='flex items-center gap-4'
						ref={socialIconsRef}
					>
						<div className='rounded-full border border-white text-white text-[1.5rem] p-4 hover:bg-white hover:text-black transition-all cursor-pointer'>
							<FaInstagram />
						</div>
						<div className='rounded-full border border-white text-white text-[1.5rem] p-4 hover:bg-white hover:text-black transition-all cursor-pointer'>
							<FaXTwitter />
						</div>
						<div className='rounded-full border border-white text-white text-[1.5rem] p-4 hover:bg-white hover:text-black transition-all cursor-pointer'>
							<IoMail />
						</div>
					</div>
				</div>
				<div
					className='w-auto px-[5%] menu-section'
					ref={menuItemsRef1}
				>
					<h3 className='text-white text-xl mb-6'>
						Find Work
					</h3>
					<div className='flex flex-col gap-3 items-start'>
						<a
							className='text-white/50 text-[1.25rem] item1'
							href='#'
						>
							Explore Jobs
						</a>
						<a
							className='text-white/50 text-[1.25rem] item1'
							href='#'
						>
							Discover Companies
						</a>
						<a
							className='text-white/50 text-[1.25rem] item1'
							href='#'
						>
							Browser Collections
						</a>
					</div>
				</div>
				<div
					className='w-auto px-[5%] menu-section'
					ref={menuItemsRef2}
				>
					<h3 className='text-white text-xl mb-6'>
						Find People
					</h3>
					<div className='flex flex-col gap-3 items-start'>
						<a
							className='text-white/50 text-[1.25rem] item2'
							href='#'
						>
							Learn More
						</a>
						<a
							className='text-white/50 text-[1.25rem] item2'
							href='#'
						>
							Sign Up
						</a>
					</div>
				</div>
				<div
					className='w-auto px-[5%] menu-section'
					ref={menuItemsRef3}
				>
					<h3 className='text-white text-xl mb-6'>
						Company
					</h3>
					<div className='flex flex-col gap-3 items-start'>
						<a
							className='text-white/50 text-[1.25rem] item3'
							href='#'
						>
							About Us
						</a>
						<a
							className='text-white/50 text-[1.25rem] item3'
							href='#'
						>
							Careers
						</a>
						<a
							className='text-white/50 text-[1.25rem] item3'
							href='#'
						>
							Contact
						</a>
					</div>
				</div>
			</div>
			<div className='h-auto flex justify-center items-center mt-10 overflow-hidden py-5'>
				<span
					className='flex items-center justify-center brandText text-white leading-none text-center w-full text-[28vw]'
					ref={brandText}
				>
					parallel
				</span>
			</div>
			<div className='flex w-full gap-3 items-center text-white/40 mt-9 justify-center'>
				<p>
					2025 Parallel Group, Inc All Rights Reserved
				</p>
				<a
					className='hover:text-white hover:cursor-pointer transition-all'
					href='#'
				>
					Terms of Service
				</a>
				<a
					className='hover:text-white hover:cursor-pointer transition-all'
					href='#'
				>
					Privacy Policy
				</a>
			</div>
		</div>
	);
};

export default Final;
