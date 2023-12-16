import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Slider from "./components/Slider/Slider";
import Virtual from "./components/Virtual/Virtual";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Slider />
      <Virtual />
      <Products />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
