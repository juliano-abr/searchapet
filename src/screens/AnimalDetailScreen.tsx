import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AnimalContext } from 'src/providers/AnimalProvider';
import { strings } from 'src/utils/strings';

const AnimalDetailScreen: React.FC = ({ navigation }) => {
  const { animal } = useContext(AnimalContext);

  // Set the title dynamically
  useEffect(() => {
    navigation.setOptions({ title: animal?.name });
  }, [animal, navigation]);

  return (
    <SafeAreaProvider style={styles.container}>
      {animal && (
        <View>
          <Text style={styles.text}>{strings.ageLabel + ': ' + animal.age}</Text>
          <Text style={styles.text}>{strings.breedLabel + ': ' + animal.breed}</Text>
        </View>
      )}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5AB', // Light beige
    padding: 10,
  },
  text: {
    color: '#2C3E50', // Dark blue
    marginBottom: 5,
  },
});

export default AnimalDetailScreen;
