import ICarProvider from './carProvider';
import firestore from '@react-native-firebase/firestore';
import CarModel from '../../../models/carModel';
import mockData from '../../../utils/mockData/car';

class FirebaseCarProvider implements ICarProvider {
  carsCollection = firestore().collection('cars');

  async initialize(): Promise<any> {
    try {
      // count cars in firestore collection and if it is 0, then add cars where provided by CarModel array
      const cars = await this.carsCollection.get();
      if (cars.size === 0 || cars.size === 1) {
        mockData.forEach(async car => {
          await this.carsCollection.add(car);
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async getCars(): Promise<CarModel[]> {
    try {
      const cars = await this.carsCollection.get();
      return cars.docs.map(car => {
        return {
          id: car.id,
          name: car.data().name,
          year: car.data().year,
          color: car.data().color,
          price: car.data().price,
          model: car.data().model,
          brand: car.data().brand,
          image: car.data().image,
          description: car.data().description,
          fuelType: car.data().fuelType,
          mileage: car.data().mileage,
          gearType: car.data().gearType,
          isFavourite: car.data().isFavourite,
          isCompare: car.data().isCompare,
          rating: car.data().rating,
          reviewCount: car.data().reviewCount,
          numberOfSeats: car.data().numberOfSeats,
          maxSpeed: car.data().maxSpeed,
          acceleration: car.data().acceleration,
          maxPower: car.data().maxPower,
        } as unknown as CarModel;
      });
    } catch (error) {
      throw error;
    }
  }
}

export default FirebaseCarProvider;
