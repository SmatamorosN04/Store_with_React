import {NavLink} from "react-router-dom";
import {ShoppingCartContext, UserContext} from "../../Context/index.jsx";
import {useContext} from "react";
import { ShoppingCartIcon} from '@heroicons/react/24/solid'

const NavBar = () => {
    const {cartProducts, setSearchByCategory} = useContext(ShoppingCartContext);
    const userContext = useContext(UserContext)
    const activeStyle= "underline underline-offset-5 font-bold";


    return (
        <nav className="flex flex-row  text-sm font-light justify-between w-full items-start relative z-10 top-0   sm:items-center  pt-5 sm:px-5 ">
            <ul className='flex flex-col sm:flex-row items-center gap-3'>
                <li className="font-semibold text-3xl">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                      onClick={() => setSearchByCategory(null)}
                     className={({ isActive}) =>
                     isActive ? activeStyle: undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                     onClick={() => setSearchByCategory('Clothes')}
                    className={({ isActive}) =>
                     isActive ? activeStyle: undefined}>
                        Clothes
                    </NavLink>
                </li>
                    <li>
                        <NavLink to='/electronics'
                          onClick={() => setSearchByCategory('electronics')}
                         className={({ isActive}) =>
                         isActive ? activeStyle: undefined}>
                            Electronics
                        </NavLink>
                    </li>
                <li>
                    <NavLink to='/furnitures'
                      onClick={() => setSearchByCategory('furniture')}
                     className={({ isActive}) =>
                     isActive ? activeStyle: undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                     onClick={() => setSearchByCategory('toys')}
                     className={({ isActive}) =>
                     isActive ? activeStyle: undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                     onClick={() => setSearchByCategory('*')}
                     className={({ isActive}) =>
                     isActive ? activeStyle: undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            {
                userContext.isLoggedIn && userContext.user? (
                    <ul className='flex flex-col sm:flex-row items-center gap-5'>
                        <li className='text-black/60'>
                            {userContext.user.email}
                        </li>
                        <li>
                            <NavLink to='/my-orders' className={({isActive}) => isActive ? activeStyle: undefined}>
                                My Orders
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/my-account' className={({isActive}) => isActive ? activeStyle: undefined}>
                                My Acount
                            </NavLink>
                        </li>
                        <li className='flex items-center'>
                            <ShoppingCartIcon className='h-6 w-6 text-black'></ShoppingCartIcon>
                            <div>{cartProducts.length}</div>
                        </li>
                    </ul>
                ) : (
                    <ul className='flex flex-col sm:flex-row items-center gap-3'>
                        <li>
                            <NavLink to='/sign-in' className={({isActive}) => isActive ? activeStyle : undefined}>
                                Sign In
                            </NavLink>
                        </li>
                    </ul>
                )
            }

        </nav>
    )
}
export default NavBar