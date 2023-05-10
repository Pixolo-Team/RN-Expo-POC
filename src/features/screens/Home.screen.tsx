import React from "react";
import {
	View,Text
	
} from "react-native";
import Lottie from 'lottie-react-native';

interface Home {
	
}
const Home: React.FC<Home> = ({  }) => {

    return(
<View style={{flex:1,backgroundColor:"pink",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
<Text> Hello</Text>
</View>
   	);
};

export default Home;