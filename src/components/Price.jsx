import { getDiscountPercentage } from "../utils/getDiscountPercentage";

export const Price = ({ product }) => {
  const { price, discountPrice, currency } = product;
  const discountPercentage = getDiscountPercentage([product]);

  return (
    <div>
      {discountPercentage ? (
        <div className="flex items-center justify-end gap-1">
          <div className="rounded-md bg-red-400 px-2 py-0.5">
            <p className="text-sm text-white">-{discountPercentage}%</p>
          </div>
          <p className="text-sm line-through">
            {price}
            {currency}
          </p>
        </div>
      ) : null}
      <p className="text-end text-lg font-semibold">
        {discountPrice || price}
        {currency}
      </p>
    </div>
  );
};
