import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  //untuk auto reaload API
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({data: json});
        console.log(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <SafeAreaView>
          <FlatList
            data={this.state.data}
            renderItem={({item,index}) => 
            <View style={{margin: 20}}>
              <Text>Title: {item.title}</Text>
              <Text>Body: {item.body}</Text>
            </View>}
            keyExtractor={item => item.id}
          />
      </SafeAreaView>
    );
  }
}
