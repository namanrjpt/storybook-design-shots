import React, {
	useState,
	useEffect,
	useRef,
} from 'react';
import styles from './Button.module.scss';
import { IoAdd } from 'react-icons/io5';
import { MdOutlineCreateNewFolder } from 'react-icons/md';
import { PiArrowBendUpRight } from 'react-icons/pi';
import { RiLoopRightFill } from 'react-icons/ri';
import { IoTextOutline } from 'react-icons/io5';
import { MdOutlineSensors } from 'react-icons/md';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Button = ({
	clickedItem,
	isClicked,
	isHovered,
}) => {
	const [props, setProps] = useState({
		isClicked: isClicked ?? false,
		isHovered: isHovered ?? false,
	});
	const [showMenu, setShowMenu] = useState(
		props.isClicked
	);
	const menuRef = useRef(null);
	const handleClickItem = (item) => {
		clickedItem(item);
		setShowMenu(false);
	};

	useEffect(() => {
		document.addEventListener(
			'keydown',
			(event) => {
				if (event.key === 'Escape') {
					setShowMenu(false);
				}
			}
		);

		return () => {
			document.removeEventListener(
				'keydown',
				(event) => {
					if (event.key === 'Escape') {
						setShowMenu(false);
					}
				}
			);
		};
	}, []);

	useEffect(() => {
		setProps((prevProps) => ({
			...prevProps,
			isHovered: isHovered ?? false,
		}));
	}, [isHovered]);

	useGSAP(
		() => {
			if (showMenu) {
				gsap.fromTo(
					menuRef.current,
					{
						visibility: 'visible',
						opacity: 0,
						y: -50,
						scaleY: 0,
						transformOrigin: 'top',
					},
					{
						opacity: 1,
						y: 0,
						scaleY: 1,
						ease: 'expo.out',
						duration: 0.2,
					}
				);
				gsap.to(menuRef.current.children, {
					opacity: 1,
					y: 0,
					duration: 0,
				});
			} else {
				const items = gsap.utils.toArray(
					menuRef.current.children
				);
				gsap.to(items, {
					opacity: 0,
					y: -20,
					duration: 0.15,
				});
				gsap.to(menuRef.current, {
					opacity: 0,
					y: -50,
					scaleY: 0,
					transformOrigin: 'top',
					ease: 'expo.in',
					duration: 0.2,
				});
			}
		},
		{ dependencies: [showMenu] }
	);

	return (
		<div className={styles.parentButton}>
			<div
				className={
					!showMenu
						? `${styles.button} ${
								props.isHovered
									? styles.buttonHovered
									: ''
						  }`
						: `${styles.button} ${
								styles.buttonActive
						  } ${
								props.isHovered
									? styles.buttonHovered
									: ''
						  }`
				}
				onClick={() => {
					if (showMenu) {
						handleClickItem(null);
					} else {
						setShowMenu(true);
					}
				}}
			>
				<IoAdd />
				<p>Insert</p>
			</div>
			<div
				ref={menuRef}
				className={styles.menu}
			>
				<div
					className={styles.item}
					onClick={() => handleClickItem('New Folder')}
				>
					<MdOutlineCreateNewFolder />
					<p>New Folder</p>
				</div>
				<span></span>
				<div
					className={styles.item}
					onClick={() => handleClickItem('Action')}
				>
					<PiArrowBendUpRight />
					<p>Action</p>
				</div>
				<div
					className={styles.item}
					onClick={() => handleClickItem('Procedure')}
				>
					<RiLoopRightFill />
					<p>Procedure</p>
				</div>
				<div
					className={styles.item}
					onClick={() => handleClickItem('Text')}
				>
					<IoTextOutline />
					<p>Text</p>
				</div>
				<div
					className={styles.item}
					onClick={() => handleClickItem('Sensor')}
				>
					<MdOutlineSensors />
					<p>Sensor</p>
				</div>
			</div>
		</div>
	);
};

export default Button;
