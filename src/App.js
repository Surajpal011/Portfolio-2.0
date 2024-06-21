import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
