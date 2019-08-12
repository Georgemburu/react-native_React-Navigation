import React from 'react'
import {View, Text, Button,StyleSheet} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'

// components imports
import Header from '../components/utils/Header'

class Home extends React.Component {

    render(){
      console.warn(this.props.navigation)
      return (
        <View>
            <Header navigation={this.props.navigation}/>
            <Text>Home</Text>
          </View>
      )
    }
}





export default Home;