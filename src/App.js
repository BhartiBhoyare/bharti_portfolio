import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";


function App() {
  return (
   <div className="flex flex-col gap-1">
    <NavBar/>
    <Home/>
    <SocialLinks/>
    <About/>
    <Expertise/>
    <Certificates/>
    <Footer/>
   </div>
  );
}

export default App;
