import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Enquiry from "./components/Enquiry/Enquiry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enquiry" element={<Enquiry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
