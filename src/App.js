import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
