import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { useLenis } from "./hooks/useLenis";

function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <Router>
      <main className="dark relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
