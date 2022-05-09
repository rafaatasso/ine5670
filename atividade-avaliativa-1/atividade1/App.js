import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Button} from 'react-native-elements'

import HomeScreen from './pages/Home'
import HabitationListScreen from './pages/HabitationList'
import HabitationDetailsScreen from './pages/HabitationDetails'
import HabitationFavoritsScreen from './pages/HabitationFavorits'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  HabitationList: {screen: HabitationListScreen},
  HabitationDetails: {screen: HabitationDetailsScreen},
  HabitationFavorits: {screen: HabitationFavoritsScreen},
});
 
const App = createAppContainer(MainNavigator);
export default App;