import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
//bootstrap teml
//
//
import './assets/vendor/bootstrap-icons/bootstrap-icons.min.css'
import './assets/vendor/animate.css/animate.min.css'
import './assets/css/style.css'
import './assets/vendor/swiper/swiper-bundle.min.css'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
