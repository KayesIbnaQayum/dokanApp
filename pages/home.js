import React, {useState,useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TextInput, ScrollView, Button, Alert,TouchableWithoutFeedback, FlatList, ImageBackground} from 'react-native';

  

export default Home = ({ navigation })=>
{

    return(
        <SafeAreaView style={{backgroundColor:'#F8F8F8', height:'100%',flexDirection:'column'}}>
            <View>
            <Image
                                    source={require('../assets/img/logo.png')}
                                    style={styles.logo}
                                    resizeMode='contain'
                                />
                
            </View>
            <View style={{top:140}}>
                <Text style={styles.textSignIn}>Sign In</Text>
            </View>
            <View style={{marginTop:170, }}>
            <View style={{flexDirection:'row', alignSelf:'center', marginTop:15}}>
            <View style={{elevation:4, left:40, alignSelf:'center'}}>
                <Image
                                        source={require('../assets/img/email.png')}
                                        style={{height:18, width:18}}
                                        resizeMode='contain'
                                    />
            </View>
            <TextInput
                    style={[styles.textInput,{elevation:3,paddingLeft:60}]}
                    placeholder="Email"
                />
            </View>

            <View style={{flexDirection:'row', alignSelf:'center', marginTop:15}}>
            <View style={{elevation:4, left:40, alignSelf:'center'}}>
                <Image
                                        source={require('../assets/img/lock.png')}
                                        style={{height:18, width:18}}
                                        resizeMode='contain'
                                    />
            </View>
            <TextInput
                    style={[styles.textInput,{elevation:3,paddingLeft:60}]}
                    placeholder="Password"
                />
            </View>

            </View>
            <Text style={styles.textForget}>Forgot Password?</Text>

            <TouchableWithoutFeedback
            onPress={() =>
                navigation.navigate("ProductPage")
                    }
            >
            <View style={[styles.loginBtn,{elevation:1}]}>
                    <View style={{flex:1, flexDirection:'row', alignSelf:'center'}}>
                        <Text style={[styles.loginBtnText,{justifyContent: 'space-evenly'}]}>Login</Text>
                    </View>
                   
                </View>
            </TouchableWithoutFeedback>


            <View style={{alignSelf:'center', marginTop:30,flexDirection:'row'}}>
                <View style={styles.socialBtn}>
                <Image
                                    source={require('../assets/img/facebook.png')}
                                    style={{ flex:1,height:22.91, width:12.36, alignSelf:'center'}}
                                    resizeMode='contain'
                                />
                </View>
                <View style={styles.socialBtn}>
                <Image
                                    source={require('../assets/img/google.png')}
                                    style={{ flex:1,height:22.91, width:22.91, alignSelf:'center'}}
                                    resizeMode='contain'
                                />
                </View>
            </View>
            <TouchableWithoutFeedback
            onPress={() =>
                navigation.navigate("registation")
                    }
            >
            <View style={{alignSelf:'center', marginTop:10}}>
                <Text>Create New Account</Text>
            </View>
            </TouchableWithoutFeedback>

            

        </SafeAreaView>
       
    )
};



const styles = StyleSheet.create({

  logo:{
      width:165.67,
      height:50.8,
      alignSelf:'center',
      top:83.05,
  },
  textSignIn:{
    fontWeight:'700',
      fontSize:25,
      lineHeight:29.3,
      textAlign:'center',
      lineHeight:29.3,
      color:'black',
      fontFamily:'Roboto',
  },
  textInput:{
    backgroundColor:'#FFFFFF',
    height:61.11,
    borderRadius:10,
    width:308.68,
   
  },
  textForget:{
      fontFamily:'Roboto',
      textAlign:'right',
      marginRight:50,
      fontSize:13,
      lineHeight:15.23,
      fontWeight:'400',
      marginTop:20
  },
  loginBtn:{
      width:308.68,
      alignSelf:'center',
      borderRadius:10,
      height:61.11,
      backgroundColor:'#F75F55',
    marginTop:20
  },
  loginBtnText:{
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    alignSelf:'center',
    fontSize:17,
    lineHeight:19.92,
    letterSpacing:0.15,
    fontWeight:'500',
    color:'white',

  },
  socialBtn:{
      width:56,
      height:56,
      borderRadius:10,
      backgroundColor:'#FFFFFF',
      marginRight:14,
      alignSelf:'center',
      elevation:1
  }
});
