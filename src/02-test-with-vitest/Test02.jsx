import { Price } from "../components/Price";
import products from "../products.json";

export const Test02 = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold">02 - Test with Vitest</h2>
      <div className="border border-gray-500 p-2">
        <Price product={products[0]} />
      </div>
      <div className="border border-gray-500 p-2">
        <Price product={products[2]} />
      </div>
    </section>
  );
};
