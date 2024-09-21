import Button from './Button';

export default {
	title: 'Model Tree Table/Insert Button',
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	isHovered: false,
	isClicked: false,
};

export const Hover = Template.bind({});
Hover.args = {
	isHovered: true,
};

export const Clicked = Template.bind({});
Clicked.args = {
	isClicked: true,
};
