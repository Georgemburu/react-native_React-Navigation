import React from 'react'
import {View, Text, Dimensions} from 'react-native'
import {createDrawerNavigator, createAppContainer} from 'react-navigation'

import Home from '../screens/Home'
import MenuDrawer from './MenuDrawer'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'


const WIDTH = Dimensions.get("window").width
const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent: ({navigation}) => (<MenuDrawer navigation={navigation}/>)
}
const DrawerNavigator = createDrawerNavigator(
    {
        Home: Home,
        Profile: Profile,
        Settings: Settings
    },
    DrawerConfig
)

let Drawer = createAppContainer(DrawerNavigator)
export default Drawer;