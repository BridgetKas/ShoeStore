import { createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from "./pages/home/HomePage"
import Layoutpage from "./layout/layoutpage";
import { ThemeProvider } from  '@mui/material/styles';
import {theme} from "./utilis/theme"
import LogInPage from "./pages/LogInPage/LogPage";


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
        path:"Shop",
        element:<div>Shop</div>
      },
      {
        path:"Pages",
        element:<LogInPage color="white"/>
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