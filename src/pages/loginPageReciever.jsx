import  { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Login from '../components/login'
import Footer from '../components/footer'
import Modal from '../components/Modal'

export default function LoginPagephil(){
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return(
        <div>
            <Navbar />
            <Header
                heading="Login to your Philanthrophist account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
            />
            <Login />
            <div className="mt-10 flex justify-center">
                <button onClick={toggleModal}>+</button>
                {showModal && <Modal />}
            </div>
            <Footer />
        </div>
        
    )
}