import React, {
	useEffect,
	useState,
} from 'react';
import {
	DragDropContext,
	Droppable,
	Draggable,
} from '@hello-pangea/dnd';
import PrimaryCondition from '../PrimaryCondition/PrimaryCondition';
import Group from '../Group/Group';
import styles from './Card.module.scss';
import { MdOutlineAdd } from 'react-icons/md';
import { TfiLoop } from 'react-icons/tfi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Card = () => {
	const [groups, setGroups] = useState([
		{
			type: 'condition',
			id: 1,
			conditions: [
				{
					field: 'Owner',
					operator: 'is',
					value: 'Davon Lane',
				},
			],
		},
		{
			type: 'group',
			id: 2,
			conditions: [
				{
					field: 'Owner',
					operator: 'is',
					value: 'Davon Lane',
				},
			],
		},
	]);

	const [connective, setConnective] =
		useState('AND');
	const [
		isConnectiveActive,
		setIsConnectiveActive,
	] = useState(false);

	useGSAP(
		() => {
			gsap.to('#iconConnective', {
				rotation: connective === 'AND' ? 0 : 180,
				duration: 0.5,
			});
		},
		{
			dependencies: [connective],
		}
	);

	const changeConnective = () => {
		if (connective === 'AND') {
			setConnective('OR');
		} else {
			setConnective('AND');
		}
	};

	const onDelete = (id) => {
		const updatedGroups = groups.filter(
			(group) => group.id !== id
		);
		setGroups(updatedGroups);
	};

	const moveGroup = (fromIndex, toIndex) => {
		const updatedGroups = [...groups];
		const [movedGroup] = updatedGroups.splice(
			fromIndex,
			1
		);
		updatedGroups.splice(toIndex, 0, movedGroup);
		setGroups(updatedGroups);
	};

	const onDragEnd = (result) => {
		if (!result.destination) return;
		moveGroup(
			result.source.index,
			result.destination.index
		);
	};

	useEffect(() => {
		setIsConnectiveActive(groups.length > 1);
	}, [groups]);

	const addCondition = () => {
		setGroups((prevGroups) => [
			...prevGroups,
			{
				type: 'condition',
				id: prevGroups.length + 1,
				conditions: [
					{
						field: 'Owner',
						operator: 'is',
						value: 'Davon Lane',
					},
				],
			},
		]);
	};

	const addGroup = () => {
		setGroups((prevGroups) => [
			...prevGroups,
			{
				type: 'group',
				id: prevGroups.length + 1,
				conditions: [
					{
						field: 'Owner',
						operator: 'is',
						value: 'Davon Lane',
					},
				],
			},
		]);
	};

	const resetGroups = () => {
		setGroups([
			{
				type: 'condition',
				id: 1,
				conditions: [
					{
						field: 'Owner',
						operator: 'is',
						value: 'Davon Lane',
					},
				],
			},
		]);
	};

	return (
		<div className={styles.main}>
			<div className={styles.primaryWrapper}>
				<p>Where:</p>
				<PrimaryCondition onDelete={onDelete} />
			</div>
			<div className={styles.lowerComponents}>
				{isConnectiveActive && (
					<div
						className={
							groups.length > 1
								? `${styles.ANDTag}`
								: `${styles.ANDTag} ${styles.inactive}`
						}
					>
						<div
							className={styles.connective}
							onClick={changeConnective}
						>
							<p>{connective}</p>
							<TfiLoop id='iconConnective' />
						</div>
					</div>
				)}
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId='groups'>
						{(provided) => (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
								className={styles.components}
							>
								{groups.map((group, index) => (
									<Draggable
										key={`group-${group.id}`}
										draggableId={`group-${group.id}`}
										index={index}
									>
										{(provided) => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
											>
												{group.type === 'condition' ? (
													<PrimaryCondition
														key={group.id}
														id={group.id}
														index={index}
														moveCondition={moveGroup}
														onDelete={onDelete}
													/>
												) : (
													<Group
														key={group.id}
														id={group.id}
														onDelete={onDelete}
													/>
												)}
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
			<div className={styles.bottomButtons}>
				<div className={styles.wrapperOne}>
					<div
						className={styles.addCondition}
						onClick={addCondition}
					>
						<MdOutlineAdd />
						<p>Add Condition</p>
					</div>
					<div
						className={styles.addGroup}
						onClick={addGroup}
					>
						<MdOutlineAdd />
						<p>Add Group</p>
					</div>
				</div>
				<div
					className={styles.addGroup}
					onClick={resetGroups}
				>
					<p>Clear All</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
