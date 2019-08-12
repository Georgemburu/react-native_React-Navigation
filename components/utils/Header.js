import React from 'react'
import {View, Text, Button,StyleSheet} from 'react-native'
// import Icons from 'react-native-vector-icons/MaterialIcons'

// components imports
import Humberger from './humberger'

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        // console.warn(this.props.navigation)

      return (
        
            <View style={styles.HomeHeader}>
              <Humberger navigation = {this.props.navigation}/>
              <Text>Mombasale</Text>
            </View>
          
      )
    }
}

const styles = StyleSheet.create({
  HomeHeader: {
    elevation: 3,
    borderBottomColor: "#333",
    flexDirection: "row"
  }
})



export default Header;