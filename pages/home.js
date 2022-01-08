import React, {useState,useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TextInput, ScrollView, Button, Alert,TouchableWithoutFeedback, FlatList, ImageBackground} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import database from './database/database';
import geoLocationClass from './components/geoLocation';
import permissionClass from './components/permissionRequest';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from 'react-native-check-box';
import { toHijri, toGregorian } from "hijri-converter";
import notificationClass from './notification/notification'
import {useIsFocused} from '@react-navigation/native';
Icon.loadFont();

import prayerTimeClass, {prayerTimeCal, getCurrentPrayerName, calPrayerTimeLeft} from './components/prayerTimeCal';

import apiWeb from './api/web';


import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

Icon.loadFont();
Feather.loadFont();

//login
import {
    GoogleSignin,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
import Database from './database/database';
  

export default Home = ({ navigation })=>
{

    return(
        <SafeAreaView style={{backgroundColor:'#f7f6f7', height:'100%',flexDirection:'column'}}>
            <view>
                <Text>asdadasd</Text>
            </view>


        </SafeAreaView>
       
    )
};



const styles = StyleSheet.create({

    header:{
        backgroundColor:'rgba(255, 255, 255, 1)',
        paddingBottom:15
    },
    headerWrapper:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingTop:20,
        alignItems: 'center'
    },
    profilePicture:{
        height:50,
        width:50,
        borderRadius:40,

    },
    searchbox:{
        width:"100%",
        backgroundColor:'#FFF',
        borderRadius:40,
        padding:10,

        alignSelf:'center'
    },


    prayerTime:{
        flex:3,
        flexDirection:'column',
        justifyContent: 'space-evenly'
    },

    prayerTimeInner:{
        flex:1,
        paddingLeft:20,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:20,
    },

    prayerTimeIcon:{
        marginRight:15, 
        marginTop:35  
    },

    flexBox2:{
        flex:2
    },
    flexBox1:{
        flex:1, 
        alignItems:'flex-end',
        paddingRight:20,
        flexDirection:'column' 
    },
    flexdirectionRow:{
        flexDirection:'row'
    },

    bodyMenuContainer:{
        flex:2,
        flexDirection:"row",
        margin:10  
    },

    menuIcon:{
        flex:1,

        height:95,
        justifyContent: "center", 
        alignItems: "center",
    

        
    },
    menuLeft:{
        flex:1,
        height:95,
        alignItems: "flex-start",
        marginLeft:12
    },
    iconDiv:{
        elevation: 3,
        padding:5,
        marginBottom:5,
        borderRadius:5,
        backgroundColor:'#FFF',
    },
    menuIconImage:{
        height:60,
        width:60, 

    },
    smallIcon:{
        height:30,
        width:30
    },
    viewbox:{
        minHeight:50,
        backgroundColor:'#ffffff',
        marginTop:13,
        padding:10,
        borderRadius:12
    },
    nextButtonOpacity:{
        opacity:.5,
        bottom:0,
        left:0
    },
    Quranitem:{
        flex:1,
        minHeight:80,
        padding:20,
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        elevation: 2
    }
});

const StyleText = StyleSheet.create({
    boldText:{
        fontWeight:"bold",
        fontSize:20,
    },

    TextWhite:{
        color: '#ffffff',
    },

});
