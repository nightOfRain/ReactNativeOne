import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Image
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );


  }
}

class Blink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showText: true
    };

    // setInterval(() => {
    //   this.setState(previousStatue => {
    //     return {
    //       showText: !previousStatue.showText
    //     };
    //   })
    // }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text style={this.props.style}>{display}</Text>
    );
  }

}
export default class HelloWorldApp extends Component {
  render() {
    let pic = ['./img/98k.jpg',
      'img/98k.jpg',
      'img/98k.jpg',
      'img/98k.jpg'
    ];
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{alignItems:'center', flex: 3, backgroundColor:'steelblue'}}>
                <Greeting name="98k"  url={pic[0]} />
                <Image source={require('./img/98k.jpg')} style={{width: 193, height: 110}} />        
                <Greeting name="scar"  url={pic[1]}/>
                <Image source={require('./img/scar.jpg')} style={{width: 193, height: 110}} />        
                <Greeting name="ak" url={pic[2]}/>
                <Image source={require('./img/ak.jpg')} style={{width: 193, height: 110}} />                
                <Greeting name="m24" url={pic[3]}/>
                <Image source={require('./img/m24.jpg')} style={{width: 193, height: 110}} />                 
            
                <Blink style={styles.bigblue} text="one star" />
                <Blink style={styles.red} text="two star" />
                <Blink style={[styles.bigblue, styles.red]} text="three star" />
               
            </View>
            <View style={{
              flex: 2, 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              alignItems: 'flex-start', 
              backgroundColor: 'white',}} >
                <View style={{width:50, height:50, backgroundColor:'powderblue'}} />
                <View style={{width:50, height:50, backgroundColor:'steelblue'}} />
                <View style={{width:50, height:50, backgroundColor:'skyblue'}} />
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  }
});