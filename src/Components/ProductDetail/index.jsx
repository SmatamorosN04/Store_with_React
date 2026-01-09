import { XCircleIcon } from '@heroicons/react/24/solid'
import {useContext} from "react";
import {ShoppingCartContext} from "../../Context/index.jsx";

const ProductDetail = () => {
    const context =useContext(ShoppingCartContext)

    return(
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} h-full w-full flex-col fixed top-0 z-200 border border-black sm:rounded-lg bg-white sm:w-87.5 sm:top-17 sm:h-[calc(100vh-68px)] sm:flex-col sm:fixed sm:right-0 sm:border `}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <XCircleIcon  onClick={() => context.closeProductDetail()} className="size-6 text-black hover:cursor-pointer" />
        </div>
            <figure>
                <img  className='w-full h-full rounded-lg'  src={context.productToShow.images} alt={context.productToShow.title}></img>
            </figure>
            <p className='flex flex-col p-8'>
                <span className='font-medium text-2xl'>{context.productToShow.price}$</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>

        </aside>

    )
}

export default ProductDetail