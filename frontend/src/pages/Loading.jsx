import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username;

  useEffect(() => {
    if (!username) return;

    const timer = setTimeout(() => {
      navigate(`/result/${username}`);
    }, 2000);

    return () => clearTimeout(timer);
  }, [username, navigate]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white text-xl">
      Analyzing profile...
    </div>
  );
};

export default Loading;