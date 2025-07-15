import { Spinner } from "../components/Spinner";
import { WishlistButton } from "../components/WishlistButton";
import { useIsUserLoggedInAsync } from "../hooks/useIsUserLoggedInAsync";

export const Test07 = () => {
  const { isUserLoggedIn, isLoading } = useIsUserLoggedInAsync();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold">07 - Async testing</h2>

      <div className="border border-gray-500 p-2 text-center min-h-14 inline-flex flex-col justify-center items-center">
        {isLoading ? <Spinner /> : <WishlistButton isUserLoggedIn={isUserLoggedIn} isInWishlist={false} />}
      </div>
    </section>
  );
};
