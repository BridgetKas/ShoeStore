import { createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from "./pages/home/HomePage"
import Layoutpage from "./layout/layoutpage";
import { ThemeProvider } from  '@mui/material/styles';
import {theme} from "./utilis/theme"
import ShopPage from "./pages/Shop/page";
import Product from "./pages/productDetails/product";
import CartPageComp from "./pages/Cart/cartPage";
import CheckoutComp from "./pages/checkout/checkout";
import ConfirmComp from "./pages/Confirm/confirmComp";
import BlogPage from "./pages/Blog/cards";
import BlogDetails from "./pages/BlogDetails/blogDetails";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layoutpage/>,
    errorElement:<h1>We are sorry to inform you that your operation was unsucessful.</h1>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:"shop/",
        children:[
          {
            index:true,
            element:<ShopPage/>
          },
          {
            path:"single-product",
            element:<Product/>
          },
          {
            path:"product-checkout",
            element:<CheckoutComp/>
          },
          {
            path:"cart",
            element:<CartPageComp/>
          },
          {
            path:"confimation",
            element:<ConfirmComp/>
          }
         
        ]
      },
      {
        path:"blog/",
        children: [
          {
            index:true,
            element:<BlogPage/>
          },
          {
            path:"single-blog",
            element:<BlogDetails/>
          }
        ]
      },
      {
        path:"page",
        element:"oh yeah"
      },
      {
        path:"contact",
        element:"ouuu lalala"
      }
      
      
    ]
  }
])


function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App