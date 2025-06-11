import { Navigate } from "react-router-dom";
import { useAuth } from "../context/LoginContext/LoginContext";
import CircularProgress from "@mui/material/CircularProgress";

const PublicRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading)
    return (
      <div className="loading">
        <CircularProgress color="secondary" />
      </div>
    );

  if (currentUser) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PublicRoute;
