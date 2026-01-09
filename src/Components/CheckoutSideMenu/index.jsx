import { XCircleIcon } from '@heroicons/react/24/solid'
import {useContext, useEffect} from "react";
import { Link} from "react-router-dom";
import {ShoppingCartContext} from "../../Context/index.jsx";
import OrderCard from "../OrderCard/index.jsx";
import {totalPrice} from "../Utils/index.jsx";


const CheckoutSideMenu = () => {
    const context =useContext(ShoppingCartContext)

    const handleDelete = (id) =>{
        const filteredproducts = context.cartProducts.filter(product => product.id !== id)
    context.setCartProducts(filteredproducts)
    }
    const handleCheckout = () => {
        const orderToAdd = {
            date: '06.01.26',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([])
    }

    return(
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} h-full w-full flex-col fixed top-0 z-200 border border-black sm:rounded-lg bg-white sm:w-87.5 sm:top-17 sm:h-[calc(100vh-68px)] sm:flex-col sm:fixed sm:right-0  `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My order</h2>
                <XCircleIcon  onClick={() => context.closeCheckoutSideMenu()} className="size-6 text-black hover:cursor-pointer" />
            </div>
            <div className='px-6 overflow-y-scroll flex-1 '> {
                context.cartProducts.map(
                    product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
            }
            </div>
            <div className='px-6 mb-6'>
               <p className='flex justify-between items-center mb-3'>
                   <span className='font-light'>Total:</span>
                   <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
               </p>
                <Link to ='/my-orders/last'>
                    <button className='bg-black py-3  text-white w-full rounded-lg  ' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>

        </aside>

    )
}

export default CheckoutSideMenu