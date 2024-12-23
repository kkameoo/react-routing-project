import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/home";
import Profile from "./pages/Dashboard/Profile";
import Settings from "./pages/Dashboard/Settings";
import "./routing.css";

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
          {/* Nested Routing */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile/:userid" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </article>
    </div>
  );
}

export default App;
