import{
	createStackNavigator,
} from 'react-navigation';

import ListScreen from './ListScreen';
import NetWorkScreen from './NetWorkScreen';
import AnimateScreen from './AnimateScreen'
const App = createStackNavigator(
{
	List: { screen: ListScreen},
	Movie: { screen: NetWorkScreen},
	Animate: { screen: AnimateScreen},
});

export default App;