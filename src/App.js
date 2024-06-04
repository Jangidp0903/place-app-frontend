import Users from "./users/pages/Users";
import UserPlaces from "./users/pages/UserPlaces";
import NewPlace from "./places/Pages/Newplace";
import UpdatePlace from "./places/Pages/Updateplace";
import Auth from "./users/pages/Auth";

import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/:userId/places" element={<UserPlaces />}></Route>
        <Route path="/places/new" element={<NewPlace />}></Route>
        <Route path="/places/:placeId" element={<UpdatePlace />}></Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/:userId/places" element={<UserPlaces />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="*" element={<Navigate to="/auth" replace />}></Route>
      </Routes>
    );
  }

  return (
    <Router>
      <main>{routes}</main>
    </Router>
  );
};

export default App;
