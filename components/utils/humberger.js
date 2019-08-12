import React from 'react'
import {TouchableOpacity} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'

function Humberger(props){
    // console.warn(props.navigation)
    return (
    
        <TouchableOpacity
            onPress = {()=>{props.navigation.toggleDrawer()}}
        >
            <Icons 
                name="view-headline"
                size = {40}
            />
        </TouchableOpacity>
    )
}
export default Humberger;