import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar"


const Home = () => {
	const containerStyle = {
		display: 'flex',
		height: '450px', // Default to the small screen height
		borderRadius: '2px', // Assuming 'rounded-lg' translates to a border radius of 8px
		overflow: 'hidden',
		backgroundColor: 'rgba(128, 128, 128, 0.4)', // Gray with 40% opacity
		backdropFilter: 'blur(10px)', // Approximation for 'backdrop-blur-lg'
	};

	const containerStyleMedium = {
		height: '550px', // Medium screen height
	};

	return (
		<div
			style={{ ...containerStyle, '@media (min-width: 768px)': containerStyleMedium }}
		>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};


export default Home
