import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tab1 } from './Tab1';
import Icon from "@expo/vector-icons/Ionicons";
import { Tab2Screen } from "./Tabs2";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          position: "absolute",
          backgroundColor: "rgba(255,255,255,0.90)",
        },
      }}
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Tab1}
        options={{
          tabBarLabel: "Listado",
          tabBarIcon: ({ color }) => (
            <Icon name="list-outline" color={color} size={25} />
          )
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Tab2Screen}
        options={{
          tabBarLabel: "Buscador",
          tabBarIcon: ({ color }) => (
            <Icon name="search-outline" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
