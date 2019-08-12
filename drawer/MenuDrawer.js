import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


class MenuDrawer extends React.Component {
    navLink(nav,text){
        return (
        <TouchableOpacity 
            style={styles.navLink}
            onPress={()=>{this.props.navigation.navigate(nav)}}
         >
            <Text style={styles.navLinkText}>{text}</Text>
        </TouchableOpacity>
        )
       
    }
    render(){
        return (
            <View style={styles.MenuDrawer}>
                <View style={styles.TopLinks}>
                    <Text>Helo World</Text>
                </View>
                <View style={styles.BottomLinks}>
                    {this.navLink('Home','Home')}
                    {this.navLink('Profile','Profile')}
                    {this.navLink('Settings','Settings')}

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    MenuDrawer: {
        backgroundColor: "black",
        flex: 1

    },
    TopLinks: {
        backgroundColor: "black",
        // height: 50
        flex: 1
    },
    BottomLinks:{
        backgroundColor: "lightgrey",
        flex: 2.5
    },
    navLink:{
        width: "100%",
        
    },
    navLinkText: {
        textAlign:"center",
        padding: 3,
        fontSize: 20,
        margin: 5,
        
    }

})

export default MenuDrawer;