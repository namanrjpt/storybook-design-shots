import Group from './Group.jsx';

export default {
	title: 'Dribble Shots/Advanced Filter/Group',
	component: Group,
};

const Template = (args) => (
	<div className='bg-[#131313] h-screen w-full flex items-center justify-center'>
		<Group {...args} />;
	</div>
);

export const Default = Template.bind({});

Default.args = {
	conditions: [
		{
			id: 1,
			type: 'condition',
		},
	],
};
