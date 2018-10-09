import React, {
  Component
} from 'react';
import {
  FlatList,
  Button,
  Image,
  KeyboardAvoidingView,
  Modal,
  Picker,
  TouchableHighlight,
  StyleSheet,
  SectionList,
  Text,
  TextInput,
  View
} from 'react-native';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      text: '',
      modalVisible: false,
      language: '',
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <View style={{flexDirection: "row",}}>

          <Button
            title="go to Jane's Movie"
            onPress={() => 
              navigate('NewPage', {name: 'Jane'})
            }
            style={{flex: 1}}
          />
          <Button
            title="go to Jane's Animate"
            onPress={() => 
              navigate('NewPage', {name: 'Jane'})
            }
            style={{flex: 1}}
          />
        </View>
        <Image
          source={{
            uri: "https://facebook.github.io/react/logo-og.png",
            method: "POST",
            headers: {
              Pragma: "no-cache"
            },
            body: "Your Body goes here"
          }}
          style={styles.images}
        />
   
        <TextInput 
          style={{height:40}}
          placeholder="Type here ok"
          onChangeText={(text)=> this.setState({text})}
          value={this.state.text}
        >
        {this.state.language}
        </TextInput>
       <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
            this.setModalVisible(false)
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text 
                  style={{marginTop:40,}}
                >Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100, backgroundColor: '#fafafa'}}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <View>
          <Text
            selectable={true}
            style={{width:50}}
            ellipsizeMode={'head'}
            numberOfLines={10}
          >First part and asdljflajsdlfjalsjdfljasldjflaksjdljfa</Text>
          <Text>second part</Text>
        </View>
          <FlatList
            data={[
              {key: 'Devin', age: 18},
              {key: 'Jackson', age: 18},
              {key: 'James', age: 18},
              {key: 'joel', age: 18},
              {key: 'John', age: 18},
              {key: 'Jillian', age: 18},
              {key: 'Jimmy', age: 18},
              {key: 'Julie', age: 18},    
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}:{item.age}years old</Text>}
            style={{paddingTop:40}}
              />
            
            

          <SectionList
            sections={[
                {title: 'D', 
                 data: [
                  {key: 'Devin', age: 18},   
                  ]
                },
                {title: 'J', 
                 data: [
                  {key: 'Jackson', age: 18},
                  {key: 'James', age: 18},
                  {key: 'Joel', age: 18},
                  {key: 'John', age: 18},
                  {key: 'Jillian', age: 18},
                  {key: 'Jimmy', age: 18},
                  {key: 'Julie', age: 18},    
                  ]
                },
              ]}
            renderItem={({item, index, section}) => <Text style={styles.item} key={index}>{item.key}:{item.age} years</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => item + index}
          />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingLeft: 20,
    paddingRight:20,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  images: {
    marginTop:20,
    width: 200,
    height: 200,
    borderColor: 'rgba(181,181,181,1.0)',
    borderWidth: 5,
    borderRadius: 20,
  }
})