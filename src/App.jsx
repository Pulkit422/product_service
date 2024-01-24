// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Layout from './Components/Layout'
import './Components/Layout.css';
import Videos from './Components/Videos';
import Address from './Components/Address';


function App() {
  return (
    <>
    <Layout/>
    <Videos/>
    <Address/>
    </>
  )
}

export default App
