import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Projects from "./components/Projects";


function App() {
  return (
   <div className="flex flex-col gap-1">
    <NavBar/>
    <Home/>
    <SocialLinks/>
    <About/>
    <Expertise/>
    <Projects/>
    <Certificates/>
    <Footer/>
   </div>
  );
}

export default App;
