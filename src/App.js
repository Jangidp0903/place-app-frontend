import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Users/Pages/Users";
import UserPlaces from "./Places/Pages/UserPlaces";
import NewPlace from "./Places/Pages/NewPlace";
import UpdatePlace from "./Places/Pages/UpdatePlace";
import Auth from "./Users/Pages/Auth";
import MainNavigation from "./Shared/components/Navigation/MainNavigation";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:uid/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:pid" element={<UpdatePlace />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:uid/places" element={<UserPlaces />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    );
  }

  return (
    <Router>
      <MainNavigation />

      <main>{routes}</main>
    </Router>
  );
};

export default App;
