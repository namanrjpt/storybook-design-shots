import React, { useState } from 'react';
import { Tree } from 'antd';

const initialData = [
	{
		title: 'Procedure_Br',
		key: '0',
		children: [
			{
				title: 'Procedures',
				key: '0-0',
				children: [
					{
						title: 'Configured',
						key: '0-0-0',
						isLeaf: true,
					},
					{
						title: 'Working',
						key: '0-0-1',
						isLeaf: true,
					},
				],
			},
			{
				title: 'Actions',
				key: '0-1',
				children: [
					{
						title: 'Configured',
						key: '0-1-0',
						isLeaf: true,
					},
					{
						title: 'Working',
						key: '0-1-1',
						children: [
							{
								title: 'Action_1',
								key: '0-1-1-0',
								isLeaf: true,
							},
							{
								title: 'Action_2',
								key: '0-1-1-1',
								isLeaf: true,
							},
							{
								title: 'Action_3',
								key: '0-1-1-2',
								isLeaf: true,
							},
						],
					},
				],
			},
			{
				title: 'Advanced',
				key: '0-2',
				isLeaf: true,
			},
			{
				title: 'Disabled',
				key: '0-3',
				isLeaf: true,
			},
		],
	},
];

const App = () => {
	const [gData, setGData] = useState(initialData);
	const [expandedKeys] = useState([
		'0',
		'0-0',
		'0-1',
		'0-1-1',
	]); // Default expanded nodes

	const onDragEnter = (info) => {
		console.log('onDragEnter', info);
	};

	const onDrop = (info) => {
		console.log('onDrop', info);
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

	return (
		<Tree
			className='draggable-tree'
			defaultExpandedKeys={expandedKeys}
			draggable
			blockNode
			onDragEnter={onDragEnter}
			onDrop={onDrop}
			treeData={gData}
		/>
	);
};

export default App;
