import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function DefaultButton(props) {
  const { buttonText, width, height, handlePress } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={[styles.button, {width: width, height: height}]}
    >
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }
})
