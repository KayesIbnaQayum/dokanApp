import React, {useState,useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TextInput, ScrollView, Button, Alert,TouchableWithoutFeedback, FlatList, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default ProductPage = ({ navigation })=>
{
    const [bottomMenuheight, setbottomMenuheight] = useState(0)

    const menu = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

      const OpenCloseBottomMenu=()=>{
        if(bottomMenuheight == 0){
          setbottomMenuheight(300);
        }else{
          setbottomMenuheight(0);
        }
      }
      
    return(
        <SafeAreaView style={{backgroundColor:'#F8F8F8', height:'100%',flexDirection:'column'}}>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <Text style={{textAlign:'right', flex:2, padding:30, right:20}}>Product List </Text>
                <Image
                                        source={require('../assets/img/search.png')}
                                        style={{flex:1, alignSelf:'center'}}
                                        resizeMode='contain'
                                    />
            </View>
     
              <TouchableWithoutFeedback onPress={()=>{
                OpenCloseBottomMenu();
              }}>

              
              <View style={[styles.topBox,{elevation:3,borderRadius:10,flexDirection:'row'}]}>
                <View style={{flexDirection:'row', flex:1}}>
                                  <Image
                                        source={require('../assets/img/settings2.png')}
                                        style={{alignSelf:'center',marginLeft:15, height:15,width:20}}
                                        resizeMode='contain'
                                    />
                                    <Text style={{alignSelf:'center', marginLeft:10}}>Filter</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={{alignSelf:'center'}}>Sort by</Text>
                  <Image
                                        source={require('../assets/img/Shape.png')}
                                        style={{alignSelf:'center', marginLeft:5, width:10}}
                                        resizeMode='contain'
                                    />
                  
                  <Image
                                        source={require('../assets/img/settings.png')}
                                        style={{alignSelf:'center', height:15}}
                                        resizeMode='contain'
                                    />
  
                </View>
                

              </View>
              </TouchableWithoutFeedback>

            <FlatList
                        data={menu}
                        renderItem={({item}) => Item(item)}
                        maxToRenderPerBatch={10}
                        keyExtractor={(item, index) => index}
                        numColumns={2}
                        style={{alignSelf:'center',maxHeight:'90%',marginTop:20, width:334}}
                        
                        
                    />

        </SafeAreaView>
       
    )

    function Item(item){
      return(
            <View style={{width:160,height:290, backgroundColor:'#FFFFFF',elevation:2,borderRadius:10, marginRight:10, marginBottom:10}}>
                        <Image
                                                source={require('../assets/img/mask.png')}
                                                style={{width:160,height:177, borderTopRightRadius:10, borderTopLeftRadius:10}}
                                                resizeMode='stretch'
                                            />
                
                        <View>
                            <Text style={{marginTop:10}}>asadadadads</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text>150</Text>
                                <Text> 160</Text>
                            </View>
                        </View>
                    </View>
              )
    }
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
  topBox:{
    backgroundColor:'#FFFFFF',
    height:60,
    width:334,
    alignSelf:'center'
   
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
