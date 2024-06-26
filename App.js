import { StatusBar } from 'expo-status-bar';
import StartGame from './screens/StartGame';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import Game from './screens/Game';
import UserName from './screens/UserName';

export default function App() {

  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [userName, setUserName] = useState("");

  return (
    <>
      {currentScreen === "welcome" && 
        <UserName 
          setCurrentScreen={setCurrentScreen}
          userName={userName}
          setUserName={setUserName}
        />
      }
      {currentScreen === "start" && 
        <StartGame setCurrentScreen={setCurrentScreen} />
      }
      {currentScreen === "game" && 
        <Game setCurrentScreen={setCurrentScreen} />
      }
      <StatusBar style='light' />
    </>
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