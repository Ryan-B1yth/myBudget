import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import HomeScreen from './src/screens/home/HomeScreen';
import { store } from './src/features/app/store';
import { persistor } from './src/features/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaView>
          <StatusBar />
          <HomeScreen />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
