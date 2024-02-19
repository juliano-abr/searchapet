import React, { createContext, useState } from 'react';
import { AnimalData } from 'src/utils/types';

interface AnimalContextType {
  animal: AnimalData | null;
  setAnimal: (animal: AnimalData) => void;
}

export const AnimalContext = createContext<AnimalContextType>({
  animal: null,
  setAnimal: () => {},
});

export const AnimalProvider = ({ children }: { children: React.ReactNode }) => {
  const [animal, setAnimal] = useState<AnimalData | null>(null);

  return <AnimalContext.Provider value={{ animal, setAnimal }}>{children}</AnimalContext.Provider>;
};
