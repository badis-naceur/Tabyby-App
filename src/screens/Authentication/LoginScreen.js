import React, { useState, useEffect } from 'react';
import styles from './styles'
import axios from 'axios';
import { ActivityIndicator } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';
import NSLight from '../../../assets/fonts/NunitoSans-Light.ttf';
import NSRegular from '../../../assets/fonts/NunitoSans-Regular.ttf';
import NSBold from '../../../assets/fonts/NunitoSans-Bold.ttf';
import NSExtraBold from '../../../assets/fonts/NunitoSans-ExtraBold.ttf';

export default function LoginScreen3({navigation}) {
  const [loaded] = useFonts({
    NSLight,
    NSRegular,
    NSBold,
    NSExtraBold,
  });
  
 
 
  
  

  const [activeTab, setActiveTab] = useState('Login');

  useEffect(function () {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  function switchTab() {
    if (activeTab === 'Login') {
      setActiveTab('Register');
    } else {
      setActiveTab('Login');
    }
  }
  
 function Login() {
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const[inputs,setInputs]=React.useState({
      
      email:"",
      password:"",
   
    })
    const  handleonChange=(text,input)=>{
      setInputs(prevState=>({...prevState,[input]:text}))
    }
    
    const IP = "http://192.168.22.235:3000"
   
    const presslogin=()=>{
      
          axios.post(`${IP}/user/userlogin`,{email:inputs.email,password:inputs.password})
          .then(result=>{
            console.log(result
              );
                navigation.navigate('Home')
              
            
            }).catch(err=>{
              console.log(err,"sfqd");
              alert("ekteb mot de  passe ya stal")
            })
      
      }
    return (
      <View style={{ marginTop: 10 }}>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4 }}
            name='envelope'
            type='font-awesome'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#7F7F7F'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoCompleteType='email'
            // returnKeyType='next'
            onChangeText={(text)=>handleonChange(text,"email")}
          />
        </View>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4 }}
            name='key'
            type='font-awesome-5'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#7F7F7F'
            secureTextEntry={!showLoginPassword}
            textContentType='password'
            returnKeyType='done'
            onChangeText={(text)=>handleonChange(text,"password")}
          />
          <TouchableOpacity
            style={{ paddingVertical: 4 }}
            onPress={() => {
              setShowLoginPassword(!showLoginPassword);
            }}
          >
            <Icon
              style={{ paddingHorizontal: 4 }}
              name='eye'
              type='font-awesome'
              color='#74b3ce'
              size={22}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}  >
          <Text style={styles.buttonText} onPress={presslogin} >Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.socialLoginView}>
          <TouchableOpacity style={styles.socialLoginTouchable}>
            <Icon name='google' type='font-awesome' color='#26619c' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginTouchable}>
            <Icon name='facebook' type='font-awesome' color='#26619c' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginTouchable}>
            <Icon name='apple' type='font-awesome' color='#26619c' />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function Register() {
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
   
  const[inputs,setInputs]=React.useState({
    userName:"",
    email:"",
    password:"",
  phoneNumber:""
  })
  const  handleonChange=(text,input)=>{
    setInputs(prevState=>({...prevState,[input]:text}))
  }
  
  const IP = "http://192.168.22.235:3000"
var pressSignup=()=>{
  axios.post(`${IP}/user/usersignup`,{userName:inputs.userName,email:inputs.email,password:inputs.password,phoneNumber:inputs.phoneNumber})
        .then(result=>{
          console.log(result
            );
            navigation.navigate('Home')
          
          }).catch(err=>{
            console.log(err,"sfqd");
            alert("erreur")
          })
  
}
    return (
      <View style={{ marginTop: 10 }}>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='user'
            type='font-awesome'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='username'
            placeholderTextColor='#f1f2f6'
             autoCompleteType='name'
            name="userName"
            onChangeText={(text)=>handleonChange(text,"userName")}
            
          />
        </View>

        
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='envelope'
            type='font-awesome'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#7F7F7F'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoCompleteType='email'
            // returnKeyType='next'
            name="email"
            onChangeText={(text)=>handleonChange(text,"email")}
            
          
          />
        </View>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='phone'
            type='font-awesome'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Phone'
            placeholderTextColor='#7F7F7F'
            keyboardType='phone-pad'
            // returnKeyType='next' 
            name="phoneNumber"
            onChangeText={(text)=>handleonChange(text,"phoneNumber")}
           
            
          />
        </View>
          
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='key'
            type='font-awesome-5'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#7F7F7F'
            secureTextEntry={!showRegisterPassword}
            textContentType='password'
            returnKeyType='done'
            name="password"
            onChangeText={(text)=>handleonChange(text,"password")}
           

            
          />
          <TouchableOpacity
            style={{ paddingVertical: 4 }}
            onPress={() => {
              setShowRegisterPassword(!showRegisterPassword);
            }}
          >
            <Icon
              style={{ paddingHorizontal: 4 }}
              name='eye'
              type='font-awesome'
              color='#74b3ce'
              size={22}
            />
            
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}   onPress={pressSignup}>Register</Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              marginHorizontal: 20,
              marginTop: 30,
              fontSize: 18,
              color: '#74b3ce',
              fontFamily: 'NSBold',
            }}
          >
            Or Register with
          </Text>
          <View
            style={[
              styles.socialLoginView,
              { marginTop: 14, justifyContent: 'flex-start' },
            ]}
          >
            <TouchableOpacity
              style={[styles.socialLoginTouchable, { marginLeft: 0 }]}
            >
              <Icon name='google' type='font-awesome' color='#26619c' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialLoginTouchable}>
              <Icon name='facebook' type='font-awesome' color='#26619c' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialLoginTouchable}>
              <Icon name='apple' type='font-awesome' color='#26619c' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="large" color='#2ed573'/>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient colors={['white', '#74b3ce']} style={styles.container}>
        <Text style={styles.welcomeText}>
          {activeTab === 'Login' ? 'Welcome Back' : 'Register Now'}
        </Text>
        <View style={styles.switchTabsView}>
          <TouchableOpacity
            style={{
              borderBottomWidth: activeTab === 'Login' ? 4 : 0,
              borderBottomColor: '#74b3ce',
              paddingHorizontal: 4,
              marginRight: 14,
            }}
            onPress={() => switchTab()}
          >
            <Text style={styles.switchText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderBottomWidth: activeTab === 'Register' ? 4 : 0,
              borderBottomColor: '#74b3ce',
              paddingHorizontal: 4,
              marginRight: 14,
            }}
            onPress={() => switchTab()}
          >
            <Text style={styles.switchText}>Register</Text>
          </TouchableOpacity>
        </View>
        {activeTab === 'Login' ? <Login /> : <Register />}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

