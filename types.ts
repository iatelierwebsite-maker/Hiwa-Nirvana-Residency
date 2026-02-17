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
  // Mapped from provided file list
  hero: "assets/images/Ortho_View.webp",
  
  // Villas
  villaAzure: "assets/images/Easy facing_villa_type_1.webp",
  villaSolis: "assets/images/West_facing_type_2.webp",
  villaZenith: "assets/images/South facing_villa_type-05.webp", // Using the impressive shot for Zenith
  
  // Common Villa Types / Extras
  villaNorth: "assets/images/North_facing_type_2.webp",
  villaSouth1: "assets/images/South_facing_type_1.webp",
  villaSouth2: "assets/images/South_facing_type_2.webp",
  villaSouth3: "assets/images/South_facing_type_3.webp",
  villaSouth4: "assets/images/South facing type-4.webp",
  villaSouth5: "assets/images/South facing type-5.webp",

  // Areas
  entrance: "assets/images/Entrance.webp",
  entranceNight: "assets/images/Entrance NIght View.webp",
  landscape: "assets/images/Landscape_1.webp",
  clubhouse: "assets/images/Clubhouse.webp",
  clubhouseNight: "assets/images/Clubhouse Night View.webp",
  street: "assets/images/Street view.webp",
  streetNight: "assets/images/Street Night View.webp",
  balcony: "assets/images/Balcony view.webp",
  
  // Amenities
  pool: "assets/images/Infinity pool.webp", // Matching 'Infinity pool.webp' from list
  poolSwim: "assets/images/Swimning pool.webp", // Matching typo in list 'Swimning pool.webp'
  gym: "assets/images/Gym.webp",
  indoorGames: "assets/images/Indoor games.webp",
  partyHall: "assets/images/Party hall.webp",
  
  // Legacy mappings for component compatibility
  villa1: "assets/images/Easy facing_villa_type_1.webp",
  villa2: "assets/images/West_facing_type_2.webp",
  villa3: "assets/images/South facing_villa_type-05.webp",
  interior: "assets/images/Indoor games.webp", // Fallback
  garden: "assets/images/Landscape_1.webp"
};