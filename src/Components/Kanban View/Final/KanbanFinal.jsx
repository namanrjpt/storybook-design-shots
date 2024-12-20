import React, {
	useState,
	useEffect,
} from 'react';
import styles from './styles.module.scss';
import {
	DragDropContext,
	Droppable,
	Draggable,
} from 'react-beautiful-dnd';
import { BsFillKanbanFill } from 'react-icons/bs';
import { LuFilter } from 'react-icons/lu';
import { TiArrowUnsorted } from 'react-icons/ti';
import { LuSettings } from 'react-icons/lu';
import { MdAdd } from 'react-icons/md';
import { GoNorthStar } from 'react-icons/go';
import SingleCard from '../Single/SingleComp';
import { IoChevronDownCircle } from 'react-icons/io5';
import { MdOutlineDragIndicator } from 'react-icons/md';
import { motion } from 'framer-motion';

const KanbanFinal = () => {
	const [data, setData] = useState([
		{
			type: 1,
			id: 1,
			icon: <GoNorthStar />,
			title: 'Card 1',
			amount: 100,
			location: 'Location 1',
			rating: 4,
			checked: 2,
			comments: 10,
			timePublished: '2h',
		},
		{
			type: 3,
			id: 2,
			icon: <GoNorthStar />,
			title: 'Card 2',
			amount: 200,
			location: 'Location 2',
			rating: 5,
			checked: 3,
			comments: 20,
			timePublished: '3h',
		},
	]);

	const [columns, setColumns] = useState([
		{
			id: 1,
			title: 'New',
			count: 1,
			icon: 'blue',
		},
		{
			id: 2,
			title: 'Virtual Demo',
			count: 3,
			icon: 'purple',
		},
		{
			id: 3,
			title: 'Proposal',
			count: 5,
			icon: 'green',
		},
		{
			id: 4,
			title: 'Negotiation',
			count: 1,
			icon: 'red',
		},
		{
			id: 5,
			title: 'Closed',
			count: 10,
			icon: 'yellow',
		},
	]);

	useEffect(() => {
		const newColumns = columns.map((column) => ({
			...column,
			count: data.filter(
				(card) => card.type === column.id
			).length,
		}));

		setColumns(newColumns);
	}, [data]);

	const onDragEnd = (result) => {
		const { source, destination } = result;

		// If the destination is null, return early
		if (!destination) return;

		// If the source and destination are the same, no need to reorder
		if (
			source.droppableId ===
				destination.droppableId &&
			source.index === destination.index
		)
			return;

		// Find the card being dragged
		const movedCardIndex = data.findIndex(
			(card) =>
				card.id === parseInt(result.draggableId)
		);
		const movedCard = data[movedCardIndex];

		// Remove the card from the source column (without modifying the order of other cards)
		const updatedData = [...data];
		updatedData.splice(movedCardIndex, 1); // Remove the card

		// Check if we're moving to another column
		if (
			source.droppableId !== destination.droppableId
		) {
			// Update the card type for the new column
			movedCard.type = parseInt(
				destination.droppableId
			);

			// Add the card back to the new column at the correct index
			updatedData.splice(
				destination.index,
				0,
				movedCard
			);
		} else {
			// If moving within the same column, just reorder the card
			updatedData.splice(
				destination.index,
				0,
				movedCard
			);
		}

		// Update the state with the new order of cards
		setData(updatedData);
	};

	const addNewEntry = (type) => {
		const newEntry = {
			type: type,
			id: data.length + 1,
			icon: <GoNorthStar />,
			title: `Card ${data.length + 1}`,
			amount: 100,
			location: 'Location 1',
			rating: 4,
			checked: 2,
			comments: 10,
			timePublished: '2h',
		};

		setData([...data, newEntry]);
	};
	return (
		<div className={styles.main}>
			<div className={styles.topBar}>
				<div className={styles.topControl}>
					<div className='flex items-center gap-3'>
						<div className='flex items-center justify-center bg-black/50 rounded-lg px-5 py-2 gap-3'>
							<BsFillKanbanFill color='white' />
							<p className='text-white text-sm'>
								Kanban View
							</p>
						</div>
						<div className='flex items-center justify-center bg-black/50 rounded-lg px-5 py-2 gap-3'>
							<LuFilter color='white' />
							<p className='text-white text-sm'>
								Filter
							</p>
						</div>
						<div className='flex items-center justify-center bg-black/50 rounded-lg px-5 py-2 gap-3'>
							<TiArrowUnsorted color='white' />
							<p className='text-white text-sm'>Sort</p>
						</div>
					</div>
					<div className='flex items-center gap-3'>
						<div className='flex items-center justify-center bg-black/50 rounded-lg px-5 py-2 gap-3'>
							<LuSettings color='white' />
							<p className='text-white text-sm'>
								Settings
							</p>
						</div>
						<div className='flex items-center justify-center bg-black/50 rounded-lg px-5 py-2 gap-3'>
							<MdAdd color='white' />
							<p className='text-white text-sm'>
								Import / Export
							</p>
						</div>
					</div>
				</div>
				<div className={styles.headerWrapper}>
					{columns.map((column) => (
						<div className={styles.header}>
							<div className={styles.headerLeft}>
								<IoChevronDownCircle
									color={column.icon}
								/>
								<p>{column.title}</p>
								<span>{column.count}</span>
							</div>
							<div className={styles.headerright}>
								<MdAdd />
								<MdOutlineDragIndicator />
							</div>
						</div>
					))}
				</div>
			</div>
			<DragDropContext onDragEnd={onDragEnd}>
				<div className={styles.kanbanWrapper}>
					{columns.map((column) => (
						<Droppable
							key={column.id}
							droppableId={column.id.toString()}
						>
							{(provided) => (
								<div
									className={styles.columnmain}
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									<div className={styles.cardWrapper}>
										{data
											.filter(
												(info) => info.type === column.id
											)
											.map((card, index) => (
												<Draggable
													key={card.id}
													draggableId={card.id.toString()}
													index={index}
												>
													{(provided, snapshot) => (
														<div
															ref={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
															className={`${styles.card} ${
																snapshot.isDragging
																	? styles.dragging
																	: ''
															}`}
														>
															<SingleCard data={card} />
														</div>
													)}
												</Draggable>
											))}
										{provided.placeholder}
										<div
											className='flex items-center pl-3 hover:cursor-pointer gap-2 mb-2'
											onClick={() => addNewEntry(column.id)}
										>
											<MdAdd className='text-white/80 text-xl' />
											<p className='text-base font-light text-white/80'>
												Add Entry
											</p>
										</div>
									</div>
								</div>
							)}
						</Droppable>
					))}
				</div>
			</DragDropContext>
		</div>
	);
};

export default KanbanFinal;
