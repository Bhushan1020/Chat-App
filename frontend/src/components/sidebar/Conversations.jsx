import Conversation from './Conversation';

const Conversations = () => {
	return (
		<div>
			<style>
				{`
					.container {
						padding-top: 0.5rem; 
						display: flex;
						flex-direction: column;
						overflow: auto;
						max-height: 400px; 
					}
				`}
			</style>
			<div className='container'>
				<Conversation />
				<Conversation />
				<Conversation />
				<Conversation />
			</div>
		</div>
	);
};

export default Conversations;
