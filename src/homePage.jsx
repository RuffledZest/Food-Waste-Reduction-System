import Glow from "./components/glow";
import Navbar from "./components/navbar";
import Card from "./components/tiltCard";
import About1 from "./components/aboutUs";
import ChooseRole from "./components/chooseRole";
import Footer from "./components/footer";



function HomePage(){
  return <div>
    <Navbar/>
    
    <Glow/>
    
   
    <Card/>
    <About1/>
    <ChooseRole/>
    
    <Footer/>

    
  </div>

}


export default HomePage;