import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function ProtectedRoute({ children }) {

    const { token } = useContext(AuthContext);
    const location = useLocation();

    if (!token) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return children;

}
