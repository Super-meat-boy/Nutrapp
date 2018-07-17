import { Aliment } from './aliment';

export interface Meals {
    id: number;
    name: string;
    menuComposition: Aliment[];
    chargeGlyMeals: number;

}
