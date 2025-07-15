export function getDiscountPercentage(products) {
  return products.reduce((acc, product) => {
    if (!product.price || !product.discountPrice) {
      return acc;
    }
    if (product.price === product.discountPrice) {
      return acc;
    }

    return (acc += (product.discountPrice / product.price) * 100);
  }, 0);
}
