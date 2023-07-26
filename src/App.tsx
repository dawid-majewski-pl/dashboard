import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Home from "./pages/home/Home"
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

import "./styles/global.scss"

function App() {

  const Layout = () => {
    return(
      <div className="Main">
        <Navbar />
        <div className="Container">
          <div className="MenuContainer">
            <Menu />
          </div>
          <div className="ContentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        },
      ]
    },
    {
      path: "/Login",
      element: <Login />,
    }

  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
