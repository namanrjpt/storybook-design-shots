import Button from './Button';

export default {
	title:
		'Dribble Shots/Model Tree Table/Insert Button',
	component: Button,
};

const Template = (args) => (
	<div class='h-screen w-full bg-[#D4DAE3] flex justify-center items-center'>
		<Button {...args} />
	</div>
);

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
