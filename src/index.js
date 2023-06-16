import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './page/NotFound';
import Home from './page/Home';
import Mac from './page/Mac';
import Phone from './page/Phone';
import Pad from './page/Pad';
import Watch from './page/Watch';
import Phukien from './page/Phukien';
import Detail from './page/Detail';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    // children: [
    //   {
    //     path: "contacts/:contactId",
    //     element: <Contact />,
    //   },
    // ],
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/phone",
    element: <Phone />,
  },
  {
    path: "/mac",
    element: <Mac />,
  },
  {
    path: "/ipad",
    element: <Pad />,
  },
  {
    path: "/watch",
    element: <Watch />,
  },
  {
    path: "/phukien",
    element: <Phukien />,
  },
  {
    path: "/phone/:id",
    element: <Detail />,
  },
  {
    path: "/mac/:id",
    element: <Detail />,
  },
  {
    path: "/ipad/:id",
    element: <Detail />,
  },
  {
    path: "/watch/:id",
    element: <Detail />,
  },
  {
    path: "/phukien/:id",
    element: <Detail />,
  },
])
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
