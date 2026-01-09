import {NavLink} from "react-router-dom";
import {ShoppingCartContext, UserContext} from "../../Context/index.jsx";
import {useContext, useState} from "react";
import { ShoppingCartIcon, Bars3Icon} from '@heroicons/react/24/solid'

const NavBar = () => {
    const {cartProducts, setSearchByCategory} = useContext(ShoppingCartContext);
    const userContext = useContext(UserContext)
    const activeStyle= "underline underline-offset-5 font-bold";
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    return (
        <nav className="flex flex-row  text-sm font-light justify-between w-full items-start relative z-10 top-0   sm:items-center  pt-5 sm:px-5 ">
          <div className='flex- flex-col w-full flex-1 absolute top-0 left-0 bg-white border '>
              <button className='sm:hidden' onClick={() =>setIsNavbarOpen(!isNavbarOpen)}>
                  <Bars3Icon className='h-8 w-8 text-black font-bold ml-3'></Bars3Icon>
              </button>
              {isNavbarOpen && (
                  <ul className='flex flex-col sm:flex-row items-center gap-3'>

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
                                   onClick={() => setSearchByCategory('clothes')}
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

                                   className={({ isActive}) =>
                                       isActive ? activeStyle: undefined}>
                              Others
                          </NavLink>
                      </li>
                      <li>
                          <NavLink to='/my-orders' className={({isActive}) => isActive ? activeStyle: undefined}>
                              My Orders
                          </NavLink>
                      </li>
                      <li>
                          <NavLink to='/my-account' className={({isActive}) => isActive ? activeStyle: undefined}>
                              My Account
                          </NavLink>
                      </li>
                  </ul>

              )}
          </div>

            <ul className=' hidden sm:flex sm:flex-row sm:items-center sm:gap-3'>
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
                     onClick={() => setSearchByCategory('clothes')}
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

                     className={({ isActive}) =>
                     isActive ? activeStyle: undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            {
                userContext.isLoggedIn && userContext.user? (
                    <ul className=' mx-auto sm:mx-0 mt-7 sm:mt-0 sm:flex flex-col sm:flex-row sm:items-center sm:gap-5'>
                        <li className='text-black/60 mr-4 sm:mr-0'>
                            {userContext.user.email}
                        </li>
                        <li className='hidden sm:block'>
                            <NavLink  to='/my-orders' className={({isActive}) => isActive ? activeStyle: undefined}  >
                                My Orders
                            </NavLink>
                        </li>
                        <li className='hidden sm:block'>
                            <NavLink to='/my-account' className={({isActive}) => isActive ? activeStyle: undefined} >
                                My Account
                            </NavLink>
                        </li>
                        <li className=' flex items-center mt-6  sm:mt-0  justify-center'>
                            <ShoppingCartIcon className='h-6 w-6 text-black'></ShoppingCartIcon>
                            <div>{cartProducts.length}</div>
                        </li>
                    </ul>
                ) :  (
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