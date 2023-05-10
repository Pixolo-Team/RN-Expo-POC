import React, { useEffect, useRef, useState } from "react";
import {
	View,Text,StyleSheet, Button
	
} from "react-native";
import LottieView from 'lottie-react-native';
// import AnimatedSplash from "react-native-animated-splash-screen";

import { StatusBar } from "expo-status-bar";
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';
interface SplashScreen {
navigation:any	
}
const SplashScreen: React.FC<SplashScreen> = ({ navigation }) => {
    const logoOpacity = useSharedValue(0);
  const textOpacity = useSharedValue(0);
    const randomWidth = useSharedValue(10);
    const [loading, setLoading] = useState(false);
    const animation = useRef(null);

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
      };
      const style = useAnimatedStyle(() => {
        return {
          width: withTiming(randomWidth.value, config),
        };
      });

      useEffect(() => {
        logoOpacity.value = withTiming(1, { duration: 1500 });
        textOpacity.value = withTiming(1, { duration: 1500 }, () => {
          navigation.navigate('Home');
        });
      }, []);

      const NewFunction=()=>{
        console.log("new function")
      }

      const logoStyle = useAnimatedStyle(() => {
        return {
          opacity: logoOpacity.value,
          transform: [{ translateY: logoOpacity.value * -50 }]
        };
      });

      const textStyle = useAnimatedStyle(() => {
        return {
          opacity: textOpacity.value,
          transform: [{ translateY: textOpacity.value * 50 }]
        };
      });
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
            setLoading(true);
          }, 3000);
      }, []);

      const navigateToMainScreen = () => {
        // TODO: Replace 'MainScreen' with the name of your main screen component
        navigation.navigate('Home');
       
            console.log('animation finished')
        
      };
    return(
       
     
        <View style={styles.container}>
    {/* <Text>Splash screen</Text> */}
    <Animated.Image
        source={require('../../../assets/appstore.png')}
        style={[styles.logo, logoStyle]}
      />
      <Animated.Text style={[styles.text, textStyle]}>
        Ocean Learning 
      </Animated.Text>
    
    {/* <LottieView
    style={{ width: '100%', height: '100%' }}
        source={require('../../../assets/background.json')}
        autoPlay
        loop={false}
        onAnimationFinish={navigateToMainScreen}
      />  */}
</View>
   	);
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      },
      logo: {
        width: 150,
        height: 150
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16
      }
  });
export default SplashScreen;
