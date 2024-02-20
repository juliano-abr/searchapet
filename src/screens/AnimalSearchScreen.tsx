import React from 'react';
import { useContext, useState } from 'react';
import { FlatList, TextInput, StyleSheet, View, Platform, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { AnimalData } from 'src/utils/types';
import { AnimalContext } from 'src/providers/AnimalProvider';
import AnimalCard from 'src/components/AnimalCard';
import { StoreType } from 'src/store';
import { strings } from 'src/utils/strings';

const AnimalSearchScreen: React.FC = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const savedAnimals = useSelector((state: StoreType) => state.animal.savedAnimals);
  const { setAnimal } = useContext(AnimalContext);

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
        style={styles.text}
        placeholder={strings.searchPlaceholder}
        placeholderTextColor={'#000'}
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 48,
  },
  text: {
    flex: 0,
    fontSize: 16,
    color: '#2C3E50', // Dark blue
    marginBottom: 16,
  },
});

export default AnimalSearchScreen;
