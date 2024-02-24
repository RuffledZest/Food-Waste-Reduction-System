import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './index.css'
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import RecieverDash from '../recieverDash.jsx';
import DonorDash from './donorDash.jsx';
import LoginPagephil from './pages/LoginPagephil.jsx';
import SignupPagephil from './pages/SignupPagephil.jsx';

const routes = [
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/recieverdash",
    element: <RecieverDash/>,
  },
  {
    path: "/donordash",
    element: <DonorDash/>,
  },
  {
    path: "/loginphil",
    element: <LoginPagephil/>,
  },
  {
    path: "/signupphil",
    element: <SignupPagephil/>,
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)