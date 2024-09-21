import React from 'react';
import { Tree } from 'antd';
import styles from './ParentCollapsible.module.scss';

const ParentCollapsible = ({
	data,
	onDragEnter,
	onDrop,
	expandedKeys,
	onSelect,
	onExpand,
	onDragStart,
	onDragEnd,
	getMovingMouse,
	isCollapsed,
}) => {
	return (
		<Tree
			className='draggable-tree'
			defaultExpandedKeys={expandedKeys}
			draggable
			blockNode
			onDragEnter={onDragEnter}
			onDrop={onDrop}
			onSelect={onSelect}
			onExpand={onExpand}
			treeData={data}
			onDragEnd={onDragEnd}
			onDragOver={(event) => {
				getMovingMouse({
					x: event.event.clientX,
					y: event.event.clientY,
				});
			}}
			onDragStart={onDragStart}
			titleRender={(nodeData) => (
				<div className={styles.parentItem}>
					{nodeData.icon && (
						<span className={styles.icon}>
							{nodeData.icon}
						</span>
					)}
					<span className={styles.text}>
						{nodeData.title}
					</span>
				</div>
			)}
		/>
	);
};

export default ParentCollapsible;
