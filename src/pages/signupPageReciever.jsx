
import Navbar from "../components/navbar";
import Header from "../components/header";
import Signup from "../components/signup";
import Footer from "../components/footer";



export default function SignupPagephil(){
    return(
        <div>
            <Navbar/>
            <Header
              heading="Signup to create a Philanthrophist account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
            <div className="mt-10">
            <Footer/>

            </div>
            
        </div>
    )
}