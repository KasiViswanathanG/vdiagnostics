import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginScreens from "./components/templates/LoginScreens";
import LoginPage from "./components/pages/LoginPage";
import TestBookingPage from "./components/pages/TestBooking";
import HomePage from "./components/pages/HomePage";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated }: any = useAuth0();

  return (
    <Routes>
      {!isAuthenticated && (
        <>
          <Route element={<LoginScreens></LoginScreens>}>
            <Route path="" element={<LoginPage></LoginPage>}></Route>
          </Route>
          <Route path="/booking" element={<TestBookingPage />}></Route>
        </>
      )}
      {isAuthenticated && (
        <>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<TestBookingPage />}></Route>
        </>
      )}
    </Routes>
  );
}

export default App;
