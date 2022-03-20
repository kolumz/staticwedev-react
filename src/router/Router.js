import { Routes, Route } from "react-router-dom";
import Auth from "../views/auth/Auth";
import Home from "../views/home/Home";
import Profile from "../views/User/profile/Profile";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:user" exact element={<Profile />} />
      <Route path="/auth" element={<Auth />} />
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  );
};

export default router;
