import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store } from './src/features/app/store';
import { persistor } from './src/features/app/store';
import Router from './src/navigation/Router';

const App = () => {
  // TODO fix this implementation - causes incosistent scroll behavior
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <Router />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
