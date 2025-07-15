import { useState } from "react";

export const useWishlistStore = () => {
  const [list, setList] = useState(new Set());

  const update = (productId) => {
    const listCopy = new Set(list);

    if (listCopy.has(productId)) {
      listCopy.delete(productId);
    } else {
      listCopy.add(productId);
    }

    setList(listCopy);
  };

  return { list, update };
};
