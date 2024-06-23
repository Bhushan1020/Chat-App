
const styles = {
  flex: {
    display: 'flex',
  },
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    margin: '0 8px',
  },
  label: {
    display: 'flex',
    gap: '8px',
    cursor: 'pointer',
  },
  labelText: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#f3f4f5', // Tailwind's text-slate-900
  },
  checkbox: {
    borderColor: '#9ea1a5', // Tailwind's border-slate-900
  },
};

const GenderCheckbox = () => {
  return (
    <div style={styles.flex}>
      <div style={styles.formControl}>
        <label style={styles.label}>
          <span style={styles.labelText}>Male</span>
          <input type='checkbox' style={styles.checkbox} />
        </label>
      </div>
      <div style={styles.formControl}>
        <label style={styles.label}>
          <span style={styles.labelText}>Female</span>
          <input type='checkbox' style={styles.checkbox} />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
