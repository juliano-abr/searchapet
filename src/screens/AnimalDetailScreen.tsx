import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimalContext } from 'src/providers/AnimalProvider';
import { strings } from 'src/utils/strings';

const AnimalDetailScreen: React.FC = () => {
  const { animal } = useContext(AnimalContext);

  return (
    <View style={styles.container}>
      {animal && (
        <View>
          <Text style={styles.text}>{strings.nameLabel + ': ' + animal.name}</Text>
          <Text style={styles.text}>{strings.ageLabel + ': ' + animal.age}</Text>
          <Text style={styles.text}>{strings.breedLabel + ': ' + animal.breed}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5AB', // Light beige
    padding: 10,
  },
  card: {
    backgroundColor: '#E5989B', // Light coral
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    color: '#2C3E50', // Dark blue
    marginBottom: 5,
  },
});

export default AnimalDetailScreen;
