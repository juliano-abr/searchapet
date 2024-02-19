import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { initAnimals } from './store/actions/animalActions';
import { StatusBar } from 'react-native';
import { AnimalProvider } from './providers/AnimalProvider';
import { defaultAnimals } from './utils/defaultAnimalList';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  useEffect(() => {
    // Dispatch initAnimals action with defaultAnimals when the app starts
    store.dispatch(initAnimals(defaultAnimals));
  }, []);

  return (
    <Provider store={store}>
      <AnimalProvider>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </AnimalProvider>
    </Provider>
  );
};

export default App;
