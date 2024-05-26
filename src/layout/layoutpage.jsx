import {Outlet} from "react-router-dom"
import NavBar from "../components/common/Nav/nav"
import Footer from "./Footer/footer"

function Layoutpage() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <div><Footer/></div>
    </div>
  )
}

export default Layoutpage