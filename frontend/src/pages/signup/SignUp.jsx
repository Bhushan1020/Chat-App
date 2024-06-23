import GenderCheckbox from "./GenderCheckbox";


const SignUp = () => {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>
          Sign Up <span style={styles.highlight}>ChatApp</span>
        </h1>

        <form>
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              <span style={styles.labelText}>Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              <span style={styles.labelText}>Username</span>
            </label>
            <input type="text" placeholder="johndoe" style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              <span style={styles.labelText}>Password</span>
            </label>
            <input type="password" placeholder="Enter Password" style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              <span style={styles.labelText}>Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" style={styles.input} />
          </div>

          <GenderCheckbox />

          <a href="#" style={styles.link}>
            Already have an account?
          </a>

          <div>
            <button style={styles.button}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height : '350px',
    minWidth: '24rem',
    margin: '0 auto',
  },
  formContainer: {
    width: '100%',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(107, 114, 128, 0.3)',
    backdropFilter: 'blur(10px)',
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: '600',
    textAlign: 'center',
    color: '#D1D5DB',
  },
  highlight: {
    color: '#3B82F6',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  label: {
    padding: '0.5rem 0',
  },
  labelText: {
    fontSize: '1rem',
    color : 'white'
  },
  input: {
    width: '100%',
    height: '1.5rem', // Reduced height by 40%
    backgroundColor: 'black', // Set background color to black
    borderColor: '#D1D5DB',
    borderRadius: '0.375rem',
    padding: '0.5rem',
    color: 'white', // Added white text color for better visibility
  },
  link: {
    fontSize: '0.875rem',
    color: '#3B82F6',
    textDecoration: 'none',
    marginTop: '0.5rem',
    display: 'inline-block',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.5rem',
    border: '1px solid #374151',
    borderRadius: '0.375rem',
    backgroundColor: '#F9FAFB',
  },
};


export default SignUp;
