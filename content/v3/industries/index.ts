import type { Industry } from "../types";
import { industry as beauty_and_skincare_brands } from "./beauty-and-skincare-brands";
import { industry as car_rental_and_dealers } from "./car-rental-and-dealers";
import { industry as clinics_and_dental } from "./clinics-and-dental";
import { industry as fashion_and_abaya_brands } from "./fashion-and-abaya-brands";
import { industry as jewellery_and_watch_brands } from "./jewellery-and-watch-brands";
import { industry as perfume_and_oud_brands } from "./perfume-and-oud-brands";
import { industry as professional_services } from "./professional-services";
import { industry as real_estate_agencies } from "./real-estate-agencies";
import { industry as restaurants_and_cafes } from "./restaurants-and-cafes";
import { industry as trading_and_wholesale } from "./trading-and-wholesale";

export const INDUSTRIES: Industry[] = [perfume_and_oud_brands, fashion_and_abaya_brands, jewellery_and_watch_brands, beauty_and_skincare_brands, restaurants_and_cafes, real_estate_agencies, clinics_and_dental, trading_and_wholesale, professional_services, car_rental_and_dealers];
export const industryBySlug = (s: string) => INDUSTRIES.find((i) => i.slug === s);
