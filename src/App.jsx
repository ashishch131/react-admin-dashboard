import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

const Layout = () => {
  return (
    <div className="layout">
      <Topbar />
      <div className="Layoutcontainer">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/users",
          element: <UserList/>,
        },
        {
          path: "/user/:userId",
          element: <User/>,
        },
        {
          path: "/newUser",
          element: <NewUser/>,
        },
        {
          path: "/products",
          element: <ProductList/>,
        },
        {
          path: "/product/:productId",
          element: <Product/>,
        },
        {
          path: "/newProduct",
          element: <NewProduct/>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
