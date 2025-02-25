import { Link } from "@tanstack/react-router"

interface ProductCardProps {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    imgUrl: string,
    rating: {
        rate: number,
        count: number,
    }
}

const ProductCard = (props: ProductCardProps) => {
    return (
        <div className='max-w-sm px-3 py-2 rounded-lg shadow-lg overflow-hidden border-2 border-gray-800 group'>
            <Link to="/product/$productId" params={{ productId: props.id.toString() || "" }}>
                <div>
                    <img src={props.imgUrl} alt={props.title} className='w-48 h-48 object-contain mx-auto group-hover:scale-105 duration-200' />
                </div>
                <div>
                    <h4 className='line-clamp-2 text-lg font-medium group-hover:text-indigo-600 group-hover:font-semibold'>{props.title}</h4>
                    <p className='line-clamp-3'>{props.description}</p>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <p className='text-lg font-semibold'>${props.price}</p>
                    <p className='text-sm text-gray-500 capitalize'>{props.category}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard