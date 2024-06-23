import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div style={{ marginTop: "auto" }}>
      <BiLogOut
        style={{
          width: "24px", // Equivalent to Tailwind's 'w-6'
          height: "24px", // Equivalent to Tailwind's 'h-6'
          color: "white", // Equivalent to Tailwind's 'text-white'
          cursor: "pointer" // Equivalent to Tailwind's 'cursor-pointer'
        }}
      />
    </div>
  );
};

export default LogoutButton;
