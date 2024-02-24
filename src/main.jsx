import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DonorDash from './donorDash.jsx'
import RecieverDash from '../recieverDash.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <DonorDash /> */}
    {/* <App/> */}
    {/* <DonorDash/> */}
    <RecieverDash />
  </React.StrictMode>,
)
