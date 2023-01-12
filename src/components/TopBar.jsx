import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "green",
      }}
    >
      <h2>My logo</h2>
      <nav style={{ display: "flex", gap: "20px" }}>
        <div onClick={() => navigate("/")}>Home</div>
        <span onClick={() => navigate("/registration")}>Contacts</span>
      </nav>
    </div>
  );
};

export default TopBar;
