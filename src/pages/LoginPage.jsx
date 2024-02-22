import React from 'react'
import Navbar from '../components/navbar'
import header from '../components/header'
import login from '../components/login'
import Footer from '../components/footer'

export default function LoginPage(){
    return(
        <>
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login/>
        </>
    )
}