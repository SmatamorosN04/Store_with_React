import {NavLink} from "react-router-dom";
import {ShoppingCartContext} from "../../Context/index.jsx";
import {useContext} from "react";
import { ShoppingCartIcon} from '@heroicons/react/24/solid'

const NavBar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle= "underline underline-offset-5 font-bold";


    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-6 px-9 text-sm font-light">
            <ul className='flex items-center gap-3'>
                <li className="font-semibold text-3xl">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                     className={({ isActive}) =>
                     isActive ? activeStyle: undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    className={({ isActive}) =>
                     isActive ? activeStyle: undefined}>
                        Clothes
                    </NavLink>
                </li>
                    <li>
                        <NavLink to='/electronics'
                         className={({ isActive}) =>
                         isActive ? activeStyle: undefined}>
                            Electronics
                        </NavLink>
                    </li>
                <li>
                    <NavLink to='/furnitures'
                     className={({ isActive}) =>
                     isActive ? activeStyle: undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                     className={({ isActive}) =>
                     isActive ? activeStyle: undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                     className={({ isActive}) =>
                     isActive ? activeStyle: undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    SmatamorosN12@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                     className={({ isActive}) =>
                     isActive ? activeStyle: undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    className={({ isActive}) =>
                    isActive ? activeStyle: undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
             className={({ isActive}) =>
                 isActive ? activeStyle: undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex align-center gap-1.5'>
                    <ShoppingCartIcon className=' h-5 w-5 text-black'>
                        </ShoppingCartIcon>
                    {context.count}
                </li>

            </ul>

        </nav>
    )
}
export default NavBar