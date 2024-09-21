import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {
  return (
   <div className="flex flex-col gap-1">
    <NavBar/>
    <Home/>
    <SocialLinks/>
    <About/>
   </div>
  );
}

export default App;
