import React from 'react';
import { 
	Animated,
	DatePickerIOS,
	Text,
	View,
	StyleSheet,
} from 'react-native';

class FadeInView extends React.Component {

	state = {
		fadeAnim: new Animated.Value(0), //透明度初始值为 0
	}

	componentDidMount() {
		Animated.timing(
			this.state.fadeAnim,
			{
				toValue: 1,      
				duration: 10000,
			}
		).start();
	}

	render() {
		let { fadeAnim } = this.state;

		return (
			<Animated.View
				style={{
					...this.props.style,
					opacity: fadeAnim,
				}}
			>
				{this.props.children}
			</Animated.View>
		);
	}
}



export default class AnimateScreen extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = { chosenDate: new Date()};

	  this.setDate = this.setDate.bind(this);
	}

	setDate(newDate){
		this.setDate({chosenDate: newDate});
	}

	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<DatePickerIOS
					date={this.state.chosenDate}
					onDateChange={this.setDate}
				/>

				<FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
					<Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
				</FadeInView>	
			</View>
		)	
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	}
})