export interface Book {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  fileUrl: string;
  artist: string;
  quantity?: number;
}

export const formatToNaira = (amount: number): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(amount);
};
