import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeroIconsSolid } from "@heroicons/react/24/solid";

export const WishlistButton = ({ onClick, isInWishlist, isUserLoggedIn }) => {
  const HeartIcon = isInWishlist ? HeroIconsSolid : HeartIconOutline;

  return (
    <button
      disabled={!isUserLoggedIn}
      onClick={onClick}
      className="group/wishlist inline-flex max-w-xs cursor-pointer items-center justify-center gap-2 rounded-sm bg-red-400 px-3 py-1 font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200"
    >
      <HeartIcon className="h-5 w-5 text-white group-disabled/wishlist:text-gray-200" />
      <span className="truncate block max-w-full">{isInWishlist ? "Remove from wishlist" : "Add to wishlist"}</span>
    </button>
  );
};
