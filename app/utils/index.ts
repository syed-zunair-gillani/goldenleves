export default async function checkImageUrl(url: any) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
}

export const calculateTotalPrice = (items:any) => {
  let totalPrice = 0;
  items.forEach((item:any) => {
    totalPrice += item.quantity * item.price;
  });
  return totalPrice.toFixed(2);
};
