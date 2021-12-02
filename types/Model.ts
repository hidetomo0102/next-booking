type PaymentInfo = {
  id: string;
  status: string;
};

export type Booking = {
  room: Room;
  user: User;
  checkInDate: Date;
  checkOutDate: Date;
  amountPaid: number;
  daysOfStay: number;
  paymentInfo: PaymentInfo;
  paidAt: Date;
  createdAt?: Date;
};

type Image = {
  public_id: string;
  url: string;
};

type Cateogry = {};

export type Room = {
  name: string;
  pricePerNight: number;
  description: string;
  address: string;
  guestCapacity: number;
  numOfBeds: number;
  internet?: boolean;
  breakfast?: boolean;
  airConditioned?: boolean;
  petsAllowed?: boolean;
  roomClearning?: boolean;
  ratings?: number;
  numOfReviews?: number;
  images: Image[];
  category: "King" | "Twins" | "Single";
};

export type User = {};
