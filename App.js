import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import News from "./screens/News";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="All"
            component={News}
            initialParams={{ category: "general" }}
            options={{
              tabBarIcon: (props) => (
                <Icon type="feather" name="home" color={props.color} />
              ),
            }}
          />

          <Tab.Screen
            name="Business"
            component={News}
            initialParams={{ category: "business" }}
            options={{
              tabBarIcon: (props) => (
                <Icon type="feather" name="dollar-sign" color={props.color} />
              ),
            }}
          />

          <Tab.Screen
            name="Health"
            component={News}
            initialParams={{ category: 'health' }}
            options={{
              tabBarIcon: (props) => (
                <Icon type="feather" name="heart" color={props.color} />
              ),
            }}
          />

          <Tab.Screen
            name="Sports"
            component={News}
            initialParams={{ category: 'sports' }}
            options={{
              tabBarIcon: (props) => (
                <Icon
                  type="ionicon"
                  name="tennisball-outline"
                  color={props.color}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Tech"
            component={News}
            initialParams={{ category: "technology" }}
            options={{
              tabBarIcon: (props) => (
                <Icon
                  type="ionicon"
                  name="hardware-chip-outline"
                  color={props.color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
