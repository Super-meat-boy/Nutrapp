import { Aliment } from './aliment';

export interface Meals {
    id: number;
    name: string;
    listeAliment: Aliment[];
    chargeGlyMeals: number;

}
