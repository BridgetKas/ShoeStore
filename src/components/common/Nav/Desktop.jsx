import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo from '../../../assets/logo.png'


function DesktopNav({menu}) {
  return ( 
    <div className={styles.navContainerDesktop}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="company logo" className={styles.image}/>
      </div>
      <div className={styles.desktopContainer}>
        {menu.map((item,index) =>(
          <NavLink  to={item.path} key={`${index}-${item.label}`} className={styles.menuItem}>
            {item.label}
          </NavLink>
        ))}
        <div className={styles.iconsContainer}>
          <ShoppingBagOutlinedIcon color="gray"/>
          <SearchOutlinedIcon  color="gray"/>
        </div>

      </div>
    </div>
  )
}

export default DesktopNav