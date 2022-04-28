import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './Home'
import HabitationListScreen from './HabitationList'
import HabitationDetailsScreen from './HabitationDetails'
import HabitationFavoritsScreen from './HabitationFavorits'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  HabitationList: {screen: HabitationListScreen},
  HabitationDetails: {screen: HabitationDetailsScreen},
  HabitationFavorits: {screen: HabitationFavoritsScreen},
});
 
const App = createAppContainer(MainNavigator);
export default App;