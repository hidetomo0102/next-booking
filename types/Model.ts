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

type Review = {
  user: User;
  name: string;
  rating: number;
  comment: string;
};

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
  reviews: Review[];
  user?: User;
  createdAt: Date;
};

type Avatar = Image;

export type User = {
  name: string;
  email: string;
  password: string;
  avatar: Avatar;
  role: string;
  createdAt: Date;
  resetPasswordToken?: string;
  resetPasswordExpire?: Date;
};
