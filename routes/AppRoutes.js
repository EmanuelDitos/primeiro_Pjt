import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Gender from "../pages/Gender/Gender.js";
import Hour from "../pages/Hour/Hour.js";
import Objective from "../pages/Objective/Objective.js";
import Weight from "../pages/Weight/Weight.js";

const Stack = createNativeStackNavigator();
const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gender">
        <Stack.Screen
          name="Gender"
          component={Gender}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#1a1a1a",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Objective"
          component={Objective}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#1A1A1A",
            },
            headerTintColor: "#FFF",
          }}
        />
        <Stack.Screen
          name="Hour"
          component={Hour}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#1A1A1A" },
            headerTintColor: "#FFF",
          }}
        />
        <Stack.Screen
          name="Weight"
          component={Weight}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#1a1a1a" },
            headerTintColor: "#FFF",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
