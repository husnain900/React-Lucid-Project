import "./Components/Pages/Responsive.css";
import "./App.css";
import Navbar from "./Components/Common/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Pricing from "./Components/Pages/Pricing/Pricing";
import LandingPage from "./Components/Pages/LandingPage/Landing";
import Footer from "./Components/Common/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
