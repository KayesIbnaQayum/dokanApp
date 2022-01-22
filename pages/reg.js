import React, {useState,useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TextInput, ScrollView, Button, Alert,TouchableWithoutFeedback, FlatList, ImageBackground} from 'react-native';

  

export default Reg = ({ navigation })=>
{

    return(
        <SafeAreaView style={{backgroundColor:'#F8F8F8', height:'100%',flexDirection:'column',flex:1}}>
          <ScrollView>
            <View style={styles.profile}>
            <Image
                                    source={require('../assets/img/profile.png')}
                                    style={{ flex:1,height:14, width:25, alignSelf:'center'}}
                                    resizeMode='contain'
                                />

                            
                            <Image
                                    source={require('../assets/img/camera.png')}
                                    style={{position:'absolute',height:60, width:60, alignSelf:'flex-end',top:80,right:-11}}
                                    resizeMode='contain'
                                />
                          
            </View>
            <View style={{marginTop:55}}>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
            <View style={{elevation:4, left:40, alignSelf:'center'}}>
                <Image
                                        source={require('../assets/img/profile.png')}
                                        style={{height:18, width:18}}
                                        resizeMode='contain'
                                    />
            </View>
            <TextInput
                    style={[styles.textInput,{elevation:3,paddingLeft:60}]}
                    placeholder="Name"
                />
            </View>

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
                    placeholder="Confirm Password"
                />
            </View>
            </View>

            <View style={[styles.loginBtn,{elevation:1}]}>
                    <View style={{flex:1, flexDirection:'row', alignSelf:'center'}}>
                        <Text style={[styles.loginBtnText,{justifyContent: 'space-evenly'}]}>Sign Up</Text>
                    </View>
            </View>

            <View style={{alignSelf:'center', flexDirection:'row'}}>
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


                
            <View style={{alignSelf:'center', flexDirection:'row'}}>
                <Text>Already have an account?</Text>

                <TouchableWithoutFeedback
            onPress={() =>
                navigation.navigate("Home")
                    }
            >
                <Text style={{color:'#2893E3'}}> Login</Text>
                    </TouchableWithoutFeedback>
            </View>


            
            </ScrollView >
        </SafeAreaView>
       
    )
};





const styles = StyleSheet.create({

    profile:{
        width:121.53,
        height:121.53,
        alignSelf:'center',
        top:30.78,
        borderRadius:100,
        backgroundColor:'white'

    },
    textSignIn:{
      fontWeight:'700',
        fontSize:25,
        lineHeight:29.3,
        textAlign:'center',
        lineHeight:29.3,
        color:'black',
        fontFamily:'Roboto',
        top:160
    },
    textInput:{
      backgroundColor:'#FFFFFF',
      height:61.11,
      borderRadius:10,
      width:308.68,
      alignSelf:'center'
    },
    textForget:{
        fontFamily:'Roboto',
        textAlign:'right',
        marginRight:50,
        top:225,
        fontSize:13,
        lineHeight:15.23,
        fontWeight:'400'
    },
    loginBtn:{
        width:308.68,
        alignSelf:'center',
        borderRadius:10,
        height:61.11,
        backgroundColor:'#F75F55',
        marginTop:20,
        marginBottom:10
    },
    loginBtnText:{
      justifyContent: 'space-evenly', 
      alignItems: 'center',
      alignSelf:'center',
      fontSize:17,
      lineHeight:19.92,
      letterSpacing:0.15,
      fontWeight:'500',
      color:'white'
  
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
  