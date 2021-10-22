import { StatusBar } from 'expo-status-bar';
import React ,{Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
export default class App extends Component{
  
render(){
  return (
    <AppContainer/>
  );
}

}
const TabNavigator = createBottomTabNavigator({
  fb:{screen:fbScreen},
  in:{screen:inScreen}
})
const AppContainer=createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
