import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Header from '../components/utils/Header'

function Profile(props){
    return (
        <View>
              <Header navigation = {props.navigation}/>
            <Text>Profile</Text>
        </View>
    )
}

export default Profile