import { useContext } from 'react'
import Layout from '../../Components/Layout/index.jsx'
import Card from '../../Components/Card/index.jsx'
import ProductDetail from '../../Components/ProductDetail/index.jsx'
import { ShoppingCartContext } from '../../Context/index.jsx'

function Home() {
    const context = useContext(ShoppingCartContext)

    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(item => (
                    <Card key={item.id} data={item} />
                ))
            )
        } else {
            return (
                <div>Is no Charging pipipipi</div>
            )
        }
    }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-6'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input
                type="text"
                placeholder='Search a product'
                className='rounded-lg border border-black sm:w-80 p-4 mb-4 focus:outline-none'
                onChange={(event) => context.setSearchByTitle(event.target.value)} />
            <div className='grid gap-4 grid-cols-1 sm:w-full sm:max-w-screen-lg sm:grid-cols-4'>
                {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home