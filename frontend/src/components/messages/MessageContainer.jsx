import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = false;

  return (
    <div style={{ minWidth: '450px', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      { noChatSelected ? <NoChatSelected /> : (
        <>
          <div style={{ backgroundColor: '#2c3e50', padding: '4px', marginBottom: '2px' }}>
            <span style={{ color: '#ffffff' }}>To:</span> <span style={{ color: '#ddcfcf', fontWeight: 'bold' }}>John Doe</span>
          </div>
          <div style={{ flex: '1' }}>
            <Messages />
          </div>
          <div style={{ position: 'sticky', bottom: '0' }}>
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {

  const noChatSelectedStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  };

  const textStyle = {
    padding: '0 16px',
    textAlign: 'center',
    color: '#d1d5db',
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px'
  };

  const iconStyle = {
    fontSize: '3rem'
  };

  return (
    <div style={noChatSelectedStyle}>
      <div style={textStyle}>
        <p>Welcome 👋 Bhushan ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages style={iconStyle} />
      </div>
    </div>
  );
};

export default MessageContainer;
