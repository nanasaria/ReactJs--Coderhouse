import { Navigate } from "react-router-dom";
import { useAuth } from "../context/LoginContext/LoginContext";

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;
