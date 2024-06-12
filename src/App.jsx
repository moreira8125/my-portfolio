import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
