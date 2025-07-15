import { WishlistButton } from "../components/WishlistButton";
import { useIsUserLoggedInRandom } from "../hooks/useIsUserLoggedInRandom";
import { useRerender } from "../hooks/useRerender";

export const Test05 = () => {
  const isUserLoggedIn = useIsUserLoggedInRandom();
  const rerender = useRerender();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold">05 - Mocking</h2>

      <button
        onClick={rerender}
        className="cursor-pointer w-fit rounded-sm bg-gray-900 px-2 py-1 text-xs font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
      >
        Rerender
      </button>

      <div className="border border-gray-500 p-2 text-center">
        <WishlistButton isUserLoggedIn={isUserLoggedIn} isInWishlist={false} />
      </div>
    </section>
  );
};
