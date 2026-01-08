import Home from '../Home'
import MyAccount from "../MyAccount/index.jsx";
import MyOrder from "../MyOrder/index.jsx";
import MyOrders from "../MyOrders/index.jsx";
import NotFound from "../NotFound/index.jsx";
import SignIn from "../SignIn/index.jsx";
import SignUp from "../SignUp/index.jsx";
import NavBar from "../../components/navbar/index.jsx";
import CheckoutSideMenu from '../../components/CheckoutSideMenu/index.jsx'
import './App.css'
import {BrowserRouter, useRoutes} from 'react-router-dom';
import {ShoppingCartProvider, UserProvider} from "../../Context/index.jsx";

const AppRoutes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/other', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/sign-up', element: < SignUp />},
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },

  ])
}

const App = () => {

  return (
<ShoppingCartProvider>
  <BrowserRouter>
    <UserProvider>
      <AppRoutes/>
      <NavBar/>
      <CheckoutSideMenu/>
    </UserProvider>
  </BrowserRouter>
</ShoppingCartProvider>


)
}

export default App
