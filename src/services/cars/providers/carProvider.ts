import CarModel from '../../../models/carModel';

abstract class ICarProvider {
  abstract initialize(): Promise<any>;

  abstract getCars(): Promise<CarModel[]>;
}

export default ICarProvider;
