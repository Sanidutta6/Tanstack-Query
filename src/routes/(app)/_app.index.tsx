import { createFileRoute } from '@tanstack/react-router'
import ProductCard from '../../components/ProductCard';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProductListApi } from '../../api/product';

type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number,
  }
}

export const Route = createFileRoute('/(app)/_app/')({
  component: Home,
})

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const { data, isFetching, isSuccess, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProductListApi(),
  });

  useEffect(() => {
    if (isSuccess) {
      setProducts(data)
    }
  }, [isSuccess, isFetching, isError])

  return (
    <section className="px-4 py-3">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">Products</h1>
        <div className="grid grid-cols-4 gap-4">
          {/* ProductCard */}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              imgUrl={product.image}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
