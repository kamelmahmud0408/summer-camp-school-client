import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './routes/Routes';
import AuthProvider from './provider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <AuthProvider>
      <div className='max-w-7xl mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
      </AuthProvider>
   
  </React.StrictMode>,
)
