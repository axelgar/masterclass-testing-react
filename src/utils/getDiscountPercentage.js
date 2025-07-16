export function getDiscountPercentage(product) {
  if (!product.price || !product.discountPrice) {
    return 0;
  }
  if (product.price === product.discountPrice) {
    return 0;
  }

  const discount = ((product.price - product.discountPrice) / product.price) * 100;
  return discount;
}
