import React, {
	useState,
	useEffect,
} from 'react';
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaRegCircleDot } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Map = () => {
	const position = [51.505, -0.09]; // Issue position
	const [data, setData] = useState([
		{
			id: 1,
			issue: 'Issue 1',
			position: [51.506963, -0.092569], // Issue position
			isResolverAssigned: true,
			showRoute: false,
			resolver: {
				resolverId: 'MTC001197',
				position: [51.505393, -0.084784], // Resolver position
				color: 'red',
				operator: 'John Doe',
				description:
					'John Doe is a very experienced resolver',
				'Arrival Time': '12:45 PM',
				Vehicle: 'Black Toyota Hilux',
				'Vehicle No': 'BDSI SMR',
			},
		},
		{
			id: 2,
			issue: 'Issue 2',
			position: [51.504367, -0.094288], // Issue position
			isResolverAssigned: true,
			showRoute: false,
			resolver: {
				resolverId: 'MTC001198',
				position: [51.502754, -0.090127], // Resolver position
				color: 'red',
				operator: 'Jane Smith',
				description:
					'Jane Smith is a very experienced resolver',
				'Arrival Time': '1:00 PM',
				Vehicle: 'White Ford Ranger',
				'Vehicle No': 'BDSI SMR',
			},
		},
		{
			id: 3,
			issue: 'Issue 3',
			position: [51.504346, -0.082057], // Issue position
			isResolverAssigned: true,
			showRoute: false,
			resolver: {
				resolverId: 'MTC001199',
				position: [51.50436, -0.087274], // Resolver position
				color: 'red',
				operator: 'Alice Johnson',
				description:
					'Alice Johnson is a very experienced resolver',
				'Arrival Time': '1:15 PM',
				Vehicle: 'Red Nissan Navara',
				'Vehicle No': 'BDSI SMR',
			},
		},
		{
			id: 4,
			issue: 'Issue 4',
			position: [51.506568, -0.096743], // Issue position
			isResolverAssigned: false,
			showRoute: false,
			resolver: {
				resolverId: 'MTC001200',
				position: [51.512, -0.097], // Resolver position
				color: 'red',
				operator: 'Bob Brown',
				description:
					'Bob Brown is a very experienced resolver',
				'Arrival Time': '1:30 PM',
				Vehicle: 'Blue Mitsubishi Triton',
				'Vehicle No': 'BDSI SMR',
			},
		},
	]);

	const issueIcon = new L.DivIcon({
		className: 'leaflet-div-icon1',
		html: `<div class="w-8 h-8 rounded-full border-[4px] border-white">
                <span class="bg-blue-500 w-full h-full rounded-full block"> 
                </span>
            </div>`,
		iconSize: [30, 30],
		iconAnchor: [15, 15],
	});

	const resolverIcon = new L.DivIcon({
		className: 'leaflet-div-icon1',
		html: `
        <div class="w-8 h-8 text-red-500 flex items-center justify-center">
        <svg stroke="currentColor" fill="currentcolor" stroke-width="4" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path>
        </svg>
        </div>`,
		iconSize: [30, 30],
		iconAnchor: [15, 15],
	});

	const RoutingMachine = ({ waypoints }) => {
		const map = useMap();

		useEffect(() => {
			if (!map) return;

			const routingControl = L.Routing.control({
				waypoints: waypoints.map((point) =>
					L.latLng(point)
				),
				routeWhileDragging: true,
				createMarker: () => null,
				show: false,
				lineOptions: {
					styles: [
						{
							color: '#0088ff',
							weight: 4,
							opacity: 0.7,
							dashArray: '8, 8',
						},
					],
				},
				fitSelectedRoutes: false,
				showAlternatives: false,
				addWaypoints: false,
				draggableWaypoints: false,
			}).addTo(map);

			// Hide routing container
			const style = document.createElement('style');
			style.textContent =
				'.leaflet-routing-container { display: none !important; }';
			document.head.appendChild(style);

			return () => {
				map.removeControl(routingControl);
				document.head.removeChild(style);
			};
		}, [map, waypoints]);

		return null;
	};

	return (
		<div
			className='h-full w-full'
			id='map'
		>
			<MapContainer
				center={position}
				zoom={18}
				scrollWheelZoom={true}
				style={{ height: '100%', width: '100%' }}
			>
				<TileLayer
					url='https://api.mapbox.com/styles/v1/adityasingh18/cm4zsgsl8008w01qydxancqgy/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRpdHlhc2luZ2gxOCIsImEiOiJjbTR6c2NxdG8xZDJkMmpzZnJmZ3ZieTdmIn0.rDk6sofshMAkIZosEfVF3g'
					attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
				/>

				{/* Markers for the issue */}
				{data.map((item) => (
					<Marker
						position={item.position}
						key={item.id}
						icon={issueIcon}
						eventHandlers={{
							click: () => {
								setData((prevData) =>
									prevData.map((dataItem) =>
										dataItem.id === item.id
											? {
													...dataItem,
													showRoute: !dataItem.showRoute,
											  }
											: dataItem
									)
								);
							},
						}}
					>
						<Popup>
							<div className='flex flex-col'>
								<div className='flex items-center justify-between'>
									<h1 className='text-xl font-bold'>
										{item.issue}
									</h1>
									<motion.div
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										exit={{ scale: 0 }}
										transition={{ duration: 0.5 }}
										className='bg-green-500 p-2 rounded-full'
									>
										<RiSendPlaneFill size={20} />
									</motion.div>
								</div>
								<div className='flex items-center justify-between'>
									<div className='flex items-center'>
										<FaRegCircleDot size={20} />
										<h1 className='text-lg font-bold'>
											{item.resolver.operator}
										</h1>
									</div>
									<div className='flex items-center'>
										<h1 className='text-lg font-bold'>
											{item.resolver['Arrival Time']}
										</h1>
									</div>
								</div>
							</div>
						</Popup>
					</Marker>
				))}

				{/* Markers for the resolver */}
				{data
					.filter((item) => item.isResolverAssigned)
					.map((item) => (
						<Marker
							position={item.resolver.position}
							key={item.id}
							icon={resolverIcon}
							onClick={() => {
								setData((prevData) =>
									prevData.map((data) =>
										data.id === item.id
											? {
													...data,
													showRoute: !data.showRoute,
											  }
											: data
									)
								);
							}}
						>
							<Popup>
								<div className='flex flex-col'>
									<div className='flex items-center justify-between'>
										<h1 className='text-xl font-bold'>
											{item.issue}
										</h1>
										<motion.div
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											exit={{ scale: 0 }}
											transition={{ duration: 0.5 }}
											className='bg-green-500 p-2 rounded-full'
										>
											<RiSendPlaneFill size={20} />
										</motion.div>
									</div>
									<div className='flex items-center justify-between'>
										<div className='flex items-center'>
											<FaRegCircleDot size={20} />
											<h1 className='text-lg font-bold'>
												{item.resolver.operator}
											</h1>
										</div>
										<div className='flex items-center'>
											<h1 className='text-lg font-bold'>
												{item.resolver['Arrival Time']}
											</h1>
										</div>
									</div>
								</div>
							</Popup>
						</Marker>
					))}

				{/* Routing Machine */}
				{data
					.filter(
						(item) =>
							item.isResolverAssigned && item.showRoute
					)
					.map((item) => (
						<RoutingMachine
							key={item.id}
							waypoints={[
								item.position,
								item.resolver.position,
							]}
						/>
					))}
			</MapContainer>
		</div>
	);
};

export default Map;
