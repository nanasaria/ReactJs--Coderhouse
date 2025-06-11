import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/auth/auth";
import { useAuth } from "../../../context/LoginContext/LoginContext";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Logout.css";

function Logout() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Erro ao sair: " + error.message);
    }
  };

  return (
    <div className="div-logout">
      {currentUser && (
        <button className="btn-logout" onClick={handleLogout}>
          <LogoutIcon></LogoutIcon>
        </button>
      )}
    </div>
  );
}

export default Logout;
