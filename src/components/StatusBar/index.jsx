import { Image, StyleSheet, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import EducationIcon from "../../assets/icons/educationIcon.png";
import MoneyIcon from "../../assets/icons/moneyIcon.png";
import BodyIcon from "../../assets/icons/bodyIcon.png";
import FunIcon from "../../assets/icons/funIcon.png";

export default function StatusBar() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBarContainer}>
        <Image
          source={EducationIcon}
          style={styles.icon}
        />

        <ProgressBar
          progress={1}
          color="#90b7f3"
          style={styles.progress}
        />
      </View>

      <View style={styles.statusBarContainer}>
        <Image
          source={MoneyIcon}
          style={styles.icon}
        />

        <ProgressBar
          progress={0}
          color="#85bb65"
          style={styles.progress}
        />
      </View>

      <View style={styles.statusBarContainer}>
        <Image
          source={BodyIcon}
          style={styles.icon}
        />

        <ProgressBar
          progress={0}
          color="#ff0044"
          style={styles.progress}
        />
      </View>

      <View style={styles.statusBarContainer}>
        <Image
          source={FunIcon}
          style={styles.icon}
        />

        <ProgressBar
          progress={0}
          color="#fe7f23"
          style={styles.progress}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#151515',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  statusBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  progress: {
    borderRadius: 10,
    width: 250,
    height: 8,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
})
