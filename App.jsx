import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Order from "./Components/Order";
import Blogs from "./Components/Blogs";
import View from "./Components/view";
import Sign from "./Components/Sign"; // ✅ import the sign page
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Sign />} />

        {/* ✅ Homepage route */}
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Hero />
              <About />
              <Blogs />
            </>
          }
        />

        {/* Other routes */}
        <Route path="/order" element={<><Header /><Order /></>} />
        <Route path="/about" element={<><Header /><About /></>} />
        <Route path="/blogs" element={<><Header /><Blogs /></>} />
        <Route path="/view" element={<><Header /><View /></>} />
        
      </Routes>
    </Router>
  );
}

export default App;
