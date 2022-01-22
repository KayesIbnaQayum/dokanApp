import React, {useState,useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TextInput, ScrollView, Button, Alert,TouchableWithoutFeedback, FlatList, ImageBackground} from 'react-native';

  

export default profile = ({ navigation })=>
{
    const [menuone, setmenuone] = useState(0);
    const [menutwo, setmenutwo] = useState(0);
    const [menuthree, setmenuthree] = useState(0);
    const [menufour, setmenufour] = useState(0);
    
    return(
        <SafeAreaView style={{backgroundColor:'#F8F8F8', height:'100%',flexDirection:'column',flex:1}}>
          <ScrollView>
            <Text style={{textAlign:'center', marginTop:40, fontWeight:'bold', fontSize:20}}>My Account</Text>
            <View style={styles.profile}>
            <Image
                                    source={require('../assets/img/profile.png')}
                                    style={{ flex:1,height:14, width:25, alignSelf:'center'}}
                                    resizeMode='contain'
                                />
                          
            </View>
            <View style={{alignSelf:'center'}}>
                <Text style={{textAlign:'center'}}>John Smith</Text>
                <Text style={{textAlign:'center'}}>info@johnsmith.com</Text>
            </View>
            <View style={{marginTop:55, width:308.68, alignSelf:'center', backgroundColor:'#FFFF'}}>
            <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
            <View style={{elevation:4, left:25, alignSelf:'center'}}>
                <Image
                                        source={require('../assets/img/profile.png')}
                                        style={{height:18, width:18}}
                                        resizeMode='contain'
                                    />
            </View>
            <View style={{position:'absolute',right:20, elevation:5, alignSelf:'center'}}>
                <Image
                                        source={require('../assets/img/arrowNext.png')}
                                        style={{height:18, width:18}}
                                        resizeMode='contain'
                                    />
            </View>
            <View
                    style={[styles.textInput,{paddingLeft:60}]}

                >
                <View style={{flexDirection:'row', flex:1}}>
                <Text style={{alignSelf:'center'}}>asdasdasdasd</Text>
                </View>
                
            </View>


            </View>
                <View style={{flexDirection:'column', width:290, alignSelf:'center'}}>
                <Text style={{marginBottom:10}}>Email</Text>
                <TextInput
                    style={[{width:280,elevation:2,paddingLeft:10}]}
                    placeholder="Email"
                />
                <Text style={{marginBottom:10}}>Email</Text>
                <TextInput
                    style={[{width:280,elevation:2,paddingLeft:10}]}
                    placeholder="Email"
                />
                <Text style={{marginBottom:10}}>Email</Text>
                <TextInput
                    style={[{width:280,elevation:2,paddingLeft:10}]}
                    placeholder="Email"
                />
                <Text style={{marginBottom:10}}>Email</Text>
                <TextInput
                    style={[{width:280,elevation:2,paddingLeft:10}]}
                    placeholder="Email"
                />
                <Text style={{marginBottom:10}}>Email</Text>
                <TextInput
                    style={[{width:280,elevation:2,paddingLeft:10}]}
                    placeholder="Email"
                />
                </View>
            </View>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
            <View style={{elevation:4, left:40, alignSelf:'center'}}>
                <Image
                                        source={require('../assets/img/profile.png')}
                                        style={{height:18, width:18}}
                                        resizeMode='contain'
                                    />
            </View>
            <View
                    style={[styles.textInput,{elevation:3,paddingLeft:60}]}

                >
                <View style={{flexDirection:'row', flex:1}}>
                <Text style={{alignSelf:'center'}}>asdasdasdasd</Text>
                </View>
                
            </View>
            </View>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
            <View style={{elevation:4, left:40, alignSelf:'center'}}>
                <Image
                                        source={require('../assets/img/profile.png')}
                                        style={{height:18, width:18}}
                                        resizeMode='contain'
                                    />
            </View>
            <View
                    style={[styles.textInput,{elevation:3,paddingLeft:60}]}

                >
                <View style={{flexDirection:'row', flex:1}}>
                <Text style={{alignSelf:'center'}}>asdasdasdasd</Text>
                </View>
                
            </View>
            </View>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
            <View style={{elevation:4, left:40, alignSelf:'center'}}>
                <Image
                                        source={require('../assets/img/profile.png')}
                                        style={{height:18, width:18}}
                                        resizeMode='contain'
                                    />
            </View>
            <View
                    style={[styles.textInput,{elevation:3,paddingLeft:60}]}

                >
                <View style={{flexDirection:'row', flex:1}}>
                <Text style={{alignSelf:'center'}}>asdasdasdasd</Text>
                </View>
                
            </View>
            </View>
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
        backgroundColor:'white',
        marginBottom:70

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
      width:308.68,
      alignSelf:'center',
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
  