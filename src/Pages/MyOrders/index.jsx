import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout/index.jsx'
import { ShoppingCartContext } from '../../Context/index.jsx'
import OrderCards from "../../components/OrderCards/index.jsx";

function MyOrders() {
    const context = useContext(ShoppingCartContext)
    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80'>
                <h1 className='font-medium text-xl'>My Orders</h1>
            </div>
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrderCards
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts} />
                    </Link>
                ))
            }
        </Layout>
    )
}

export default MyOrders