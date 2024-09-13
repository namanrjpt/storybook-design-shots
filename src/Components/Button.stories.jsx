import React from 'react';
import Button from './Button';

export default {
	title: 'Button',
	component: Button,
};

const Template = (args) => <Button {...args} />;

const argFunction = (name) => {
	const object = {
		variant: name.toLowerCase(),
		text: name,
		padding: '10px 20px',
	};
	return object;
};

export const Success = Template.bind({});
Success.args = argFunction('Success');

export const Danger = Template.bind({});
Danger.args = argFunction('Danger');

export const Warning = Template.bind({});
Warning.args = argFunction('Warning');

export const Failed = Template.bind({});
Failed.args = argFunction('Failed');
