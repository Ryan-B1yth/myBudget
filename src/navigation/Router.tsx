import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/home/HomeScreen';
import AddIncomeScreen from '../screens/addIncome/AddIncomeScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'AddIncomeScreen'}
        component={AddIncomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Router;
