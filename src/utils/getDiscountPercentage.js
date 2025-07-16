export function getDiscountPercentage(product) {
  if (!product.price || !product.discountPrice) {
    return;
  }
  if (product.price === product.discountPrice) {
    return;
  }

  const discount = ((product.price - product.discountPrice) / product.price) * 100;

  return discount;
}
