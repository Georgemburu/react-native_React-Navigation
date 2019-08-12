import React from 'react'
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation'
/**
 * Screens
 */
import Login from './screens/Login'
import Home from './screens/Home'

let AppRoutes = createSwitchNavigator(
  {
    login: Login,
    home: Home
  },
  {
    initialRouteName: "login"
  }
)

let MainRoutes = createStackNavigator(
  {
    home: Home,
    auth: AppRoutes
  },
  {
    initialRouteName: "home"
  }
)


let RootNavigator = createAppContainer(MainRoutes)

export default RootNavigator