import { AnimalData } from 'src/utils/types';

export const INIT_ANIMALS = 'INIT_ANIMALS';

export const initAnimals = (animals: AnimalData[]) => {
  return {
    type: INIT_ANIMALS,
    payload: animals,
  };
};
