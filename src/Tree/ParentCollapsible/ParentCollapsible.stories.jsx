import ParentCollapse from './ParentCollapse';
import { IoIosFolder } from 'react-icons/io';
import { PiArrowBendUpRight } from 'react-icons/pi';
import { RiLoopRightFill } from 'react-icons/ri';
import { IoTextOutline } from 'react-icons/io5';
import { MdOutlineSensors } from 'react-icons/md';
import { MdCheck } from 'react-icons/md';
import { IoIosFolderOpen } from 'react-icons/io';

const data = [
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
								icon: <PiArrowBendUpRight />,
								isLeaf: true,
							},
							{
								title: 'Action_2',
								key: '0-2-2-2',
								icon: <RiLoopRightFill />,
								isLeaf: true,
							},
							{
								title: 'Action_3',
								key: '0-2-2-3',
								icon: <IoTextOutline />,
								isLeaf: true,
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
];

export default {
	title: 'Model Tree Table/Collapse',
	component: ParentCollapse,
};

const Template = (args) => (
	<div class='h-screen w-full flex justify-center items-center bg-[#D4DAE3]'>
		<ParentCollapse {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	expandedKeys: [],
	data: data,
};
