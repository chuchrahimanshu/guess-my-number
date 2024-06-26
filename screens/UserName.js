import { Alert, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'
import StartGame from './StartGame';
import BG from "../assets/BG.png";

const UserName = ({setCurrentScreen, userName, setUserName}) => {

    const handleInputChange = (value) => {
        setUserName(value);
    }

    const handleButtonClick = () => {
        if(!userName?.trim()){
            Alert.alert(
                "Invalid Name!",
                "Please enter a valid name",
                [{text: "Okay", style: "destructive", onPress: setUserName("")}]
            )
        }
        setCurrentScreen("start");
    }

    return (
        <ImageBackground 
            source={BG}
            style={styles.bgImage}
        >
            <View style={styles.container} >
                <Text style={styles.welcomeText} >
                    WELCOME
                </Text>
                <View style={styles.subContainer} >
                    <Text style={styles.label} >
                        Enter Name
                    </Text>
                    <TextInput
                        style={[styles.textInput]}
                        onChangeText={handleInputChange}
                        value={userName}
                        cursorColor="white"
                        autoCapitalize="true"
                    />
                    <PrimaryButton 
                        buttonName={"Save"}  
                        onPress={handleButtonClick}
                    />
                </View>
                <View style={styles.temp}></View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    bgImage: {
        flex: 1
    },
    subContainer: {
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 25,
        backgroundColor: "#111111",
        borderRadius: 20,
        elevation: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    welcomeText: {
        color: "white",
        fontSize: 65,
        fontWeight: "bold",
        marginBottom: 50
    },
    label: {
        color: "white",
        alignSelf: "flex-start",
        fontSize: 18,
        fontWeight: "600",
    },  
    textInput: {
        backgroundColor: "#151515",
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 10,
        color: "white",
        width: 290,
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 18,
        cursor: "pointer"
    },
    temp: {
        height: 100
    }
});

export default UserName