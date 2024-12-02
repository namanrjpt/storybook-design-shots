import React, {
	useEffect,
	useState,
	useRef,
} from 'react';
import {
	DragDropContext,
	Droppable,
	Draggable,
} from '@hello-pangea/dnd';
import styles from './Group.module.scss';
import PrimaryCondition from '../PrimaryCondition/PrimaryCondition';
import { MdOutlineAdd } from 'react-icons/md';
import { TfiLoop } from 'react-icons/tfi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Group = ({ onDelete }) => {
	const iconRef = useRef(null);
	const [conditions, setConditions] = useState([
		{
			id: 1,
			field: 'Owner',
			operator: 'is',
			value: 'Davon Lane',
			position: 0,
		},
	]);

	const [connective, setConnective] =
		useState('AND');
	const [
		isConnectiveActive,
		setIsConnectiveActive,
	] = useState(false);

	const changeConnective = () => {
		setConnective((prev) =>
			prev === 'AND' ? 'OR' : 'AND'
		);
	};

	useGSAP(
		() => {
			gsap.to(iconRef.current, {
				rotation: connective === 'AND' ? 0 : 180,
				duration: 0.5,
			});
		},
		{ dependencies: [connective] }
	);

	const addCondition = () => {
		setConditions((prevConditions) => [
			...prevConditions,
			{
				id: prevConditions.length + 1,
				field: 'Owner',
				operator: 'is',
				value: 'Davon Lane',
				position: prevConditions.length,
			},
		]);
	};

	const removeCondition = (index) => {
		setConditions((prevConditions) =>
			prevConditions.filter((_, i) => i !== index)
		);
	};

	const onDragEnd = (result) => {
		if (!result.destination) return;

		const items = Array.from(conditions);
		const [reorderedItem] = items.splice(
			result.source.index,
			1
		);
		items.splice(
			result.destination.index,
			0,
			reorderedItem
		);

		setConditions(
			items.map((item, index) => ({
				...item,
				position: index,
			}))
		);
	};

	useEffect(() => {
		setIsConnectiveActive(conditions.length > 1);
	}, [conditions]);

	return (
		<div className={styles.main}>
			<p>Any of the following are true:</p>
			<div className={styles.conditionWrapper}>
				<div className={styles.primaryWrapper}>
					<p>Where:</p>
					<PrimaryCondition
						condition={conditions[0]}
						onDelete={() => removeCondition(index)}
					/>
				</div>
				<div
					className={
						conditions.length >= 1
							? `${styles.connectiveWrapper}`
							: `${styles.connectiveWrapper} ${styles.hide}`
					}
				>
					<div
						className={
							conditions.length == 1
								? `${styles.ANDTag} ${styles.hideBorder}`
								: conditions.length > 1
								? `${styles.ANDTag}`
								: `${styles.ANDTag} ${styles.inactive}`
						}
					>
						<div
							className={styles.connective}
							onClick={changeConnective}
						>
							<p>{connective}</p>
							<TfiLoop ref={iconRef} />
						</div>
					</div>
					<DragDropContext onDragEnd={onDragEnd}>
						<Droppable droppableId='conditions'>
							{(provided) => (
								<div
									ref={provided.innerRef}
									{...provided.droppableProps}
									className={styles.conditions}
								>
									{conditions
										.sort((a, b) => a.position - b.position)
										.map((condition, index) => (
											<Draggable
												key={`condition-${condition.id}`}
												draggableId={`condition-${condition.id}`}
												index={index}
											>
												{(provided) => (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
													>
														<PrimaryCondition
															condition={condition}
															onDelete={() =>
																removeCondition(index)
															}
														/>
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
			</div>
			<div className={styles.bottomButtons}>
				<div className={styles.wrapperOne}>
					<div
						className={styles.addCondition}
						onClick={addCondition}
					>
						<MdOutlineAdd />
						<p>Add condition</p>
					</div>
					<div className={styles.addGroup}>
						<MdOutlineAdd />
						<p>Add subgroup</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Group;
