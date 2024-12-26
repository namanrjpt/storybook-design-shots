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
import InfoCard from '../InfoCard/InfoCard';
import { FiSearch } from 'react-icons/fi';
import { FiFilter } from 'react-icons/fi';
import { HiOutlineChevronDown } from 'react-icons/hi2';
import './Map.css';

const Map = () => {
	const position = [
		51.50446014671324, -0.08978672794743331,
	]; // Issue position
	const [data, setData] = useState([
		{
			id: 1,
			issue: 'Issue 1',
			description:
				'Toilet handle in public restroom is broken and needs to be replaced',
			position: [51.506963, -0.092569], // Issue position
			isResolverAssigned: true,
			showRoute: false,
			resolver: {
				resolverId: 'MTC001197',
				position: [51.505393, -0.084784], // Resolver position
				color: 'purple',
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
			description: 'Street light is not working',
			position: [51.504367, -0.094288], // Issue position
			isResolverAssigned: true,
			showRoute: false,
			resolver: {
				resolverId: 'MTC001198',
				position: [51.502754, -0.090127], // Resolver position
				color: 'black',
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
			description: 'Pothole on the road',
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
			description: 'Garbage bin is overflowing',
			position: [51.506568, -0.096743], // Issue position
			isResolverAssigned: false,
			showRoute: false,
			resolver: {
				resolverId: 'MTC001200',
				position: [51.512, -0.097], // Resolver position
				color: 'orange',
				operator: 'Bob Brown',
				description:
					'Bob Brown is a very experienced resolver',
				'Arrival Time': '1:30 PM',
				Vehicle: 'Blue Mitsubishi Triton',
				'Vehicle No': 'BDSI SMR',
			},
		},
	]);

	const [showRoutes, setShowRoutes] = useState({});

	const toggleRoute = (id) => {
		setShowRoutes((prev) => ({
			[id]: !prev[id],
		}));
	};

	const issueIcon = new L.DivIcon({
		className: 'leaflet-div-icon1',
		html: `<div class="w-8 h-8 rounded-full border-[4px] border-white">
                <span class="bg-blue-500 w-full h-full rounded-full block"> 
                </span>
            </div>`,
		iconSize: [30, 30],
		iconAnchor: [15, 15],
	});

	const RoutingMachine = React.memo(
		({ waypoints }) => {
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
								weight: 3,
								opacity: 1,
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
		}
	);

	const calculateRotationAngle = (start, end) => {
		const dx = end[1] - start[1];
		const dy = end[0] - start[0];
		const angle =
			Math.atan2(dy, dx) * (180 / Math.PI);
		return angle;
	};

	return (
		<div
			className='h-full w-full relative'
			id='map'
		>
			<div className='absolute top-4 left-[4rem] z-[10000] w-10 h-10 flex items-center gap-2'>
				<div className='w-auto p-2 flex items-center justify-center bg-white rounded-md shadow-lg gap-4'>
					<FiSearch className='text-black text-xl' />
					<input
						type='text'
						placeholder='Search'
						className='outline-none w-[10rem]'
					/>
				</div>
				<div className='w-auto p-2 px-4 flex items-center justify-center bg-white rounded-md gap-2 shadow-lg'>
					<p>Jobs</p>
					<HiOutlineChevronDown className='text-black text-xl' />
				</div>
				<div className='w-auto p-2 flex items-center justify-center bg-white rounded-md shadow-lg'>
					<FiFilter className='text-black text-xl' />
				</div>
			</div>
			<MapContainer
				center={position}
				zoom={16}
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
							click: () => toggleRoute(item.id),
						}}
					>
						<Popup>
							<InfoCard
								data={item}
								type='issue'
							/>
						</Popup>
					</Marker>
				))}

				{/* Markers for the resolver */}
				{data
					.filter((item) => item.isResolverAssigned)
					.map((item) => {
						const rotationAngle =
							calculateRotationAngle(
								item.resolver.position,
								item.position
							);

						// Create a custom DivIcon for the resolver marker with rotation applied
						const rotatedResolverIcon = new L.DivIcon({
							className: 'leaflet-div-icon-rotated',
							html: `
        					<div
        					  style="
        					    transform: rotate(${rotationAngle}deg);
        					    width: 30px;
        					    height: 30px;
        					    display: flex;
        					    align-items: center;
        					    justify-content: center;
								color: ${item.resolver.color};
        					  "
        					>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="4" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            				<path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path>
          					</svg>
        					</div>
      						`,
							iconSize: [30, 30],
							iconAnchor: [15, 15], // Center of the icon
						});

						return (
							<Marker
								position={item.resolver.position}
								key={item.id}
								icon={rotatedResolverIcon}
								eventHandlers={{
									click: () => toggleRoute(item.id),
								}}
							>
								<Popup
									style={{ zIndex: 1000, width: 'auto' }}
								>
									<InfoCard
										data={item}
										type='Resolver'
									/>
								</Popup>
							</Marker>
						);
					})}

				{/* Routing Machine */}
				{data
					.filter(
						(item) =>
							item.isResolverAssigned &&
							showRoutes[item.id]
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
