import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home";
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <article>
        {/* Routing 정보 객체 */}
        <Routes>
          {/* 개별 Router 객체 */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </article>
    </div>
  );
}

export default App;
