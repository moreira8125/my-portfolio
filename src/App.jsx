import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>

      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
