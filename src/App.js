import "./App.css";
import Navbar from "../src/components/Navbar";
import Slider from "../src/components/Slider";
import Card from "../src/components/Cards";
import Loginpage from "../src/Loginpage"; // Import the Loginpage component
import HomePage from "./home";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom"; // Import BrowserRouter and Route
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<HomePage/>} />
        <Route path="/Login" element={<Loginpage/>} />
      </Routes>
      <Footer/>                                                                           
    </Router>
  );
}
export default App;
