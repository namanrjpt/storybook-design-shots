import React from 'react';
import { Tree } from 'antd';
import styles from './ParentCollapsible.module.scss';
import '../custom.css';

const ParentCollapsible = ({
	data,
	onDragEnter,
	onDrop,
	expandedKeys,
	onSelect,
	onExpand,
	onDragStart,
	onDragEnd,
	// getMovingMouse,
	// isCollapsed,
	onDragOver,
	onDragLeave,
}) => {
	return (
		<Tree
			defaultExpandedKeys={expandedKeys}
			draggable
			blockNode
			onDragEnter={onDragEnter}
			onDrop={onDrop}
			onSelect={onSelect}
			onExpand={onExpand}
			treeData={data}
			onDragEnd={onDragEnd}
			onDragLeave={onDragLeave}
			onDragOver={onDragOver}
			onDragStart={onDragStart}
			titleRender={(nodeData) => (
				<div
					className={styles.parentItem}
					data-key={nodeData.key}
				>
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
