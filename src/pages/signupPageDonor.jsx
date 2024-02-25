// import React from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Signup from '../components/signup'
import Footer from '../components/footer'

export default function SignupPage(){
    return(
        <div>
            <Navbar/>
            <Header
              heading="Signup to create an User account"
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

//export default SignupPage