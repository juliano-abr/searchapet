import React from 'react';
import { useContext, useState } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AnimalData } from 'src/utils/types';
import { AnimalContext } from 'src/providers/AnimalProvider';
import AnimalCard from 'src/components/AnimalCard';
import { StoreType } from 'src/store';
import { strings } from 'src/utils/strings';

const AnimalSearchScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const savedAnimals = useSelector((state: StoreType) => state.animal.savedAnimals);
  const { setAnimal } = useContext(AnimalContext);
  const navigation = useNavigation();

  const filteredAnimals = searchTerm
    ? savedAnimals.filter((animal: AnimalData) =>
        animal.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : savedAnimals;

  const navigateToAnimalDetail = (animal: AnimalData) => {
    setAnimal(animal);
    navigation.navigate('AnimalDetail' as never);
  };

  const renderItem = ({ item }: { item: AnimalData }) => (
    <AnimalCard animal={item} onPress={navigateToAnimalDetail} />
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={strings.searchPlaceholder}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredAnimals}
        keyExtractor={(item: AnimalData) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5AB', // Light beige
    padding: 10,
  },
});

export default AnimalSearchScreen;
