export function getDiscountPercentage(products) {
  const discount = products.reduce((acc, product) => {
    if (!product.price || !product.discountPrice) {
      return acc;
    }
    if (product.price === product.discountPrice) {
      return acc;
    }

    const discountPercent = ((product.price - product.discountPrice) / product.price) * 100;
    return acc + discountPercent;
  }, 0);

  return discount ? discount.toFixed(2) : 0;
}
