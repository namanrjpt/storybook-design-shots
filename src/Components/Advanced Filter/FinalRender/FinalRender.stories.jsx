import Filter from './Filter.jsx';

export default {
	title:
		'Dribble Shots/Advanced Filter/FinalRender',
	component: Filter,
};
const Template = (args) => <Filter {...args} />;
export const Default = Template.bind({});

Default.args = {
	groups: [
		{
			id: 1,
			type: 'condition',
		},
	],
};
Default.parameters = {
	docs: {
		source: {
			code:
				'<Filter groups={[{id: 1,type: "condition",}]} />',
		},
	},
};
