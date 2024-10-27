import PrimaryCondition from './PrimaryCondition.jsx';

export default {
	title: 'Dribble Shots/Advanced Filter/Condition',
	component: PrimaryCondition,
};

const Template = (args) => (
	<div className='bg-black h-screen w-full flex items-center justify-center'>
		<PrimaryCondition {...args} />
	</div>
);

export const Default = Template.bind({});

Default.args = {
	id: 1,
};
