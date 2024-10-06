import TreeComponent from './Components/Tree/TreeComponent';
import Filter from './Components/Advanced Filter/FinalRender/Filter';
import Error from './Pages/Error';
import Test from './Pages/Test';

export const routes = [
	{
		id: 1,
		path: '/card',
		name: 'Modern Tree Table',
		storyBookSlug:
			'Dribble Shots/Model Tree Table/Final Render',
		component: TreeComponent,
	},
	{
		id: 2,
		path: '/filter',
		name: 'Advanced Filter',
		storyBookSlug:
			'Dribble Shots/Model Tree Table/Advanced Filter',
		component: Filter,
	},
	{
		id: 3,
		path: '/test',
		name: 'Test',
		component: Test,
	},
	{
		id: 4,
		path: '*',
		name: 'Error',
		component: Error,
	},
];
