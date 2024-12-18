import { Header, Footer, Loading, UserProfile } from "./components/index";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Outlet />
      {/* <UserProfile /> */}
      <Footer />
    </div>
  );
}

export default App;
