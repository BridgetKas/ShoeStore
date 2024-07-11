import React, {useState} from 'react'
import {NavLink as NavLinkBase} from 'react-router-dom'
import styles from './Nav.module.css'
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../assets/logo.png'



function MobileNav({menu}) {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen)  => (setOpen(newOpen));

  const NavLink = React.forwardRef((props, ref) => (
    <NavLinkBase
      ref={ref}
      {...props}
    />
  ));
  NavLink.displayName = 'NavLink'

  const DrawerList = (
    <div  onClick={() => toggleDrawer(false)} className={`${styles.listContainer} ${!open ? styles.open : " "}`}>
      {menu.map((item,id) => (
        <div key={id} className={styles.menuitemContainer}>
          <NavLink to={item.path} key={id} className={styles.menuItem}>{item.label}</NavLink>
        </div>
      ))}
    </div>
  );
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mobileiconContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="company logo" className={styles.image}/>
        </div>
        <MenuIcon color="gray" fontSize="large" onClick={() => toggleDrawer(true)}/>
      </div>
      <Drawer open={open} onClose={() => toggleDrawer(false)} sx={{position:"block",marginTop:'100px'}} anchor='top' >
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default MobileNav