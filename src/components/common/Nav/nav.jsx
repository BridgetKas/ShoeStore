import MobileNav from './mobileNav';
import DesktopNav from './Desktop';

function NavBar() {
  const menu = [
    {
      path:"/",
      label:"Home",
      id:0
    },
    {
      path:"/shop",
      label:"Shop",
      id:1
    },
    {
      path:"/blog",
      label:"Blog",
      id:2
    },
    {
      path:"/page",
      label:"Page",
      id:3,
    },
    {
      path:"/contact",
      label:"Contact",
      id:4,
    }
  ]

  return (
    <div>
      <MobileNav menu={menu}/>
      <DesktopNav menu={menu}/>
    </div>
  )
}

export default NavBar