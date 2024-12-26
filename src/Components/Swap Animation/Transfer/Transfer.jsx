import React, { useState } from 'react';
import { RxCountdownTimer } from 'react-icons/rx';
import { BiSliderAlt } from 'react-icons/bi';
import { HiMiniChevronDown } from 'react-icons/hi2';

const icons = {
	bitcoin:
		'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
	matic:
		'https://static.crypto.com/token/icons/polygon/color_icon.png',
	avax:
		'https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=040',
	tether:
		'https://cdn-icons-png.flaticon.com/512/825/825508.png',
};

const Transfer = () => {
	return (
		<div className='h-full w-full py-8 px-8'>
			<div className='flex justify-between items-center w-full'>
				<h3 className='text-white text-3xl font-semibold'>
					Transfer
				</h3>
				<div className='flex items-center gap-2'>
					<div className='h-10 w-10 border border-white/30 rounded-full flex items-center justify-center text-white text-base'>
						<RxCountdownTimer />
					</div>
					<div className='h-10 w-10 border border-white/30 rounded-full flex items-center justify-center text-white text-base'>
						<BiSliderAlt />
					</div>
				</div>
			</div>
			<div className='w-full flex justify-end items-center gap-2 py-4 px-2'>
				<p className='text-white/40 text-sm'>
					Balance : 123454
				</p>
				<span className='inline-block text-sm text-white hover:cursor-pointer'>
					MAX
				</span>
			</div>
			<div className='relative w-full p-1'>
				<div className='flex items-stretch border border-white/10 rounded-xl'>
					<div className='w-[60%] flex flex-col px-2 py-1'>
						<p className='text-white/50 font-light text-sm p-2 pb-0'>
							Pay:
						</p>
						<input
							placeholder='0.00'
							type='number'
							className='bg-transparent outline-none text-white w-full p-2 text-2xl placeholder-white placeholder:font-normal'
							onWheel={(e) => e.target.blur()}
						/>
					</div>
					<div className='flex items-center rounded-[.75rem] bg-white/15 w-[40%] m-3'>
						<div className='relative w-8 h-8 mx-2'>
							<img
								src={icons.tether}
								alt=''
								className='w-full h-full'
							/>
							<img
								src={icons.bitcoin}
								alt=''
								className='absolute w-4 h-4 top-[55%] right-[-0.2rem]'
							/>
						</div>
						<div className='flex flex-col ml-3 w-[45%]'>
							<p className='text-white text-sm'>USDT</p>
							<p className='text-white/50 text-xs'>
								BNB
							</p>
						</div>
						<HiMiniChevronDown className='text-white' />
					</div>
				</div>
				<div className='flex mt-3 items-stretch border border-white/10 rounded-xl'>
					<div className='w-[60%] flex flex-col px-2 py-1'>
						<p className='text-white/50 font-light text-sm p-2 pb-0'>
							Receive:
						</p>
						<input
							placeholder='0.00'
							type='number'
							className='bg-transparent outline-none text-white w-full p-2 text-2xl placeholder-white placeholder:font-normal'
							onWheel={(e) => e.target.blur()}
						/>
					</div>
					<div className='flex items-center rounded-[.75rem] bg-white/15 w-[40%] m-3'>
						<div className='relative w-8 h-8 mx-2'>
							<img
								src={icons.tether}
								alt=''
								className='w-full h-full'
							/>
							<img
								src={icons.bitcoin}
								alt=''
								className='absolute w-4 h-4 top-[55%] right-[-0.2rem]'
							/>
						</div>
						<div className='flex flex-col ml-3 w-[45%]'>
							<p className='text-white text-sm'>USDT</p>
							<p className='text-white/50 text-xs'>
								BNB
							</p>
						</div>
						<HiMiniChevronDown className='text-white' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Transfer;
