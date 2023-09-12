import ICarProvider from './providers/carProvider';
import FirebaseCarProvider from './providers/firebaseCarProvider';

class CarService {
  private static instance: CarService;
  private carProvider: ICarProvider;

  constructor(provider: ICarProvider) {
    this.carProvider = provider;
  }

  static getInstance(
    provider: ICarProvider = new FirebaseCarProvider(),
  ): CarService {
    if (!CarService.instance) {
      CarService.instance = new CarService(provider);
    }
    return CarService.instance;
  }

  static firebaseInstance() {
    return new CarService(new FirebaseCarProvider());
  }

  async initialize() {
    await this.carProvider.initialize();
  }

  async getCars() {
    return this.carProvider.getCars();
  }
}

export default CarService;
