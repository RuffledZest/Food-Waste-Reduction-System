import React from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Login from '../components/login'
import Footer from '../components/footer'

export default function LoginPage(){
    return(
        <div>
            <Navbar />
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
            />
            <Login />
            <Footer />
        </div>
    )
}