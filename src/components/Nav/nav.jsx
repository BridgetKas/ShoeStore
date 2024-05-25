import styles from './Nav.module.css'
import logo from '../../assets/logo.png'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { NavLink } from 'react-router-dom';

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
        {menu.map((item,index) =>(
          <NavLink  to={item.path} key={`${index}-${item.label}`} className={styles.menuItem}>
            {item.label}
          </NavLink>
        ))}
        <div className={styles.iconContainer}>
          <ShoppingBagOutlinedIcon color="gray"/>
          <SearchOutlinedIcon  color="gray"/>
        </div>
      </div>
     

    </div>
  )
}

export default NavBar