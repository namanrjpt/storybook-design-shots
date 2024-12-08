import TextComponent from './TextComponent.jsx';

export default {
	title:
		'Dribble Shots/AI TextChat/Text Component',
};

export const TextComp = (args) => (
	<div className='h-dvh w-full flex items-center justify-center'>
		<TextComponent {...args} />
	</div>
);
TextComp.storyName = 'Text Input Box';
