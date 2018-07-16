import { Aliment } from './aliment';

export interface Meals {
    id: number;
    name: String;
    listeAliment: Aliment[];
    chargeGlyMeals: number;

}
