import { AnimalData } from 'src/utils/types';
import { INIT_ANIMALS } from '../actions/animalActions';

interface AnimalState {
  savedAnimals: AnimalData[];
}

const initialState: AnimalState = {
  savedAnimals: [],
};

const animalReducer = (state = initialState, action: any): AnimalState => {
  switch (action.type) {
    case INIT_ANIMALS:
      return {
        ...state,
        savedAnimals: action.payload,
      };
    default:
      return state;
  }
};

export default animalReducer;
