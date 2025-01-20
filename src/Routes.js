import TreeComponent from './Components/Tree/TreeComponent';
import Filter from './Components/Advanced Filter/FinalRender/Filter';
import NavbarFinal from './Components/Navigation Bar/FinalRender/NavbarFinal.jsx';
import AIChat from './Components/AI TextChat/Final/Final';
import UploadModal from './Components/Upload Modal/Final/Final.jsx';
import KanbanFinal from './Components/Kanban View/Final/KanbanFinal.jsx';
import MapCard from './Components/Map card/Final/FinalMap.jsx';
import SwapFinal from './Components/Swap Animation/Card/Card.jsx';
import MeetingModal from './Components/Meeting Modal/Final/Final.jsx'

// Internal Imports
import Error from './Pages/Error';
import Final from './Components/Onboarding/Final/Final';
import Sidebar from './Components/Sidebar/Final/Sidebar';
import ModernMenu from './Components/Modern Menu/Final/Final';
import ModernFooter from './Components/Modern Footer/Final/Final';

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
		id: 7,
		path: '/onboarding-screen',
		name: 'Onboarding Screen',
		component: Final,
	},
	{
		id: 8,
		path: '/sidebar',
		name: 'Sidebar',
		component: Sidebar,
	},
	{
		id: 9,
		path: '/kanban-view',
		name: 'Kanban View',
		component: KanbanFinal,
	},
	{
		id: 10,
		path: '/map-card',
		name: 'Map Card',
		component: MapCard,
	},
	{
		id: 11,
		path: '/swap-animation',
		name: 'Swap Animation',
		component: SwapFinal,
	},
	{
		id: 12,
		path: '/modern-menu',
		name: 'Modern Menu',
		component: ModernMenu,
	},
	{
		id: 13,
		path: '/modern-footer',
		name: 'Modern Footer',
		component: ModernFooter,
	},
	{
		id: 14,
		path: '/meeting-modal',
		name: 'Meeting Modal',
		component: MeetingModal,
	},
	{
		id: 15,
		path: '/booking-ui',
		name: 'Booking UI',
		component: ModernFooter,
	},
	{
		id: 16,
		path: '/modern-carousel',
		name: 'Modern Carousel',
		component: ModernFooter,
	},
	{
		id: 100,
		path: '*',
		name: 'Error',
		component: Error,
	},
];
