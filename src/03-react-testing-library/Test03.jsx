import { WishlistButton } from "../components/WishlistButton";

export const Test03 = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold">03 - React Testing Library</h2>
      <div className="border border-gray-500 p-2 text-center">
        <WishlistButton isUserLoggedIn={true} isInWishlist={false} />
      </div>

      <div className="border border-gray-500 p-2 text-center">
        <WishlistButton isUserLoggedIn={true} isInWishlist={true} />
      </div>

      <div className="border border-gray-500 p-2 text-center">
        <WishlistButton isUserLoggedIn={false} isInWishlist={false} />
      </div>

      <div className="border border-gray-500 p-2 text-center">
        <WishlistButton isUserLoggedIn={false} isInWishlist={true} />
      </div>
    </section>
  );
};
