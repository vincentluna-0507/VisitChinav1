
export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  destinations: string[];
  style: string[];
  activityLevel: 'Low' | 'Moderate' | 'High';
  overview: string;
  image: string;
  price: number;
  deposit: number;
}

export interface Activity {
  title: string;
  description: string;
  image: string;
}

export interface Destination {
  id: string;
  name: string;
  overview: string;
  summary: string;
  longDescription?: string;
  bestFor: string[];
  activityLevel: 'Low' | 'Moderate' | 'High';
  image: string;
  activities?: Activity[];
  localTips?: string[];
}

export interface TravelStyle {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface StyleCityHighlight {
  cityName: string;
  sections: {
    title: string;
    points: string[];
    image?: string;
    images?: string[];
  }[];
}

export interface TravelStyleDetail extends TravelStyle {
  introTitle: string;
  cities: StyleCityHighlight[];
}
