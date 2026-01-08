import Home from '../Home/Index.jsx'
import MyAccount from "../MyAccount/index.jsx";
import MyOrder from "../MyOrder/index.jsx";
import MyOrders from "../MyOrders/index.jsx";
import NotFound from "../NotFound/index.jsx";
import SignIn from "../SignIn/index.jsx";
import SignUp from "../SignUp/index.jsx";
import NavBar from "../../Components/Navbar/index.jsx";
import CheckoutSideMenu from '../../Components/CheckoutSideMenu/index.jsx'
import './App.css'
import {BrowserRouter, useRoutes} from 'react-router-dom';
import {ShoppingCartProvider, UserContext, UserProvider} from "../../Context/index.jsx";
import {useContext} from "react";

const AppRoutes = () => {
 const userContext = useContext(UserContext)
  const isEnabled = userContext.isLoggedIn && userContext.user;

  return useRoutes([
    { path: '/', element: isEnabled? <Home /> : <SignIn/> },
    { path: '/clothes', element: isEnabled? <Home />: <SignIn/> },
    { path: '/electronics', element:isEnabled? <Home />: <SignIn/> },
    { path: '/furnitures', element: isEnabled?  <Home />: <SignIn/> },
    { path: '/toys', element: isEnabled? <Home />: <SignIn/> },
    { path: '/other', element:isEnabled? <Home />: <SignIn/> },
    { path: '/my-account', element: isEnabled? <MyAccount />: <SignIn/> },
    { path: '/sign-up', element:  < SignUp />},
    { path: '/my-order', element: isEnabled? <MyOrder />: <SignIn/> },
    { path: '/my-orders', element: isEnabled?  <MyOrders />: <SignIn/> },
    { path: '/my-orders/last', element: isEnabled? <MyOrder />: <SignIn/> },
    { path: '/my-orders/:id', element:  isEnabled? <MyOrder />: <SignIn/> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },

  ])
}

const App = () => {
const userContext = useContext(UserContext)
  const userLocalStorage = localStorage.getItem('user')
  const isLoggedInLocalStorage = localStorage.getItem('isLoggedIn')
  const registeredUsers = localStorage.getItem('registeredUsers')
  if(!userLocalStorage && !isLoggedInLocalStorage &&!registeredUsers){
    localStorage.setItem('user', 'null')
    localStorage.setItem('isLoggedin', 'false')
    localStorage.setItem('registeredUsers','[]')
  }


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
