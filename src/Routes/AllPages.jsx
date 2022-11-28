import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
      </Navigator>
    </NavigationContainer>
  )
}
