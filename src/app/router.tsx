import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Education from "@/pages/Education";
import Certifications from "@/pages/Certifications";
import Experience from "@/pages/Experience";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}