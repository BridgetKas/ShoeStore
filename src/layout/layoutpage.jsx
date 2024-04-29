import {Outlet} from "react-router-dom"

import React from 'react'

function Layoutpage() {
  return (
    <div>
        <div>Hi</div>
        <Outlet/>
        <div>Footer</div>
    </div>
  )
}

export default Layoutpage