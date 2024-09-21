import React from 'react';

const ChildCollapsible = ({ nodeData }) => {
	return (
		<div>
			{nodeData.title}
			{nodeData.children &&
				nodeData.children.map((child) => (
					<ChildCollapsible
						key={child.key}
						nodeData={child}
					/>
				))}
		</div>
	);
};

export default ChildCollapsible;
