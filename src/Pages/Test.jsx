import React, { useState } from 'react';
import {
	FaTrashAlt,
	FaPlusCircle,
	FaGripVertical,
} from 'react-icons/fa';
import {
	DndProvider,
	useDrag,
	useDrop,
} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Condition Component
const Condition = ({
	condition,
	onDelete,
	index,
	moveCondition,
}) => {
	const [, ref] = useDrag({
		type: 'condition',
		item: { index },
	});

	const [, drop] = useDrop({
		accept: 'condition',
		hover: (draggedItem) => {
			if (draggedItem.index !== index) {
				moveCondition(draggedItem.index, index);
				draggedItem.index = index;
			}
		},
	});

	return (
		<div
			ref={(node) => ref(drop(node))}
			className='flex items-center space-x-4 my-2'
		>
			<FaGripVertical className='cursor-move text-gray-500' />
			<Dropdown
				options={condition.conditionOptions}
				label='Where'
			/>
			<Dropdown
				options={condition.operatorOptions}
				label='Operator'
			/>
			<Dropdown
				options={condition.valueOptions}
				label='Value'
			/>
			<button
				className='text-gray-500 hover:text-red-500'
				onClick={() => onDelete(index)}
			>
				<FaTrashAlt />
			</button>
		</div>
	);
};

// Dropdown Component
const Dropdown = ({ options, label }) => {
	const [selected, setSelected] = useState(
		options[0]
	);

	return (
		<div className='relative w-full'>
			{label && (
				<label className='text-sm text-gray-500 mb-1 block'>
					{label}
				</label>
			)}
			<select
				className='w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
				value={selected}
				onChange={(e) => setSelected(e.target.value)}
			>
				{options.map((option, idx) => (
					<option
						key={idx}
						value={option}
					>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

// ConditionGroup Component
const ConditionGroup = ({
	group,
	onDeleteGroup,
	moveCondition,
}) => {
	const [conditions, setConditions] = useState(
		group.conditions || []
	);
	const [subGroups, setSubGroups] = useState(
		group.subGroups || []
	);

	// Add a condition
	const addCondition = () => {
		setConditions([
			...conditions,
			{
				conditionOptions: [
					'Health score',
					'Next meeting',
					'Last interaction',
				],
				operatorOptions: ['is', 'is not'],
				valueOptions: [
					'Critical',
					'No meeting',
					'No interaction',
				],
			},
		]);
	};

	// Delete a condition
	const deleteCondition = (index) => {
		setConditions(
			conditions.filter((_, i) => i !== index)
		);
	};

	// Add a subgroup
	const addSubGroup = () => {
		setSubGroups([
			...subGroups,
			{ conditions: [] },
		]);
	};

	// Move condition (for drag and drop)
	const moveConditionHandler = (
		fromIndex,
		toIndex
	) => {
		const updatedConditions = [...conditions];
		const [movedItem] = updatedConditions.splice(
			fromIndex,
			1
		);
		updatedConditions.splice(toIndex, 0, movedItem);
		setConditions(updatedConditions);
	};

	return (
		<div className='border-l-4 pl-4 bg-white shadow-md p-4 rounded-lg border border-gray-200 my-2 relative'>
			<div className='absolute top-2 left-[-25px] bg-gray-50 px-2 py-1 text-sm text-gray-500 rounded-full'>
				AND
			</div>

			{conditions.map((condition, index) => (
				<Condition
					key={index}
					index={index}
					condition={condition}
					onDelete={deleteCondition}
					moveCondition={moveConditionHandler}
				/>
			))}

			{subGroups.map((subGroup, index) => (
				<ConditionGroup
					key={index}
					group={subGroup}
					onDeleteGroup={() => setSubGroups([])}
				/>
			))}

			<div className='flex items-center space-x-2 my-4'>
				<AddButton
					label='Add condition'
					onClick={addCondition}
				/>
				<AddButton
					label='Add subgroup'
					onClick={addSubGroup}
				/>
				<button
					className='text-gray-500 hover:text-red-500'
					onClick={onDeleteGroup}
				>
					<FaTrashAlt />
				</button>
			</div>
		</div>
	);
};

// AddButton Component
const AddButton = ({ label, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-sm my-2'
		>
			<FaPlusCircle className='mr-1' /> {label}
		</button>
	);
};

// FilterGroup Component
const FilterGroup = () => {
	const [groups, setGroups] = useState([
		{
			conditions: [
				{
					conditionOptions: [
						'Health score',
						'Next meeting',
						'Last interaction',
					],
					operatorOptions: ['is', 'is not'],
					valueOptions: [
						'Critical',
						'No meeting',
						'No interaction',
					],
				},
			],
		},
	]);

	// Add a top-level group
	const addGroup = () => {
		setGroups([
			...groups,
			{
				conditions: [],
			},
		]);
	};

	// Delete a group
	const deleteGroup = (index) => {
		setGroups(groups.filter((_, i) => i !== index));
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<div className='p-6 bg-gray-50 rounded-lg shadow-md w-full max-w-lg'>
				{groups.map((group, index) => (
					<ConditionGroup
						key={index}
						group={group}
						onDeleteGroup={() => deleteGroup(index)}
					/>
				))}

				<div className='flex items-center space-x-2 my-4'>
					<AddButton
						label='Add group'
						onClick={addGroup}
					/>
				</div>
			</div>
		</DndProvider>
	);
};

// Test Component
function Test() {
	return (
		<div className='min-h-screen bg-gray-100 flex justify-center items-center'>
			<FilterGroup />
		</div>
	);
}

export default Test;
