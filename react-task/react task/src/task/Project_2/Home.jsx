import React from 'react'
import Headers from './Headers'
import Body from './Body'
import Footers from './Footers'
import './index.css'
import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
export default function Home() {
  return (
      <div>
          <Headers />
          <Body />
          <Footers/>
    </div>
  )
}
