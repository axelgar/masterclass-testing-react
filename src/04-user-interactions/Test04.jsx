import { useState } from "react";
import { WishlistButton } from "../components/WishlistButton";

export const Test04 = () => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold">04 - User interactions</h2>
      <div className="border border-gray-500 p-2 text-center">
        <WishlistButton
          isUserLoggedIn={true}
          isInWishlist={isInWishlist}
          onClick={() => setIsInWishlist((prev) => !prev)}
        />
      </div>
    </section>
  );
};
