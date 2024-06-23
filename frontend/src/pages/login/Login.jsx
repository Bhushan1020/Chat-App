
const Login = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '24rem',
      margin: '0 auto',
    },
    card: {
      width: '80%',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      backdropFilter: 'blur(10px)',
    },
    title: {
      fontSize: '1.875rem',
      fontWeight: '600',
      textAlign: 'center',
      color: '#D1D5DB',
    },
    titleHighlight: {
      color: '#3B82F6',
    },
    form: {
      width: '100%',
    },
    label: {
      padding: '0.5rem',
    },
    labelText: {
      fontSize: '1rem',
      color:'white',
    },
    input: {
      width: '100%',
      height: '2rem', // Reduced height by 20% from original (2.5rem to 2rem)
      backgroundColor: '#000000', // Set background color to black
      color: '#FFFFFF', // Set text color to white for better contrast
      borderColor: '#E5E7EB',
      borderWidth: '1px',
      borderRadius: '0.25rem',
      padding: '0.5rem',
    },
    gap: {
      marginBottom: '1rem', // Added gap between fields
    },
    link: {
      fontSize: '0.875rem',
      color: '#2563EB',
      textDecoration: 'underline',
      marginTop: '0.5rem',
      display: 'inline-block',
    },
    button: {
      width: '100%',
      height: '2.5rem',
      backgroundColor: '#3B82F6',
      color: '#FFFFFF',
      fontSize: '1rem',
      fontWeight: '600',
      marginTop: '0.5rem',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          Login
          <span style={styles.titleHighlight}> ChatApp</span>
        </h1>

        <form style={styles.form}>
          <div style={styles.gap}>
            <label style={styles.label}>
              <span style={styles.labelText}>Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter username'
              style={styles.input}
            />
          </div>

          <div style={styles.gap}>
            <label style={styles.label}>
              <span style={styles.labelText}>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              style={styles.input}
            />
          </div>
          <a href='#' style={styles.link}>
            {"Don't"} have an account?
          </a>

          <div>
            <button type='submit' style={styles.button}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
