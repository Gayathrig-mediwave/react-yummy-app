import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/style/Style.css";
import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Recipe } from "./pages/Recipe";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
