import { Routes, Route } from "react-router-dom";
import Auth from "../views/auth";
import Home from "../views/home/Home";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  );
};

export default router;
