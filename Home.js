import{
	createStackNavigator,TabBarBottom,TabNavigator
} from 'react-navigation';
import {
  StyleSheet,
  AppRegistry,
} from 'react-native';
import ListScreen from './ListScreen';
import NetWorkScreen from './NetWorkScreen';
import AnimateScreen from './AnimateScreen';
import InputScreen from './Textinput';


const App = TabNavigator({
		//页面路由
		Home: { //主页
			screen: ListScreen,
			navigationOptions:{
				tabBarLabel: '主页',
				tabBarIcon: ({tintColor}) => (
					<Image
						source={require('./img/home.png')}
						style={this_style.img}
					></Image>
				),
			},
		},
		Device: {
			screen: NetWorkScreen,
			navigationOptions: {
				tabBarLabel: '消息',
				tabBarIcon: ({tintColor}) => (
					<Image
						source={require('./img/message.png')}
						style={this_style.img}
					></Image>
				),
			},
		},
		me: {
			screen: AnimateScreen,
			navigationOptions: {
				tabBarLabel: 'me',
				tabBarIcon: ({tintColor}) => (
					<Image
						source={require('./img/me.png')}
						style={this_style.img}
					></Image>
				),
			},
		},
	},{
		initialRouteName: 'Home',
		tabBarPosition: 'bottom',
		//tabBarComponent: TabBarBottom, //加这个就报TabBarBottom找不到
		lazy: true,
		swipeEnabled: false,
		backBehavior: 'none',
		tabBarOptions: {
			activeTintColor: '#180',
			activeBackgroundColor: '#ff7',
			inactiveTintColor: '#333',
			inactiveBackgroundColor: '#567',
			//showIcon: true, 加这个就报tabBarIcon找不到
		},
	}
);

const mainNavigator = createStackNavigator(
{
	Main:{screen:App},
	Input:{
		screen:InputScreen
	},
});
var this_style = StyleSheet.create({
  img: {
    justifyContent: "center",
    alignItems: "center",
	width:20,
	height:20,
  },
 });
export default App;
