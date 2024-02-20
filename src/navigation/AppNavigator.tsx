import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AnimalSearchScreen from 'src/screens/AnimalSearchScreen';
import AnimalDetailScreen from 'src/screens/AnimalDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AnimalSearch" component={AnimalSearchScreen} />
        <Stack.Screen
          name="AnimalDetail"
          component={AnimalDetailScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#F3E5AB',
            },
            headerTintColor: '#2C3E50',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
