import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionCom from './2.componet/functionaol'
import ClassCom from './2.componet/class'
import Header from './3.styling css/header'
import Body from './3.styling css/body'
import Footer from './3.styling css/footer'
import Section from './3.styling css/section'
import SectionPart from './3.styling css/section'

function App() {
  

  return (
    <div>
      {/* <FunctionCom /> */}
      {/* <ClassCom /> */}
      <Header />
      <Body />
      <Footer />
      <SectionPart/>
    </div>
  )
}

export default App
