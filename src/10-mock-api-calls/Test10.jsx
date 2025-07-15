import { ProductCard } from "../components/ProductCard";
import { Spinner } from "../components/Spinner";
import { useGetProducts } from "../hooks/useGetProducts";

export const Test10 = () => {
  const { data: products, isLoading } = useGetProducts();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold">10 - Mock API calls</h2>
      <div className="border border-gray-500 p-2 text-center">
        {isLoading ? <Spinner /> : null}

        {products?.length ? (
          <ul className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        ) : null}

        {!isLoading && !products?.length ? <p>No products found</p> : null}
      </div>
    </section>
  );
};
