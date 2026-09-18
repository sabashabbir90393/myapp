import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { verifyToken } from "../services/api";

function ProtectedRoute() {
  const [checking, setChecking] = useState(true);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setValid(false);
        setChecking(false);
        return;
      }

      try {
        await verifyToken(token);
        setValid(true);
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setValid(false);
      } finally {
        setChecking(false);
      }
    };

    checkToken();
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-white">Verifying session...</p>
      </div>
    );
  }

  if (!valid) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;