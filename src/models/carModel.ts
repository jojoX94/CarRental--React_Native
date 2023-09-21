interface CarModel {
  id: number;
  name: string;
  year: number;
  color: string;
  price: number;
  model: string;
  brand: string;
  image: string;
  description: string;
  fuelType: string;
  mileage: number;
  gearType: string;
  isFavourite: boolean;
  isCompare: boolean;
  rating: number;
  reviewCount: number;
  numberOfSeats: number;
  maxSpeed: number;
  acceleration: number;
  maxPower: number;
}

export default CarModel;
