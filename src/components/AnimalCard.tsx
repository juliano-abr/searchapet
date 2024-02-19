import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { strings } from 'src/utils/strings';
import { AnimalData } from 'src/utils/types';

type Props = {
  animal: AnimalData;
  onPress: (animal: AnimalData) => void;
};

const AnimalCard: React.FC<Props> = ({ animal, onPress }) => {
  return (
    <Pressable style={styles.card} onPress={() => onPress(animal)}>
      <Text style={styles.text}>{strings.nameLabel + ': ' + animal.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default AnimalCard;
