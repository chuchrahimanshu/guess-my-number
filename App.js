import { StatusBar } from 'expo-status-bar';
import StartGame from './screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet } from 'react-native';
import BACKGROUND from "./assets/bg.jpg";

export default function App() {
  return (
    <LinearGradient 
      colors={["#8E0E00", "#1F1C18"]} 
      style={styles.container}
    >
      <ImageBackground 
        source={BACKGROUND}
        style={styles.container}
        imageStyle={styles.bgImage}
      >
        <StartGame />
        <StatusBar style='light' />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    opacity: 1 
  }
})