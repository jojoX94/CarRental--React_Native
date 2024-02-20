interface QueryLang {
  name: string;
  iso6391: string;
  iso6393: string;
  via: string;
  defaulted: boolean;
}

interface ParsedText {
  housenumber: string;
  street: string;
}

interface Query {
  text: string;
  size: number;
  private: boolean;
  lang: QueryLang;
  querySize: number;
  parser: string;
  parsed_text: ParsedText;
}

interface Engine {
  name: string;
  author: string;
  version: string;
}

interface GeocodingResponse {
  geocoding: {
    version: string;
    attribution: string;
    query: Query;
    engine: Engine;
    timestamp: number;
  };
  type: string;
  features: Feature[];
  bbox: number[];
}

interface Geometry {
  type: string;
  coordinates: number[];
}

interface Properties {
  id: string;
  gid: string;
  layer: string;
  source: string;
  source_id: string;
  country_code: string;
  name: string;
  housenumber: string;
  street: string;
  postalcode: string;
  confidence: number;
  match_type: string;
  accuracy: string;
  country: string;
  country_gid: string;
  country_a: string;
  region: string;
  region_gid: string;
  region_a: string;
  county: string;
  county_gid: string;
  county_a: string;
  locality: string;
  locality_gid: string;
  neighbourhood: string;
  neighbourhood_gid: string;
  continent: string;
  continent_gid: string;
  label: string;
}

interface Feature {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

export type {GeocodingResponse, Feature};
