import React, {useState} from 'react'
import {NavLink as NavLinkBase} from 'react-router-dom'
import styles from './Nav.module.css'
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../assets/logo.png'
import { List, ListItemButton, ListItemText, Collapse} from '@mui/material';


function MobileNav({menu}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setactiveIndex] = useState(-1);

  const toggleDrawer = (newOpen)  => (setOpen(newOpen));

  const handleClick = (e,index) => {
    e.stopPropagation()
    console.log(index)
    setactiveIndex(index)
  }

  const NavLink = React.forwardRef((props, ref) => (
    <NavLinkBase
      ref={ref}
      {...props}
    />
  ));
  NavLink.displayName = 'NavLink'

  const DrawerList = (
    <div  onClick={() => toggleDrawer(false)} className={`${styles.listContainer} ${!open ? styles.open : " "}`}>
   
      {menu.map((item,index) =>(
        (item.label=== "Home"|| item.label === "Contact") ? ( 
          <NavLink  to={item.path} key={`${index}-${item.label}`} className={styles.menuItem}>
            {item.label}
          </NavLink>
        ) : (
          <div style={{ display: 'flex' }} key={index}>
            <List>
              <ListItemButton sx={{ pl: 4 }} onClick={(e) => handleClick(e,index)} className={styles.menuItem}>
                <ListItemText primary={item.label} />
              </ListItemButton>
              <Collapse in={activeIndex ===  index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {
                    item.sectionItems.map((it)=>(
                      <NavLink  to={it.path} key={it.id} className={styles.list}>{it.label}</NavLink>
                    ))
                  }
                </List>
              </Collapse>
            </List>
          </div>
        )
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