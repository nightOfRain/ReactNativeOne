import React, {
  Component
} from 'react';
import {
  FlatList,
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  SectionList,
  Text,
  View
} from 'react-native';

var MOCKED_MOVIES_DATA = [{
  title: "标题",
  year: "2015",
  posters: {thumbnail: "http://i.imgur.com/UePbdph.jpg"}
}];
var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class NetWorkScreen extends Component {
  static navigationOptions = {
    title: 'Hi jone！',
  };
  constructor(props) {
    super(props);
  
    this.state = {
      //movies: null, //这里放数据集合
      data: [],
      loaded: false,
    };

    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }
  //这个函数是react-native生命周期中，当组件加载完毕后会执行一次
  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {        
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          //movies: responseData.movies,
          data: this.state.data.concat(responseData.movies),
          loaded: true,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {  
    if(!this.state.loaded) {
      return this.renderLoadingView();
    }

    //这样处理只能显示第一条数据
    //var movie = this.state.movies[0];
    //return this.renderMovie(movie);

    //Flat List展示全部数据
    return(
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
      />
    )
  }
   
  renderLoadingView (){
    return(
      <View style={styles.container}>

          <Text>正在加载电影数据。。。。。。</Text>
     
      </View>
    );
  }
      
    

  renderMovie({ item }) {
    return(
      
      
      <View style={styles.container}>
        <Image source={{uri: item.posters.thumbnail}} style={styles.thumbnail}/>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
      
    );
  }
  

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FcFF"
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center'
  },
  thumbnail: {
    marginLeft: 20,
    width: 53,
    height: 81,
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});