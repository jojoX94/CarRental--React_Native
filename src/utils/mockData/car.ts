import CarModel from '../../models/carModel';

const mockData: CarModel[] = [
  {
    id: 1,
    name: 'Ford Mustang 2012',
    year: 2012,
    color: 'Gray',
    price: 25000,
    model: 'Mustang',
    brand: 'Ford',
    image: 'https://cdn.jdpower.com/Models/640x480/2012-Ford-Mustang.jpg',
    description:
      'The 2012 Ford Mustang is an iconic American muscle car known for its power and style.',
    fuelType: 'Gasoline',
    mileage: 17,
    gearType: 'Manual',
    isFavourite: false,
    isCompare: false,
    rating: 4.3,
    reviewCount: 28,
    numberOfSeats: 4,
    maxSpeed: 177,
    acceleration: 4.4,
    maxPower: 320,
  },
  {
    id: 2,
    name: 'Dodge Challenger R/T Plus',
    year: 2023,
    color: 'Black',
    price: 45000,
    model: 'Challenger R/T Plus',
    brand: 'Dodge',
    image:
      'https://cdn.jdpower.com/Models/640x480/2016-Dodge-Challenger-R-TPlus.jpg',
    description:
      'The 2023 Dodge Challenger R/T Plus is a modern American muscle car with a powerful V8 engine.',
    fuelType: 'Gasoline',
    mileage: 15,
    gearType: 'Automatic',
    isFavourite: false,
    isCompare: false,
    rating: 4.6,
    reviewCount: 35,
    numberOfSeats: 5,
    maxSpeed: 177,
    acceleration: 4.4,
    maxPower: 320,
  },
  {
    id: 3,
    name: 'Dodge Viper',
    year: 2023,
    color: 'Black',
    price: 110000,
    model: 'Viper',
    brand: 'Dodge',
    image: 'https://cdn.jdpower.com/Models/320x240/2016-Dodge-Viper.jpg',
    description:
      'The 2023 Dodge Viper is a high-performance sports car known for its speed and distinctive design.',
    fuelType: 'Gasoline',
    mileage: 12,
    gearType: 'Manual',
    isFavourite: false,
    isCompare: false,
    rating: 4.8,
    reviewCount: 42,
    numberOfSeats: 2,
    maxSpeed: 177,
    acceleration: 4.4,
    maxPower: 320,
  },
  {
    id: 4,
    name: '2010 Dodge Challenger V6',
    year: 2010,
    color: 'Blue',
    price: 18000,
    model: 'Challenger V6',
    brand: 'Dodge',
    image: 'https://cdn.jdpower.com/Models/320x240/2010-Dodge-Challenger.jpg',
    description:
      'The 2010 Dodge Challenger V6 offers classic American muscle car style with a V6 engine.',
    fuelType: 'Gasoline',
    mileage: 20,
    gearType: 'Automatic',
    isFavourite: false,
    isCompare: false,
    rating: 4.2,
    reviewCount: 22,
    numberOfSeats: 5,
    maxSpeed: 177,
    acceleration: 4.4,
    maxPower: 320,
  },
  {
    id: 5,
    name: 'Mercedes-Benz 2023 AMG GT',
    year: 2023,
    color: 'White',
    price: 150000,
    model: 'AMG GT',
    brand: 'Mercedes-Benz',
    image:
      'https://cdn.jdpower.com/Models/320x240/2023-Mercedes-Benz-AMGGT.jpg',
    description:
      'The 2023 Mercedes-Benz AMG GT is a luxury sports car known for its performance and elegance.',
    fuelType: 'Gasoline',
    mileage: 18,
    gearType: 'Automatic',
    isFavourite: false,
    isCompare: false,
    rating: 4.7,
    reviewCount: 38,
    numberOfSeats: 2,
    maxSpeed: 177,
    acceleration: 4.4,
    maxPower: 320,
  },
  {
    id: 6,
    name: '2023 Mercedes-Benz AMG GT 43',
    year: 2023,
    color: 'Black',
    price: 120000,
    model: 'AMG GT 43',
    brand: 'Mercedes-Benz',
    image:
      'https://cdn.jdpower.com/Models/640x480/2023-Mercedes-Benz-AMGGT-AMGGT43.jpg',
    description:
      'The 2023 Mercedes-Benz AMG GT 43 combines power and sophistication in a sporty package.',
    fuelType: 'Gasoline',
    mileage: 19,
    gearType: 'Automatic',
    isFavourite: false,
    isCompare: false,
    rating: 4.5,
    reviewCount: 32,
    numberOfSeats: 4,
    maxSpeed: 177,
    acceleration: 4.4,
    maxPower: 320,
  },
  {
    id: 7,
    name: '2011 Ferrari California',
    year: 2011,
    color: 'Blue',
    price: 220000,
    model: 'California',
    brand: 'Ferrari',
    image: 'https://cdn.jdpower.com/Models/400x200/2011-Ferrari-California.jpg',
    description:
      'The 2011 Ferrari California is a stunning convertible sports car with Italian flair.',
    fuelType: 'Gasoline',
    mileage: 14,
    gearType: 'Automatic',
    isFavourite: false,
    isCompare: false,
    rating: 4.9,
    reviewCount: 40,
    numberOfSeats: 2,
    maxSpeed: 177,
    acceleration: 4.4,
    maxPower: 320,
  },
  {
    id: 8,
    name: '2023 Audi e-tron GT',
    year: 2023,
    color: 'Red',
    price: 90000,
    model: 'e-tron GT',
    brand: 'Audi',
    image: 'https://cdn.jdpower.com/Models/320x240/2023-Audi-e-tronGT.jpg',
    description:
      'The 2023 Audi e-tron GT is an electric sports car that combines performance with sustainability.',
    fuelType: 'Electric',
    mileage: 250,
    gearType: 'Automatic',
    isFavourite: false,
    isCompare: false,
    rating: 4.6,
    reviewCount: 25,
    numberOfSeats: 4,
    maxSpeed: 177,
    acceleration: 4.4,
    maxPower: 320,
  },
  {
    id: 9,
    name: '2023 BMW M2',
    year: 2023,
    color: 'Red',
    price: 60000,
    model: 'M2',
    brand: 'BMW',
    image: 'https://cdn.jdpower.com/Models/320x240/2023-BMW-M2.jpg',
    description:
      'The 2023 BMW M2 is a high-performance sports car known for its agility and striking red color.',
    fuelType: 'Gasoline',
    mileage: 20,
    gearType: 'Automatic',
    isFavourite: false,
    isCompare: false,
    rating: 4.5,
    reviewCount: 30,
    numberOfSeats: 2,
    maxSpeed: 177,
    acceleration: 4.4,
    maxPower: 320,
  },
  {
    id: 10,
    name: '2023 BMW X1',
    year: 2023,
    color: 'Orange',
    price: 45000,
    model: 'X1',
    brand: 'BMW',
    image: 'https://cdn.jdpower.com/Models/320x240/2023-BMW-X1.jpg',
    description:
      'The 2023 BMW X1 is a compact SUV with a vibrant orange exterior and versatile features.',
    fuelType: 'Gasoline',
    mileage: 24,
    gearType: 'Automatic',
    isFavourite: false,
    isCompare: false,
    rating: 4.4,
    reviewCount: 28,
    numberOfSeats: 5,
    maxSpeed: 177,
    acceleration: 4.4,
    maxPower: 320,
  },
  {
    id: 11,
    name: '2023 BMW X3M',
    year: 2023,
    color: 'Blue',
    price: 75000,
    model: 'X3M',
    brand: 'BMW',
    image: 'https://cdn.jdpower.com/Models/320x240/2023-BMW-X3M.jpg',
    description:
      'The 2023 BMW X3M is a sporty SUV with a bold blue color and exhilarating performance.',
    fuelType: 'Gasoline',
    mileage: 18,
    gearType: 'Automatic',
    isFavourite: false,
    isCompare: false,
    rating: 4.7,
    reviewCount: 35,
    numberOfSeats: 5,
    maxSpeed: 177,
    acceleration: 4.4,
    maxPower: 320,
  },
  {
    id: 12,
    name: '2023 BMW X4M',
    year: 2023,
    color: 'Yellow',
    price: 78000,
    model: 'X4M',
    brand: 'BMW',
    image: 'https://cdn.jdpower.com/Models/320x240/2023-BMW-X4M.jpg',
    description:
      'The 2023 BMW X4M is a dynamic SUV with a vibrant yellow color and exceptional handling.',
    fuelType: 'Gasoline',
    mileage: 17,
    gearType: 'Automatic',
    isFavourite: false,
    isCompare: false,
    rating: 4.6,
    reviewCount: 32,
    numberOfSeats: 5,
    maxSpeed: 177,
    acceleration: 4.4,
    maxPower: 320,
  },
  {
    id: 13,
    name: '2023 BMW Z4',
    year: 2023,
    color: 'Purple',
    price: 65000,
    model: 'Z4',
    brand: 'BMW',
    image: 'https://cdn.jdpower.com/Models/320x240/2023-BMW-Z4.jpg',
    description:
      'The 2023 BMW Z4 is a convertible sports car with an eye-catching purple exterior and spirited performance.',
    fuelType: 'Gasoline',
    mileage: 19,
    gearType: 'Automatic',
    isFavourite: false,
    isCompare: false,
    rating: 4.8,
    reviewCount: 38,
    numberOfSeats: 2,
    maxSpeed: 177,
    acceleration: 4.4,
    maxPower: 320,
  },
];

const shuffledMockData = [...mockData].sort(() => Math.random() - 0.5);
export default shuffledMockData;
