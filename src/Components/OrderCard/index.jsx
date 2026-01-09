import { XCircleIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
   const { id, title, imageUrl, price, handleDelete} = props
    let renderXMarkIcon
    if(handleDelete){
        renderXMarkIcon = <XCircleIcon onClick={() => handleDelete(id)} className="size-6 text-black hover:cursor-pointer"/>
    }
    return(
        <div className='flex justify-between items-center mb-3 w-60 sm:w-80 mx-auto sm:mx-0'>
            <div className='flex items-center gap-3'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl}></img>
                </figure>
                <p className='text-sm font-light '>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-semibold'>{price}$</p>
                {
                    renderXMarkIcon
                } </div>

        </div>
    )
}

export default OrderCard