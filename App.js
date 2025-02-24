import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import FoodOverviewScreen from './screens/FoodOverviewScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#eee0e5' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#eee0e5' },
        }}
      >
        <Stack.Screen name='Categories' component={CategoriesScreen} />
        <Stack.Screen name='Foods' component={FoodOverviewScreen} />
        <Stack.Screen name='FoodDetail' component={FoodDetailScreen} options={{title:"İçerik"}} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
