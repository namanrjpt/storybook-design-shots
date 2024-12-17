import TreeComponent from './Components/Tree/TreeComponent';
import Filter from './Components/Advanced Filter/FinalRender/Filter';
import NavbarFinal from './Components/Navigation Bar/FinalRender/NavbarFinal.jsx';
import AIChat from './Components/AI TextChat/Final/Final.jsx';
import UploadModal from './Components/Upload Modal/Final/Final.jsx';

// Internal Imports
import Error from './Pages/Error';
import Final from './Components/Onboarding/Final/Final.jsx';
import Sidebar from './Components/Sidebar/Sidebar/Sidebar.jsx';

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
		id: 4,
		path: '/navigation-bar',
		name: 'Navigation Bar',
		component: NavbarFinal,
	},
	{
		id: 5,
		path: '/ai-chat',
		name: 'AI Chat',
		component: AIChat,
	},
	{
		id: 6,
		path: '/Upload-modal',
		name: 'Upload Modal',
		component: UploadModal,
	},
	{
		id: 6,
		path: '/onboarding-screen',
		name: 'Onboarding Screen',
		component: Final,
	},
	{
		id: 6,
		path: '/sidebar',
		name: 'Sidebar',
		component: Sidebar,
	},
	{
		id: 100,
		path: '*',
		name: 'Error',
		component: Error,
	},
];
