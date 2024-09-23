import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Expertise from "./components/Expertise";
// import Contact from "./components/Contact";

function App() {
  return (
   <div className="flex flex-col gap-1">
    <NavBar/>
    <Home/>
    <SocialLinks/>
    <About/>
    <Expertise/>
    <Certificates/>
    {/* <Contact/> */}
   </div>
  );
}

export default App;
