/** @format **/
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Image,
	Text,
	View,
} from 'react-native';
import {
	StackNavigator,
	TabNavigator
} from 'react-navigation';

import ListScreen from './ListScreen';
import NetWorkScreen from './NetWorkScreen';
import AnimateScreen from './AnimateScreen';
import InputScreen from './home/Textinput';
import {
	name as appName
} from './app.json';

//底部导航路由

const MainScreenNavigator = TabNavigator({
		//页面路由
		Home: { //主页
			screen: ListScreen,
			navigationOptions:{
				tabBarLabel: '主页',
				tabBarIcon: ({focused}) => {

					if (focused) {
						return (<Image
						source={require('./img/home_active.png')}
						style={this_style.img}
						></Image>);
					}
					return (<Image
					source={require('./img/home.png')}
					style={this_style.img}
					></Image>);
					
					
				},
			},
		},
		Device: {
			screen: NetWorkScreen,
			navigationOptions: {
				tabBarLabel: '消息',
				tabBarIcon: ({focused}) => {
					if(focused){
						return (<Image
						source={require('./img/message_active.png')}
						style={this_style.img}
						></Image>);
					}else{
						return (<Image
						source={require('./img/message.png')}
						style={this_style.img}
						></Image>);
					}
				},
			},
		},
		me: {
			screen: AnimateScreen,
			navigationOptions: {
				tabBarLabel: 'me',
				tabBarIcon: ({focused}) => {
					if(focused){
						return (<Image
						source={require('./img/me_active.png')}
						style={this_style.img}
						></Image>);
					}else{
						return (<Image
						source={require('./img/me.png')}
						style={this_style.img}
						></Image>);
					}
				},
			},
		},
	},{
		initialRouteName: 'Home', //默认显示页面
		tabBarPosition: 'bottom', //对齐方式，底部
		//tabBarComponent: TabBarBottom, //加这个就报TabBarBottom找不到
		lazy: true,
		swipeEnabled: false, //禁止左右滑动
		backBehavior: 'none', //禁止返回键

		tabBarOptions: {
			activeTintColor: '#1296db',			
			inactiveTintColor: '#000',
			upperCaseLabel: false,
			pressColor: '#788493',
			pressOpacity: 0.8,			
			indicatorStyle: {height:0},//去掉下面选中的线条
			showIcon: true, //加这个就报tabBarIcon找不到
			style: {
				backgroundColor: '#fcfcfc',
				paddingBottom: 0,
				borderTopWidth: 0.5,
				borderTopColor: '#ccc',
			},
			labelStyle: {
				fontSize: 12,
				margin: 1,
			}
		},
	}
);
//要引入的跳转页面
const MyNavigatior = StackNavigator({
	Main:{screen:MainScreenNavigator},
	NewPage:{screen:InputScreen},
});

var this_style = StyleSheet.create({
  img: {
    justifyContent: "center",
    alignItems: "center",
	width:20,
	height:20,
  },
 });
AppRegistry.registerComponent(appName, () => MyNavigatior);

