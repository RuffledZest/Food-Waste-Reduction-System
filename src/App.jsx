
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RecieverDash from "./recieverDash";
import DonorDash from "./donorDash";


import SignupPage from "./pages/signupPageDonor";
import SignupPagephil from "./pages/signupPageReciever";
import LoginPage from "./pages/loginPageDonor";
import LoginPagephil from "./pages/loginPageReciever";
import HomePage from "./homePage";
function App() {
  return <BrowserRouter>
    
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/donor" element={<DonorDash />} />
      <Route path="/reciever" element={<RecieverDash/>} />
      <Route path="/signupd" element={<SignupPage />} />
      <Route path="/signupr" element={<SignupPagephil />} />
      <Route path="/logind" element={<LoginPage />} />
      <Route path="/loginr" element={<LoginPagephil />} />
      <Route path="*" element={<div>404 Not Found</div>} />



    </Routes>




  </BrowserRouter>

}


export default App;