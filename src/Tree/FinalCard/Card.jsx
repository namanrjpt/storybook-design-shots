import React, {
	useEffect,
	useState,
	useRef,
	useCallback,
} from 'react';
import Button from '../Button/Button.jsx';
import styles from './Card.module.scss';
import Search from '../Search/Search.jsx';
import { IoIosFolder } from 'react-icons/io';
import { PiArrowBendUpRight } from 'react-icons/pi';
import { RiLoopRightFill } from 'react-icons/ri';
import { IoTextOutline } from 'react-icons/io5';
import { MdOutlineSensors } from 'react-icons/md';
import { MdCheck } from 'react-icons/md';
import { IoIosFolderOpen } from 'react-icons/io';
import { FcProcess } from 'react-icons/fc';
import ParentCollapsible from '../ParentCollapsible/ParentCollapse.jsx';
import '../custom.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Card = () => {
	const grabber = useRef(null);
	const borderRef = useRef(null);
	const [expandedKeys, setExpandedKeys] = useState(
		[]
	);

	const [initialData, setInitialData] = useState([
		{
			title: 'Procedure_Br',
			key: '0',
			type: 'folder',
			icon: <IoIosFolder />,
			originalIcon: <IoIosFolder />,
			expandedIcon: <IoIosFolderOpen />,
			children: [
				{
					title: 'Procedures',
					key: '0-1',
					icon: <PiArrowBendUpRight />,
					originalIcon: <PiArrowBendUpRight />,
					children: [
						{
							title: 'Configured',
							key: '0-1-1',
							icon: <RiLoopRightFill />,
							originalIcon: <RiLoopRightFill />,
							isLeaf: true,
						},
						{
							title: 'Working',
							key: '0-1-2',
							icon: <IoTextOutline />,
							originalIcon: <IoTextOutline />,
							isLeaf: true,
						},
					],
				},
				{
					title: 'Actions',
					key: '0-2',
					icon: <MdOutlineSensors />,
					originalIcon: <MdOutlineSensors />,
					children: [
						{
							title: 'Configured',
							key: '0-2-1',
							icon: <MdCheck />,
							originalIcon: <MdCheck />,
							isLeaf: true,
						},
						{
							title: 'Working',
							key: '0-2-2',
							type: 'folder',
							icon: <IoIosFolder />,
							originalIcon: <IoIosFolder />,
							expandedIcon: <IoIosFolderOpen />,
							children: [
								{
									title: 'Action_1',
									key: '0-2-2-1',
									icon: <FcProcess />,
									isLeaf: true,
									isWorking: true,
								},
								{
									title: 'Action_2',
									key: '0-2-2-2',
									icon: <FcProcess />,
									isWorking: true,
									isLeaf: true,
								},
								{
									title: 'Action_3',
									key: '0-2-2-3',
									icon: <FcProcess />,
									isLeaf: true,
									isWorking: true,
								},
							],
						},
					],
				},
				{
					title: 'Advanced',
					key: '0-3',
					icon: <MdOutlineSensors />,
					isLeaf: true,
				},
				{
					title: 'Disabled',
					key: '0-4',
					icon: <MdCheck />,
					isLeaf: true,
				},
			],
		},
	]);

	const [gData, setGData] = useState(initialData);

	const [isDragging, setIsDragging] =
		useState(false);

	const [grabberPosition, setGrabberPosition] =
		useState({ x: 0, y: 0 });

	const [isNewItem, setIsNewItem] =
		useState(false);
	const [selectedItem, setSelectedItem] =
		useState(null);

	const [newItem, setNewItem] = useState({
		icon: '',
		type: null,
		text: 'HII',
	});

	useEffect(() => {
		setGData(initialData);
		setIsNewItem(false);
	}, [initialData]);

	const getMountData = (data) => {
		const getRandomKey = () => {
			return Math.floor(Math.random() * 1000);
		};
		const newItem = {
			title: data.text,
			key: getRandomKey(),
			isLeaf: true,
			icon: data.icon,
			originalIcon: data.icon,
			expandedIcon:
				data.icon.type.name === 'IoIosFolder' ? (
					<IoIosFolderOpen />
				) : (
					data.icon
				),
			children: [],
		};

		setInitialData([
			{
				...newItem,
			},
			...initialData,
		]);
	};

	const whatClicked = (type) => {
		if (type == null) return;
		setIsNewItem(true);

		switch (type) {
			case 'New Folder':
				setNewItem({
					icon: <IoIosFolder />,
					type: 'New Folder',
					text: 'New Folder',
				});
				break;

			case 'Text':
				setNewItem({
					icon: <IoTextOutline />,
					type: 'Text',
					text: 'Text',
				});
				break;

			case 'Procedure':
				setNewItem({
					icon: <RiLoopRightFill />,
					type: 'Procedure',
					text: 'Procedure',
				});
				break;

			case 'Action':
				setNewItem({
					icon: <FcProcess />,
					type: 'Action',
					text: 'Action',
				});
				break;

			case 'Sensor':
				setNewItem({
					icon: <MdOutlineSensors />,
					type: 'Sensor',
					text: 'Sensor',
				});
				break;
		}
	};

	const getMovingMouse = ({ x, y }) => {
		setGrabberPosition({
			x: x,
			y: y,
		});
	};

	useEffect(() => {
		document.addEventListener(
			'mousemove',
			handleMouseMove
		);
		return () => {
			document.removeEventListener(
				'mousemove',
				handleMouseMove
			);
		};
	}, []);

	const removeDragger = () => {
		gsap.to(grabber.current, {
			scale: 0,
			display: 'none',
			duration: 0.25,
		});
	};

	useGSAP(
		() => {
			if (isDragging && grabber.current) {
				gsap.to(grabber.current, {
					display: 'flex',
					top:
						grabberPosition.y -
						grabber.current.clientHeight / 2,
					left:
						grabberPosition.x -
						grabber.current.clientWidth / 2,
					ease: 'power1',
					duration: 0.25,
					scale: 1,
					stagger: 1,
				});
			} else {
				gsap.to(grabber.current, {
					display: 'none',
					scale: 0,
					top:
						grabberPosition.y -
						grabber.current.clientHeight / 2,
					left:
						grabberPosition.x -
						grabber.current.clientWidth / 2,
					duration: 0.25,
					stagger: 1,
				});
			}
		},
		{ dependencies: [grabberPosition, isDragging] }
	);

	const CreateNewItem = useCallback(
		({ data, onMount }) => {
			const { type, icon, text } = data;
			const container = useRef(null);
			const [itemData, setItemData] = useState({
				type: type,
				icon: icon,
				text: text,
			});

			// Item Delete & Enter Event Listener
			useEffect(() => {
				document.addEventListener('keydown', (e) => {
					if (
						e.key === 'Escape' ||
						e.key === 'Delete'
					) {
						setItemData({
							type: '',
							icon: '',
							text: '',
						});
						setIsNewItem(false);
					}
					if (e.key === 'Enter') {
						if (itemData.text != '') {
							onMount(itemData);
							container.current.className = `${styles.inputWrapper}`;
							container.current.blur();
						}
					}
				});

				return () => {
					document.removeEventListener(
						'keydown',
						(e) => {
							if (
								e.key === 'Escape' ||
								e.key === 'Delete'
							) {
								setItemData({
									type: '',
									icon: '',
									text: '',
								});
								setIsNewItem(false);
							}
							if (e.key === 'Enter') {
								if (itemData.text != '') {
									onMount(itemData);
									container.current.className = `${styles.inputWrapper}`;
									container.current.blur();
								}
							}
						}
					);
				};
			}, [itemData]);

			useEffect(() => {
				console.log(data);
				container.current.focus();
				container.current.className = `${styles.inputWrapper} ${styles.border}`;
			}, []);

			return (
				<div ref={container}>
					{itemData.icon}
					<input
						type='text'
						required
						onChange={(e) =>
							setItemData({
								type: newItem.type,
								icon: newItem.icon,
								text: e.target.value,
							})
						}
						value={itemData.text}
					/>
					<MdCheck
						onClick={() => {
							if (itemData.text != '') {
								onMount(itemData);
								container.current.className = `${styles.inputWrapper}`;
								container.current.blur();
							}
						}}
					/>
				</div>
			);
		},
		[newItem]
	);

	const onDrop = (info) => {
		removeDragger();
		setIsDragging(false);
		borderRef.current.style.border =
			'1px solid transparent';

		const dropKey = info.node.key;
		const dragKey = info.dragNode.key;

		const dropPos = info.node.pos.split('-');
		const dropPosition =
			info.dropPosition -
			Number(dropPos[dropPos.length - 1]);

		const loop = (data, key, callback) => {
			for (let i = 0; i < data.length; i++) {
				if (data[i].key === key) {
					return callback(data[i], i, data);
				}
				if (data[i].children) {
					loop(data[i].children, key, callback);
				}
			}
		};

		const data = [...gData];
		let dragObj;
		loop(data, dragKey, (item, index, arr) => {
			arr.splice(index, 1);
			dragObj = item;
		});

		if (!info.dropToGap) {
			loop(data, dropKey, (item) => {
				item.children = item.children || [];
				item.children.unshift(dragObj);
				delete item.isLeaf; // Remove isLeaf property to make it collapsible
			});
		} else {
			let ar = [];
			let i;
			loop(data, dropKey, (_item, index, arr) => {
				ar = arr;
				i = index;
			});
			if (dropPosition === -1) {
				ar.splice(i, 0, dragObj);
			} else {
				ar.splice(i + 1, 0, dragObj);
			}
		}
		setGData(data);
	};

	const onExpand = (
		expandedKeys,
		{ expanded, node }
	) => {
		const data = [...gData];

		const loop = (data, key, callback) => {
			for (let i = 0; i < data.length; i++) {
				if (data[i].key === key) {
					return callback(data[i], i, data);
				}
				if (data[i].children) {
					loop(data[i].children, key, callback);
				}
			}
		};

		loop(data, node.key, (item) => {
			item.icon = expandedKeys.includes(item.key)
				? item.expandedIcon ?? item.icon
				: item.originalIcon ?? item.icon;
		});

		setGData(data);
		setExpandedKeys(expandedKeys);
	};

	const handleItemDrag = (event) => {
		// Set the drag image
		const img = new Image();
		img.src =
			'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='; // 1x1 transparent pixel
		event.event.dataTransfer.setDragImage(
			img,
			0,
			0
		);

		// Set the drop effect and effect allowed
		event.event.dataTransfer.dropEffect = 'move';
		event.event.dataTransfer.effectAllowed = 'move';
		setIsDragging(true); // Start dragging
		setGrabberPosition({
			x: event.event.clientX,
			y: event.event.clientY,
		});
		setSelectedItem({
			title: event.node.title,
			icon: event.node.icon,
		});
	};

	const handleDragEnd = (e) => {
		setSelectedItem(null);
		setIsDragging(false);
		borderRef.current.style.border =
			'1px solid transparent';
	};

	const handleMouseMove = (event) => {
		setGrabberPosition({
			x: event.clientX,
			y: event.clientY,
		});
	};

	const handleDragEnter = (event) => {
		if (event.node?.type == 'folder') {
		}
		const innerDiv = document.querySelector(
			'div[data-key="' + event.node.key + '"]'
		);

		const outerDiv = innerDiv.closest(
			'.ant-tree-treenode-draggable'
		);

		if (event.node.type != 'folder') {
			return;
		}

		if (borderRef.current)
			borderRef.current.style.border =
				'1px solid transparent';

		borderRef.current = outerDiv;
		borderRef.current.style.border =
			'1px solid #1890ff';
	};

	const handleDragOver = (event) => {
		getMovingMouse({
			x: event.event.clientX,
			y: event.event.clientY,
		});
	};

	// Not Necessary
	// const handleDragLeave = (event) => {
	// 	console.log('drag leave', event);
	// };

	const getParentNode = (treeData, key) => {
		let parentNode = null;
		let parentCount = 0;

		const traverse = (nodes, parent) => {
			for (let node of nodes) {
				if (node.key === key) {
					if (parentNode === null) {
						parentNode = parent;
					} else {
						parentCount++;
					}
				}
				if (node.children) {
					traverse(node.children, node);
				}
			}
		};

		traverse(treeData, null);
		if (parentCount > 1) {
			return null;
		}
		return parentNode;
	};

	return (
		<div className='bg-[#D4DAE3] h-screen w-full flex items-center justify-center'>
			<div className={styles.card}>
				<div className={styles.upperNavigation}>
					<Button clickedItem={whatClicked} />
					<Search />
				</div>
				<div className={styles.fileInfo}>
					<p>Files</p>
					<p>180</p>
				</div>

				{isNewItem && (
					<CreateNewItem
						data={newItem}
						onMount={getMountData}
					/>
				)}

				<ParentCollapsible
					data={gData}
					onDrop={onDrop}
					expandedKeys={expandedKeys}
					onExpand={onExpand}
					onDragEnter={handleDragEnter}
					onDragOver={handleDragOver}
					onDragEnd={handleDragEnd}
					// onDragLeave={handleDragLeave}
					onDragStart={handleItemDrag}
				/>

				<div
					ref={grabber}
					className={styles.grabberDiv}
					style={{
						position: 'absolute',
						zIndex: 1000,
					}}
				>
					{selectedItem?.icon}
					<p>{selectedItem?.title}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
