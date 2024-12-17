import React, { useState } from 'react';
import { GoHomeFill } from 'react-icons/go';
import { CiHeart } from 'react-icons/ci';
import { LuMessageSquare } from 'react-icons/lu';
import { IoBookmarkOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { LiaShapesSolid } from 'react-icons/lia';
import { IoAdd } from 'react-icons/io5';
import { IoChevronForward } from 'react-icons/io5';
import { IoIosMore } from 'react-icons/io';
import { BsFillHexagonFill } from 'react-icons/bs';
import { PiSidebarSimpleFill } from 'react-icons/pi';

const menuItems = [
	{
		icon: <GoHomeFill />,
		title: 'Home',
	},
	{
		icon: <CiHeart />,
		title: 'Notifications',
	},
	{
		icon: <LuMessageSquare />,
		title: 'Messages',
	},
	{
		icon: <IoBookmarkOutline />,
		title: 'Bookmarks',
	},
	{
		icon: <FaRegUser />,
		title: 'Profile',
	},
	{
		icon: <LiaShapesSolid />,
		title: 'Explore',
	},
];

const Sidebar = () => {
	return (
		<div className='h-dvh w-full flex items-center justify-center'>
			<div className='h-[90%] w-[20%] rounded-3xl p-2 bg-[#2D2D2D]'>
				<div className='border h-full itemsWrapper flex flex-col items-center'>
					<div className='w-full flex justify-between items-center'>
						<BsFillHexagonFill className='text-[2.5rem] text-[#242424]' />
						<div className='p-3 flex items-center justify-center rounded-full bg-[#373737]'>
							<PiSidebarSimpleFill className='text-2xl text-white' />
						</div>
					</div>
					<div className='border flex flex-col py-1 w-full'>
						<div className='rounded-full flex items-center justify-center'>
							<p className='text-white font-semibold'>
								Post
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
