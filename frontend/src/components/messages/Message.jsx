const Message = () => {
    const chatStyle = {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'flex-start',
      marginBottom: '1rem',
      position: 'relative', // Added for positioning the time
    };
  
    const chatBubbleStyle = {
      color: 'white',
      backgroundColor: '#3B82F6',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      maxWidth: '75%',
      marginTop: '0.5rem',
      position: 'relative', // Added for positioning the time
    };
  
    const timeStyle = {
      position: 'absolute',
      bottom: '-1rem', // Adjust based on your preference
      left: '70%', // Align to the right side of the chat bubble
      fontSize: '0.75rem',
      opacity: '0.5',
    };
  
    return (
      <div className="chat chat-end" style={chatStyle}>
        <div className="chat-bubble" style={chatBubbleStyle}>
          hi whats up?
          <div className="chat-footer" style={timeStyle}>
            12.42
          </div>
        </div>
      </div>
    );
  };
  
  export default Message;
  