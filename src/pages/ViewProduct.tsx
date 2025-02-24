import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchSignleProductApi } from "../api/product";
import { Product } from "./Home";

const ViewProduct = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    const { data, isFetching, isSuccess, isError } = useQuery({
        queryKey: ['product', id],
        queryFn: () => fetchSignleProductApi(id || ""),
    });

    useEffect(() => {
        if (isSuccess) {
            setProduct(data)
        }
    }, [isSuccess, isFetching, isError])

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-100">
                        <img src={product?.image} alt="Backpack" className="object-contain h-96" />
                    </div>

                    <div className="md:w-1/2 p-8">
                        <div className="mb-4">
                            <span className="text-sm text-gray-500 uppercase tracking-wide">{product?.category}</span>
                            <h1 className="text-2xl font-bold text-gray-900 mt-2">{product?.title}</h1>
                        </div>

                        <div className="flex items-center mb-6">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="ml-2 text-gray-600">{product?.rating.rate} ({product?.rating.count} reviews)</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">${product?.price}</h2>
                            <p className="text-gray-600">{product?.description}</p>
                        </div>

                        <div className="flex space-x-4">
                            <button className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Add to Cart
                            </button>
                            <button className="flex-1 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct