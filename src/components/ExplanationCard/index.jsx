import { View, StyleSheet, Text, Image } from "react-native";
import EducationIcon from "../../assets/icons/educationIcon.png";
import MoneyIcon from "../../assets/icons/moneyIcon.png";
import BodyIcon from "../../assets/icons/bodyIcon.png";
import FunIcon from "../../assets/icons/funIcon.png";

export default function ExplanationCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Através deste APP você vai consolidar {"\n"} 4 hábitos de áreas fundamentais:
      </Text>

      <View style={styles.content}>
        <Image
          source={EducationIcon}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.mind}>Mente: </Text> Hábitos para melhorar sua inteligência/sabedoria
        </Text>
      </View>

      <View style={styles.content}>
        <Image
          source={MoneyIcon}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.money}>Financeiro: </Text> Hábitos para te ajudar com o controle financeiro
        </Text>
      </View>

      <View style={styles.content}>
        <Image
          source={BodyIcon}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.body}>Corpo: </Text> Hábitos para te deixar {"\n"}
          mais saudável e disposto.
        </Text>
      </View>

      <View style={styles.content}>
        <Image
          source={FunIcon}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.fun}>Humor: </Text> Hábitos para controlar o stress {"\n"}
          e aumentar a felicidade.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151515',
    width: 350,
    borderRadius: 25,
    padding: 30,
  },
  title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  content: {
    flexDirection: "row",
    marginTop: 30,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  mind: {
    color: "#90b7f3",
    fontWeight: "bold"
  },
  money: {
    color: "#85bb65",
    fontWeight: "bold"
  },
  body: {
    color: "#ff0044",
    fontWeight: "bold"
  },
  fun: {
    color: "#fe7f23",
    fontWeight: "bold"
  },
  description: {
    color: "#fff"
  }
})
