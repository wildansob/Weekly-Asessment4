import React from 'react';
import { View,} from 'react-native';
import Header from './components/Home/Header';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View>
      <Header/>
      <HomeScreen/>
    </View>
  )
}
