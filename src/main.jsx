import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import Main from './components/Main'
import LatestKdrama from './components/generated/KdramaAPI.jsx'
import KDramaranks from './components/generated/KdramaRanks.jsx'
import KdramaRandom from './components/generated/KdramaRandom.jsx'
import Navigation from './components/Navigation.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Navigation></Navigation>
  
  </React.StrictMode>,
)
