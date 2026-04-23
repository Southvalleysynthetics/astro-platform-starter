import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ServiceMenuScreen from './screens/ServiceMenuScreen';
import SchedulingScreen from './screens/SchedulingScreen';
import PaymentScreen from './screens/PaymentScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ServiceMenu" component={ServiceMenuScreen} />
        <Stack.Screen name="Scheduling" component={SchedulingScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}