import { StyleSheet, TextInput, View, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { useState } from "react";

const StartGame = ({setSwitchToGame}) => {

    const [input, setInput] = useState("");

    const handleInputChange = (value) => {
        setInput(value);
    }

    const handlePressReset = () => {
        setInput("");
    }

    const handlePressConfirm = () => {
        if(input.includes('-')){
            Alert.alert(
                "Invalid Number!", 
                "Please choose a valid number between the range 1 - 99.",
                [{text: "Okay", style: "destructive", onPress: handlePressReset }]
            )
            return;
        }

        const inputNumber = parseInt(input);

        if(
            isNaN(inputNumber) || 
            inputNumber <= 0 ||
            inputNumber > 99
        ){
            Alert.alert(
                "Invalid Number!", 
                "Please choose a valid number between the range 1 - 99.",
                [{text: "Okay", style: "destructive", onPress: handlePressReset }]
            )
            return;
        }

        setSwitchToGame(true);
        return;
    }

    return (
        <View style={styles.container} >
            <View>
                <TextInput 
                    keyboardType="number-pad" 
                    style={styles.numberInput}
                    maxLength={2}
                    value={input}
                    onChangeText={handleInputChange}
                    cursorColor="white"
                />
                <View style={styles.buttonContainer} >
                    <PrimaryButton
                        onPress={handlePressReset}
                        buttonName="Reset"
                    />
                    <PrimaryButton
                        onPress={handlePressConfirm}
                        buttonName="Confirm"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    subContainer: {
        padding: 50,
        borderRadius: 15,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 10
    },
    numberInput: {
        backgroundColor: "white",
        marginBottom: 50,
        padding: 10,
        borderRadius: 5,
        fontSize: 40,
        fontWeight: "bold",
        width: 65,
    }
});

export default StartGame