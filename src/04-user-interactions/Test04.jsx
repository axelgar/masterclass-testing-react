import { WishlistButton } from "../components/WishlistButton";
import { useWishlistStore } from "../hooks/useWishlistStore";

const ID = "1";

export const Test04 = () => {
  const { list, update } = useWishlistStore();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold">04 - User interactions</h2>
      <div className="border border-gray-500 p-2 text-center">
        <WishlistButton isUserLoggedIn={true} isInWishlist={list.has(ID)} onClick={() => update(ID)} />
      </div>
    </section>
  );
};
