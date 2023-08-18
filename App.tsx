// IMPORTS //
import { StyleSheet, Text, View } from 'react-native';

// PLUGINS // 

// STYLES //
import {theme} from "./src/infrastructure/theme/theme"

/** App  */
export default function App() {

  // View Starts here 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.regular,  // added theme color 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    margin:theme.spacing.small  // added theme spacing
  }
});
