export interface Bank {
  id: string;
  name: string;
  homeLoanRate: number;
  personalLoanRate: number;
  color: string;
}

export interface VillaConfig {
  id: string;
  name: string;
  type: string;
  facing: string;
  size: string;
  image: string;
  features: string[];
  description: string;
  tagColor: string;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  icon: string;
  image: string;
  features: string[];
  gallery?: string[];
}

export const PLACEHOLDER_IMAGES = {
  // Hero
  hero: "./assets/images/Ortho_View.webp",
  
  // Villas (Main Configurations)
  villaAzure: "./assets/images/Easy%20facing_villa_type_1.webp",
  villaSolis: "./assets/images/West_facing_type_2.webp",
  villaZenith: "./assets/images/South%20facing_villa_type-05.webp",
  
  // Additional Villa Variations (for gallery/slider)
  villaNorth: "./assets/images/North_facing_type_2.webp",
  villaSouth1: "./assets/images/South_facing_type_1.webp",
  villaSouth2: "./assets/images/South_facing_type_2.webp",
  villaSouth3: "./assets/images/South_facing_type_3.webp",
  villaSouth4: "./assets/images/South%20facing%20type-4.webp",
  villaSouth5: "./assets/images/South%20facing%20type-5.webp",

  // Areas / Views
  entrance: "./assets/images/Entrance.webp",
  entranceNight: "./assets/images/Entrance%20NIght%20View.webp", // Note: 'NIght' capital I
  landscape: "./assets/images/Landscape_1.webp",
  clubhouse: "./assets/images/Clubhouse.webp",
  clubhouseNight: "./assets/images/Clubhouse%20Night%20View.webp",
  street: "./assets/images/Street%20view.webp",
  streetNight: "./assets/images/Street%20Night%20View.webp",
  balcony: "./assets/images/Balcony%20view.webp",
  
  // Amenities
  pool: "./assets/images/Infinity%20pool.webp",
  poolSwim: "./assets/images/Swimning%20pool.webp", // Note: Typo 'Swimning' maintained from file list
  gym: "./assets/images/Gym.webp",
  indoorGames: "./assets/images/Indoor%20games.webp",
  partyHall: "./assets/images/Party%20hall.webp",
  
  // Legacy mappings for backwards compatibility
  villa1: "./assets/images/Easy%20facing_villa_type_1.webp",
  villa2: "./assets/images/West_facing_type_2.webp",
  villa3: "./assets/images/South%20facing_villa_type-05.webp",
  interior: "./assets/images/Indoor%20games.webp",
  garden: "./assets/images/Landscape_1.webp"
};