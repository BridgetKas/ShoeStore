import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo from '../../../assets/logo.png'
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton} from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';


function DesktopNav({menu}) {
  return ( 
    <div className={styles.navContainerDesktop}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="company logo" className={styles.image}/>
      </div>
      <div className={styles.desktopContainer}>
        {menu.map((item,index) =>(
          (item.label=== "Home"|| item.label === "Contact") ? ( 
            <NavLink  to={item.path} key={`${index}-${item.label}`} className={styles.menuItem}>
              {item.label}
            </NavLink>
          ) : (
            <Dropdown key={item.index}>
              <MenuButton >{item.label}</MenuButton>
              <Menu>
                {item.sectionItems.map((it,id)=>(
                  <MenuItem key={id}>{it.label}</MenuItem>
                ))}
                
              </Menu>
            </Dropdown>
          )
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