
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form style={styles.form}>
      <input type='text' placeholder='Search…' style={styles.input} />
      <button type='submit' style={styles.button}>
        <IoSearchSharp style={styles.icon} />
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  input: {
    padding: '8px 16px',
    border: '1px solid #ccc',
    borderRadius: '9999px', // Equivalent to rounded-full
    outline: 'none'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%', // Equivalent to btn-circle
    backgroundColor: '#0ea5e9', // Equivalent to bg-sky-500
    color: '#fff', // Equivalent to text-white
    border: 'none',
    cursor: 'pointer',
    outline: 'none'
  },
  icon: {
    width: '24px',
    height: '24px'
  }
};

export default SearchInput;
