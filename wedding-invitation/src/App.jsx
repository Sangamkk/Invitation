import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Story from "./pages/Story";
import Gallery from "./pages/Gallery";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/story" element={<Story />} />

        <Route path="/gallery" element={<Gallery />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;