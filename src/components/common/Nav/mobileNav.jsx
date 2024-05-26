import React, {useState} from 'react'
import {NavLink as NavLinkBase} from 'react-router-dom'
import styles from './Nav.module.css'
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';


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
    <div  onClick={() => toggleDrawer(false)} className={styles.listContainer}>
      {menu.map((item) => (
        <NavLink to={item.path} key={item.path} className={styles.menuItem}>{item.label}</NavLink>

      ))}
    </div>
  );
  return (
    <div>
      <div className={styles.iconContainer}>
        <MenuIcon color="gray" fontSize="large" onClick={() => toggleDrawer(true)}/>
      </div>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default MobileNav