import { Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  );
};

export default router;
