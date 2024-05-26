import styles from './Nav.module.css'
import logo from '../../../assets/logo.png'
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
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="company logo" className={styles.image}/>
      </div>
      <div className={styles.menuContainer}>
        <MobileNav menu={menu}/>
        <DesktopNav menu={menu}/>
      </div>
     

    </div>
  )
}

export default NavBar