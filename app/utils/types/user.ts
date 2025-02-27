export interface User {
  id?: string;
  email?: string | null;
  phoneNumber?: string;
  firstName: string;
  middleName?: string | null;
  lastName: string;
  deliveryAddress?: string;
  createdAt?: Date;
  updatedAt?: Date;
  gender?: "M" | "F" | "O";
  dob?: string;
  avatarUrl?: string;
}
