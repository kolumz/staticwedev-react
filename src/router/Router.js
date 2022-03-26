import { Routes, Route } from "react-router-dom";
import Auth from "../views/auth/Auth";
import CreatePost from "../views/home/feed/CreatePost";
import Home from "../views/home/Home";
import Profile from "../views/User/profile/Profile";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/auth" element={<Auth />} />
      {/* <Route path="/:user" exact element={<Profile />} /> */}
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  );
};

export default router;
