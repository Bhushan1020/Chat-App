
const Conversation = () => {
  const styles = {
    container: {
      display: 'flex',
      gap: '7px',
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderRadius: '4px',
      padding: '8px',
      paddingBottom: '2px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    containerHover: {
      backgroundColor: '#5997b3', // Corresponds to sky-500 in Tailwind
    },
    avatarContainer: {
      position: 'relative',
    },
    avatarOnline: {
      width: '48px',
      borderRadius: '50%',
      overflow: 'hidden',
    },
    avatarImage: {
      width: '100%',
      height: 'auto',
    },
    flexCol: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
    },
    flexBetween: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'space-between',
    },
    userName: {
      fontWeight: 'bold',
      color: '#e5e7eb', // Corresponds to text-gray-200 in Tailwind
    },
    emoji: {
      fontSize: '24px', // Corresponds to text-xl in Tailwind
    },
    divider: {
      margin: '0',
      padding: '0',
      height: '1px',
      backgroundColor: '#e5e7eb',
    },
  };

  return (
    <>
      <div
        className="conversation-container"
        style={styles.container}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.containerHover.backgroundColor}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <div className="avatar online" style={styles.avatarContainer}>
          <div style={styles.avatarOnline}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="user avatar"
              style={styles.avatarImage}
            />
          </div>
        </div>

        <div style={styles.flexCol}>
          <div style={styles.flexBetween}>
            <p style={styles.userName}>John Doe</p>
            <span style={styles.emoji}>🎃</span>
          </div>
        </div>
      </div>

      <div style={styles.divider} />
    </>
  );
};

export default Conversation;
