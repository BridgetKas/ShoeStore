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
      label:"Shop",
      id:1,
      sectionItems:[
        {
          path:"/shop",
          label:"Shop Category",
          id:0,
        },
        {
          path:"/shop/single-product",
          label:"Product Details",
          id:1,
        },
        {
          path:"/shop/product-checkout",
          label:"Product CheckOut",
          id:2,
        },
        {
          path:"/shop/cart",
          label:"Shopping Cart",
          id:3,
        },
        {
          path:"/shop/confimation",
          label:"Confimation",
          id:4,
        }
      ]
    },
    {
    
      label:"Blog",
      id:2,
      sectionItems:[
        {
          path:"/blog",
          label:"BLOG",
          id:5,
        },
        {
          path:"/blog/single-blog",
          label:"BLOG DETAILS",
          id:6,
        }
      ]
    },
    {
      label:"Page",
      id:3,
      sectionItems:[
        {
          path:"/page",
          label:"LOGIN",
          id:7,
        },
        {
          path:"/page/tracking",
          label:"TRACKING",
          id:8,
        },
        {
          path:"/page/elements",
          label:"ELEMENTS",
          id:9,
        }
      ]
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