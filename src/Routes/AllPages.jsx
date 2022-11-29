import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Explanation from "../Pages/Explanation";
import Home from "../Pages/Home";
import Start from "../Pages/Start";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AllPages() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="start"
          component={Start}
        />
        <Screen
          name="explanation"
          component={Explanation}
        />
        <Screen
          name="home"
          component={Home}
        />
      </Navigator>
    </NavigationContainer>
  )
}
