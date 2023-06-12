import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
    
        style = {styles.background}
        source={require("../assets/background.jpeg")}>

            <View style ={styles.logoContainer}>
            <Image  
        style ={styles.logo}
        source={require("../assets/icon.png")}/>
        <Text style ={styles.tagline}>Sell What you dont need</Text>
            </View>

            <View style ={styles.buttonContainer}>
                <AppButton  title={"login"} onPress= {() => console.log("tapped")}/>
                <AppButton  title={"Register"} color ="secondary" onPress= {() => console.log("tapped")}/>
            </View>
        
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background :{
        flex : 1,
        justifyContent : "flex-end",
        alignItems :"center"
    },
    buttonContainer:{
        padding : 20,
        width : '100%'
    },
    logo:{
        width : 100,
        height : 100,
       

    },
    logoContainer :{
        position:"absolute",
        top : 70,
        alignItems :"center"
    },
    tagline :{
        fontSize : 25,
        fontWeight : "600",
        paddingVertical : 20
    }

    
})

export default WelcomeScreen;