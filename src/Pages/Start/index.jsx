import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/icons/logo3.png";
import DefaultButton from "../../components/Common/DefaultButton";
import LifeStatus from "../../components/Common/LifeStatus";

export default function Start() {
  const navigation = useNavigation();

  const handleNavExplanation = () => {
    navigation.navigate('explanation');
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={Logo} style={styles.logo} />

          <LifeStatus />

          <Text style={styles.description}>
            Vamos transformar sua vida {"\n"} em jogo,
            buscando sempre {"\n"} o melhor nível.
          </Text>

          <DefaultButton
            buttonText="Continuar"
            handlePress={handleNavExplanation}
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
    backgroundColor: "rgba(21, 21, 21, 0.98)"
  },
  logo: {
    width: 300,
    height: 60,
    marginTop: 60,
    marginBottom: 20,
  },
  description: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 60,
  }
})
