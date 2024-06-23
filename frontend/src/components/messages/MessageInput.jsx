import { BsSend } from 'react-icons/bs';

const MessageInput = () => {
  return (
    <form style={{ padding: '2px 4px', margin: '5px 5px' }}>
      <div style={{ position: 'relative', width: '100%' }}>
        <input
          type='text'
          style={{
            border: '2px solid #3f29e2',
            fontSize: '0.875rem',
            borderRadius: '1.375rem',
            width: '100%',
            padding: '10px',
            color: '#0f0e0e',
            boxSizing: 'border-box',
          }}
          placeholder='Send a message'
        />
        <button
          type='submit'
          style={{
            border: '2px solid #3f29e2',
            borderRadius: "0.6rem",
            position: 'absolute',
            top: '0     ',
            bottom: '0',
            right: '0',
            display: 'flex',
            alignItems: 'center',
            paddingEnd: '12px',
          }}
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
