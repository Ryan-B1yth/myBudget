import React from 'react';
import {
  Dimensions,
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
import Router from './src/navigation/Router';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <View
              style={{
                height: Dimensions.get('window').height,
                backgroundColor: 'red',
              }}>
              <Router />
            </View>
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
