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
  const dataRef = useRef()
 
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }
  return <div>
    <Navbar/>
    {/* <Hero/> */}
    <Glow/>
    {/* <h1 className="text-3xl font-bold underline">Hi This is Vibhansh</h1> */}
    {/* <Hello/> */}
    <Card/>
    <About1/>
    <ChooseRole/>
    <div className="App">
      <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} />
        <button type = "submit">Save</button>
      </form>
    </div>
    <Footer/>
  </div>

}


export default App;