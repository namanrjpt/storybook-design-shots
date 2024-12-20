import React, {
	useState,
	useEffect,
	useRef,
} from 'react';
import styles from './style.module.scss';
import { GoHomeFill } from 'react-icons/go';
import { GoHeart } from 'react-icons/go';
import { LuMessageSquare } from 'react-icons/lu';
import { IoBookmarkOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineWidgets } from 'react-icons/md';
import { IoAdd } from 'react-icons/io5';
import { IoChevronForward } from 'react-icons/io5';
import { IoIosMore } from 'react-icons/io';
import { BsFillHexagonFill } from 'react-icons/bs';
import { PiSidebarSimpleFill } from 'react-icons/pi';
import { PiSlidersHorizontalBold } from 'react-icons/pi';
import { HiOutlineLogout } from 'react-icons/hi';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
	motion,
	AnimatePresence,
} from 'framer-motion';

const menuItems = [
	{
		icon: (
			<GoHomeFill
				size={25}
				className={styles.mainIcon}
			/>
		),
		title: 'Home',
	},
	{
		icon: (
			<div className={styles.heartIcon}>
				<GoHeart size={25} />
				<span>12</span>
			</div>
		),
		title: 'Notifications',
	},
	{
		icon: (
			<LuMessageSquare
				size={25}
				className={styles.mainIcon}
			/>
		),
		title: 'Messages',
	},
	{
		icon: (
			<IoBookmarkOutline
				size={25}
				className={styles.mainIcon}
			/>
		),
		title: 'Bookmarks',
	},
	{
		icon: (
			<FaRegUser
				size={25}
				className={styles.mainIcon}
			/>
		),
		title: 'Profile',
	},
	{
		icon: (
			<MdOutlineWidgets
				size={25}
				className={styles.mainIcon}
			/>
		),
		title: 'Explore',
	},
];

const Sidebar = () => {
	const mainMenuRef = useRef(null);
	const [isMenuClicked, setIsMenuClicked] =
		useState(false);

	const [
		isSidebarCollapsed,
		setIsSidebarCollapsed,
	] = useState(false);

	const [fullyAnimated, setFullyAnimated] =
		useState(false);

	const [hoveredItem, setHoveredItem] =
		useState('');

	useEffect(() => {
		if (isSidebarCollapsed) {
			gsap.to(mainMenuRef.current, {
				width: '6vw',
				duration: 0.5,
			});
		} else {
			gsap.to(mainMenuRef.current, {
				width: '20vw',
				duration: 0.5,
			});
		}
	}, [isSidebarCollapsed]);

	return (
		<div className={styles.main}>
			<AnimatePresence>
				<div
					className={styles.sidebar}
					ref={mainMenuRef}
				>
					<motion.div
						initial={{
							justifyContent: 'space-between',
						}}
						animate={{
							justifyContent: isSidebarCollapsed
								? 'center'
								: 'space-between',
						}}
						className={styles.topBar}
					>
						<AnimatePresence mode='popLayout'>
							{!isSidebarCollapsed && (
								<motion.span
									initial={{
										opacity: 0,
										scale: 0,
									}}
									animate={{
										opacity: 1,
										scale: 1,
									}}
									exit={{
										opacity: 0,
										scale: 0,
									}}
								>
									<BsFillHexagonFill />
								</motion.span>
							)}
						</AnimatePresence>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0,
							}}
							animate={{
								opacity: 1,
								scale: 1,
							}}
							exit={{
								opacity: 0,
								scale: 0,
							}}
							className={styles.sideIcon}
							onClick={() => {
								setIsSidebarCollapsed(
									!isSidebarCollapsed
								);
							}}
						>
							<PiSidebarSimpleFill />
						</motion.div>
					</motion.div>
					<div className={styles.itemWrapper}>
						{menuItems.map((item, index) => (
							<div
								id={item.title}
								key={index}
								onMouseEnter={() =>
									setHoveredItem(item.title)
								}
								onMouseLeave={() => setHoveredItem('')}
								className={styles.item}
							>
								{item.icon}
								<AnimatePresence>
									{!isSidebarCollapsed ? (
										<>
											<motion.p
												initial={{
													opacity: 0,
												}}
												animate={{
													opacity: 1,
												}}
												exit={{
													opacity: 0,
												}}
												transition={{
													ease: 'easeInOut',
												}}
											>
												{item.title}
											</motion.p>
											{hoveredItem === item.title && (
												<IoChevronForward
													className={styles.arrow}
												/>
											)}
										</>
									) : (
										<Tooltip
											anchorSelect={`#${item.title}`}
											style={{
												backgroundColor: '#181818',
												borderRadius: '10px',
											}}
											place='right'
											offset='10'
										>
											<span>{item.title}</span>
										</Tooltip>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
					<div className={styles.accountInfo}>
						<img
							src='https://img.freepik.com/free-photo/young-man-sad-expression_1194-2826.jpg'
							alt=''
						/>
						<AnimatePresence mode='popLayout'>
							{!isSidebarCollapsed && (
								<>
									<motion.div
										initial={{
											opacity: 0,
										}}
										animate={{
											opacity: 1,
										}}
										exit={{
											opacity: 0,
										}}
										className={styles.accountTitleInfo}
									>
										<p>Kohaku</p>
										<p>@kohaku</p>
									</motion.div>
									<motion.div
										initial={{
											opacity: 0,
										}}
										animate={{
											opacity: 1,
										}}
										exit={{
											opacity: 0,
										}}
										className={styles.menuIcon}
									>
										<IoIosMore
											onClick={() => {
												setIsMenuClicked(!isMenuClicked);
											}}
										/>
										{isMenuClicked && (
											<div className={styles.hoverIcons}>
												<div className={styles.icon}>
													<PiSlidersHorizontalBold />
												</div>
												<div className={styles.icon}>
													<HiOutlineLogout />
												</div>
											</div>
										)}
									</motion.div>
								</>
							)}
						</AnimatePresence>
					</div>
					<div className={styles.postButton}>
						<AnimatePresence>
							{isSidebarCollapsed ? (
								<motion.span
									initial={{
										opacity: 0,
										scale: 0,
									}}
									animate={{
										opacity: 1,
										scale: 1,
									}}
									exit={{
										opacity: 0,
										scale: 0,
									}}
								>
									<IoAdd />
								</motion.span>
							) : (
								<motion.p
									initial={{
										opacity: 0,
									}}
									animate={{
										opacity: 1,
									}}
									exit={{
										opacity: 0,
									}}
								>
									Post
								</motion.p>
							)}
						</AnimatePresence>
					</div>
				</div>
			</AnimatePresence>
		</div>
	);
};

export default Sidebar;
