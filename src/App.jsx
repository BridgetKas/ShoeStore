import { createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from "./pages/home/HomePage"
import Layoutpage from "./layout/layoutpage";
import { ThemeProvider } from  '@mui/material/styles';
import {theme} from "./utilis/theme"
import ShopPage from "./pages/Shop/page";
import Product from "./pages/productDetails/product";


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
        path:"shop",
        element:<ShopPage/>,
        children:[
          {
            path:"single-product",
            element:<Product/>
          }
         
        ]
      },
      {
        path:"blog",
        element:"Hello"
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