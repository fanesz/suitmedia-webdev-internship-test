import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/_shared/Navbar";
import Home from "./pages/home/Home";
import Ideas from "./pages/ideas/Ideas";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="border border-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ideas" element={<Ideas />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
