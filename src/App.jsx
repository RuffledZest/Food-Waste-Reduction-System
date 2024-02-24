// import Hello from "./components/hello";
import { PinContainer } from "./components/3d-pin";
import About1 from "./components/aboutUs";
import Footer from "./components/footer";
import Glow from "./components/glow";
// import Hero from "./components/hero";
import ChooseRole from "./components/chooseRole";
import Navbar from "./components/navbar";
import Card from "./components/tiltCard";
function App(){
  return <div>
    <Navbar/>
    {/* <Hero/> */}
    <Glow/>
    {/* <h1 className="text-3xl font-bold underline">Hi This is Vibhansh</h1> */}
    {/* <Hello/> */}
    <Card/>
    <About1/>
    <ChooseRole/>
    <PinContainer/>
    <Footer/>
  </div>

}


export default App;