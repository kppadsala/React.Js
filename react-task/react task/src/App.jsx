import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import FunctionCom from './2.componet/functionaol'
// import ClassCom from './2.componet/class'
// import Header from './3.styling css/header'
// import Body from './3.styling css/body'
// import Footer from './3.styling css/footer'
// import Section from './3.styling css/section'
// import SectionPart from './3.styling css/section'
// import CardPart from './task/card'
import Header from './task/Header'
import Footer from './task/Footer'
import Bodycard from './task/Bodycard'
import Headerprop from './task/headerprop'
import BodyCardPorps from './task/BodyCardPorps'
import Footerprop from './task/Footerprop'
// import ClassProps from './4.props/Class/ClassProps'
// import FunctionProps from './4.props/Function/FunctionProps'


function App() {
  

  return (
    <div>
      {/* 2.===Componet==== */}
      {/* <FunctionCom /> */}
      {/* <ClassCom /> */}
      {/* 2.===Componet ==== */}

      {/* 3.=======Styling Css====== */}
      {/* <Body />
      <Footer />
      <SectionPart/>
      <Header /> */}
      {/* 3.=======Styling Css End====== */}

      {/* ==========TASK======= */}
      {/* <div className='d-flex justify-content-evenly' >
      <CardPart />
      <CardPart />
      <CardPart/></div> */}

      <Headerprop/>
      <BodyCardPorps/>
      <Footerprop/>
      {/* ==========TASK  END======= */}
      {/* ===========PROPS======== */}
      {/* <FunctionProps /> */}
      {/* <hr className='bg-danger p-3'/> */}
        {/* <ClassProps /> */}
      {/* ===========PROPS END======== */}

      
    </div>
  )
}

export default App
