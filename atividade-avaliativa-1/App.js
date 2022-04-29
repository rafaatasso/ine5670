import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SplashScreen from './pages/Splash'
import HomeScreen from './pages/Home'
import HabitationListScreen from './pages/HabitationList'
import HabitationDetailsScreen from './pages/HabitationDetails'
import HabitationFavoritsScreen from './pages/HabitationFavorits'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  HabitationList: {screen: HabitationListScreen},
  Splash: {screen: SplashScreen},
  HabitationDetails: {screen: HabitationDetailsScreen},
  HabitationFavorits: {screen: HabitationFavoritsScreen},
});
 
const App = createAppContainer(MainNavigator);
export default App;