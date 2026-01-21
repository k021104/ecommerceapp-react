import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

export default function ProtectedRoute({ children }) {

    const { token } = useContext(AuthContext);
    //   const { user } = useContext(AuthContext);
    const location = useLocation();

    //   if (!token) {
    //     return (
    //       <div style={{ 
    //         textAlign: "center",
    //         marginTop: "120px"
    //       }}>
    //         <h2>Access Denied ❌</h2>
    //         <p>You must login to view this page.</p>

    //         <Link 
    //           to="/login"
    //           style={{
    //             padding: "10px 18px",
    //             background: "#1976d2",
    //             color: "white",
    //             borderRadius: "6px",
    //             textDecoration: "none"
    //           }}
    //         >
    //           Go to Login
    //         </Link>
    //       </div>
    //     );
    //   }

    //   return children;

    if (!token) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return children;

}
