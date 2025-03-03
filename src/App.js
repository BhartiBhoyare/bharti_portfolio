import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import React, { useState } from "react";
// import Gif from "./assets/gif.mp4";
// import Bgimage from './components/Bgimage';


function App() {
  const [compo, setCompo] = useState("home");
  
  return (
    // <div className="relative w-[26.5rem] h-[48rem] lg:w-full overflow-hidden">
    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     className="absolute top-0 left-0 w-full h-full object-cover"
    //   >
    //     <source src={Gif} type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>
      <div className="app flex flex-col gap-1">
        <NavBar setcompo={setCompo} />
        <SocialLinks />
        {compo === "home" && <Home />}
        {compo === "about" && <About />}
        {compo === "expertise" && <Expertise />}
        {compo === "projects" && <Projects />}
        {compo === "certificates" && <Certificates />}
        {compo === "contact" && <Footer />}
        {/* <Bgimage/> */}
      </div>
  );
}


export default App;
