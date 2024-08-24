import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./ui/Sections/About";
import Education from "./ui/Sections/Education";
import Experience from "./ui/Sections/Experience";
import Skills from "./ui/Sections/Skills";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home" index element={<Navigate to="about" />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
