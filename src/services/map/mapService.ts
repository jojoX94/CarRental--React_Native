import MAP from '../../constants/map';
import {GeocodingResponse} from '../../models/featuresModel';

class MapService {
  private static instance: MapService;

  private constructor() {}

  static getInstance(): MapService {
    if (!MapService.instance) {
      MapService.instance = new MapService();
    }
    return MapService.instance;
  }

  async getAutocompleteSuggestions(query: string): Promise<GeocodingResponse> {
    return fetch(
      `${MAP.API_URL}/autocomplete?text=${encodeURIComponent(query)}&api_key=${
        MAP.API_KEY
      }`,
    )
      .then(response => response.json())
      .catch(error => {
        console.error('Error occurred while fetching address:', error);
        throw error;
      });
  }
}

export default MapService;
