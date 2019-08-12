import React from 'react'
import {View, Text, Button, StyleSheet, TextInput, Alert,Picker} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Humberger from '../components/utils/humberger'

function ShoppingCartIcon(props){
  return (
    <View>
      <Icon name="shopping-cart" size={props.size} color={props.color} style={props.styles}/>
    </View>
  )
} 
class Login extends React.Component {
    static navigationOptions = {
      headerTitle: "Mombasale",
      headerRight: <Text style={{marginRight: 30, color: "grey"}} >Online Shopping</Text>
    }
    constructor(props){
        super(props)
        this.defaultCountyPickerText = "select County...";
        this.LoginPage = "login"
        this.SignUpPage = "signUp"
        this.page = null;
        this.state = {
          goToCreateAccountPage: false,
          newUser: {
            Fullname: "",
            Email: "",
            Telephone:"",
            County: this.defaultCountyPickerText
          },
          loginDetails: {
            usernameORemail: "",
            password: ""
          }
        }
        this.requiredFields = ["Fullname","Email","Telephone","County"]
    }
    handleInputChange = ($name,txt)=>{
      let newUser = {}
      newUser[$name] = txt
      this.setState({
        ...this.state,
        newUser: {
          ...this.state.newUser,
          ...newUser
        }
      })
    }
    handleCreateAccountBtn = ()=>{
      Alert.alert(this.page)


    }
    handleLoginBtn = ()=>{
      // Alert.alert(this.page)
      
    }
    render(){
      if(this.page==this.LoginPage){
        this.state.newUser = {
          Fullname: "",
          Email: "",
          Telephone:"",
          County: this.defaultCountyPickerText
        }
      }else if(this.page==this.SignUpPage){
        this.state.loginDetails = {
          usernameORemail: "",
          password: ""
        }
      }
      return (
        <View>
          <View style={styles.topHeader}>
            <Text style={styles.brandName}>Mombasale</Text>
            <Text style={styles.subBrand}>Online Shopping</Text>
          </View>
        {this.state.goToCreateAccountPage===true? (
            <View style = {[styles.loginPage, {marginTop: -30}]}>
            <Text style={{display:"none"}}>{this.page = this.SignUpPage}</Text>
            <Text style={{fontWeight:"bold", fontSize:20}}>Sign Up</Text>
            <View style = {styles.formView}>
              <View>
                <TextInput placeholder="Fullname" style={styles.textInput} onChangeText={(txt)=> this.handleInputChange("Fullname",txt)}></TextInput>
                <Icon name="account-circle" style={styles.icon} size={20}/>
              </View>
              <View>
                <TextInput placeholder="Email" style={styles.textInput} onChangeText={(txt)=> this.handleInputChange("Email",txt)}></TextInput>
                <Icon name="email" style={styles.icon} size={20}/>
              </View>
              <View>
                <TextInput placeholder="Telephone" style={styles.textInput} onChangeText={(txt)=> this.handleInputChange("Telephone",txt)}></TextInput>
                <Icon name="phone" style={styles.icon} size={20}/>
              </View>
              <Picker
                selectedValue = {this.state.newUser.County}
                onValueChange = {(itemValue, itemIndex)=> this.setState({
                  ...this.state,
                  newUser: {
                    ...this.state.newUser,
                    County: itemValue
                  }
                })}
              >
                <Picker.Item label={this.defaultCountyPickerText} value={this.defaultCountyPickerText}></Picker.Item>
                <Picker.Item label="Nairobi" value="Nairobi"></Picker.Item>
                <Picker.Item label="Kiambu" value="Kiambu"></Picker.Item>
                <Picker.Item label="Thika" value="Thika"></Picker.Item>

              </Picker>
              <View>
                <TextInput placeholder="Password" style={styles.textInput} secureTextEntry = {true} onChangeText={(txt)=> this.handleInputChange("Password",txt)}></TextInput>
                <Icon name="lock" style={styles.icon} size={20}/>
              </View>

            </View>
            <Button style={styles.loginBtn} title="Create Account" onPress={()=>{this.handleCreateAccountBtn()}}/>
            <View style={styles.dontHaveACview}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={()=>{
                    this.setState({
                      ...this.state,
                      goToCreateAccountPage: false
                    })
                }}>
                  <Text style={{color: "blue"}}>Sign In</Text>
                </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style = {styles.loginPage}>
          <Text style={{display:"none"}}>{this.page = this.LoginPage }</Text>
          <ShoppingCartIcon size={70} color="green" styles={{position: "absolute", top: -100, left: -30}}/>
          <Text style={{fontWeight:"bold", fontSize:20}}>Login</Text>
          <View style = {styles.formView}>
          <View>
            <TextInput placeholder="username/email" style={styles.textInput} keyboardType="email-address"></TextInput>
            <Icon name="account-circle" style={styles.icon} size={20}/>
          </View>
          <View>
            <TextInput placeholder="password" style={styles.textInput} secureTextEntry={true}></TextInput>
            <Icon name="lock" style={styles.icon} size={20}/>
          </View>

          </View>
          <Button style={styles.loginBtn} title="login" onPress={()=>{this.handleCreateAccountBtn()}}/>
          <View style={styles.dontHaveACview}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={()=>{
                  this.setState({
                    ...this.state,
                    goToCreateAccountPage: true
                  })
              }}>
                <Text style={{color: "blue"}}>Create Account</Text>
              </TouchableOpacity>
          </View>
        </View>
        )}
        </View>
      )
    }
  }


  const styles = StyleSheet.create({
    topHeader:{
      height: 40,
      color: "white",
      elevation: 3,
      borderColor: "black",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    },
    brandName: {
      fontSize: 20,
      fontWeight: "bold",
    },
    subName:{
      color: "#5e5e5e"
    },
    icon: {
      position: "absolute",
      top: 14
    },
    loginPage :{
      backgroundColor: "white",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
    textInput :{
      borderBottomWidth: 2,
      borderBottomColor: "black",
      paddingLeft: 30,
      paddingBottom: 0
    },
    formView :{
      width: "60%",
      marginBottom: 5
    },
    loginBtn :{
      // marginTop: 3
      
    },
    dontHaveACview:{
      marginTop: 10,
      justifyContent: "center",
      alignItems: "center"
    }
  })

export default Login
