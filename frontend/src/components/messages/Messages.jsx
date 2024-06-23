import Message from "./Message";

const Messages = () => {
    const messageStyle = {
      padding: '0.75rem',
      flex: '1',
      overflow: 'auto',
      maxHeight: '400px', 
    };
  
    return (
      
      <div style={messageStyle}>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      
    );
  };
  
  export default Messages;
  