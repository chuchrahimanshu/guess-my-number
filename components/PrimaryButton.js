import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({buttonName, onPress}) => {
  return (
    <Pressable style={({pressed}) => pressed ? styles.press : null} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText} >{buttonName}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        borderRadius: 100,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        elevation: 1,
    },
    buttonText: {
        padding: 8,
        borderRadius: 100,
        fontSize: 18,
        fontWeight: "600"
    },
    press: {
      opacity: 0.75
    }
}); 

export default PrimaryButton