
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
	const styles = {
		sidebar: {
			borderRight: '1px solid #94a3b8', // Equivalent to border-slate-500
			padding: '30px', // Equivalent to p-4
			display: 'flex',
			flexDirection: 'column',
		},
		divider: {
			height: '2px', // Assuming this is the divider style
			backgroundColor: '#000000', // Equivalent to border-slate-500
			margin: '10px 5px', // Equivalent to px-3
		},
	};

	return (
		<div style={styles.sidebar}>
			<SearchInput />
			<div style={styles.divider}></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};

export default Sidebar;
