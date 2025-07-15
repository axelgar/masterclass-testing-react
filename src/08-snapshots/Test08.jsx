import { WishlistButton } from "../components/WishlistButton";

export const Test08 = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold">08 - Snapshots</h2>
      <div className="border border-gray-500 p-2 text-center">
        <WishlistButton isUserLoggedIn={true} isInWishlist={false} />
      </div>
    </section>
  );
};
