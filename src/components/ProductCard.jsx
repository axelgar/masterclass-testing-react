import { useWishlistStore } from "../hooks/useWishlistStore";
import { Price } from "./Price";
import { WishlistButton } from "./WishlistButton";

export const ProductCard = ({ product }) => {
  const { list, update } = useWishlistStore();

  return (
    <article className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white min-h-[402px]">
      <img
        alt={product.altText}
        src={product.image}
        className="aspect-3/4 w-full bg-gray-200 object-cover sm:aspect-auto sm:h-60"
      />
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm text-start font-medium text-gray-900">
          <a href={product.href}>{product.name}</a>
        </h3>

        <div className="flex flex-1 flex-col justify-end gap-4">
          <Price product={product} />
          <WishlistButton
            isUserLoggedIn={true}
            onClick={() => update(product.id)}
            isInWishlist={list.has(product.id)}
          />
        </div>
      </div>
    </article>
  );
};
