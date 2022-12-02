import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DefaultButton from "../../components/Common/DefaultButton";
import ExplanationCard from "../../components/ExplanationCard";
import ChangeNavigationService from "../../services/ChangeNavigationService";

export default function Explanation() {
  const navigation = useNavigation();
  const [showHome, setShowHome] = useState(false);
  const startDate = new Date();
  const appStartData = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`;

  function handleShowHome() {
    navigation.navigate("home");
  }

  function handleSetShowHome() {
    if (!showHome) {
      ChangeNavigationService.setShowHome({ showHome: "true", appStartData })
      .then(() => console.log(`Sucesso! ${showHome} ${appStartData}`))
      .catch((err)=> console.warn(err));
      setShowHome(true);
      handleShowHome();
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>
            Antes, deixa {"\n"} eu te explicar...
          </Text>

          <ExplanationCard />

          <Text style={styles.subtitle}>
            Pronto(a) para subir de nível na vida?
          </Text>

          <Text style={styles.description}>
            Na próxima tela, você vai poder escolher {"\n"}
            seus 4 hábitos de forma individual.
          </Text>

          <DefaultButton
            buttonText="Continuar"
            handlePress={handleSetShowHome}
            width={250}
            height={50}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 40,
  },
  subtitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
  }
})
