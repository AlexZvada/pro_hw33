import "./App.css";
import {  Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";



function App() {
  
  return (
    <div>
      <div className="nav">
        <NavLink to={"/"} className="nav-link">
          Home
        </NavLink>
        <NavLink to={"/about"} className="nav-link">
          About
        </NavLink>
        <NavLink to={"posts"} className="nav-link">
          Posts
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
