/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppContextProvider } from './src/context';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigationContainerRef, useRoute } from "@react-navigation/native";


import Splash from "./src/screens/splash"
import LoginStack from "./src/screens/LoginStack"
import TabNavigator from "./src/screens/TabNavigator"

function App() {

  const [user_id, setUser_id] = useState("")

  const contextValue = {
    user_id, setUser_id
  }
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const Stack = createStackNavigator();
  return (
    <AppContextProvider value={contextValue}>

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen
            name="Login Stack"
            options={{ gestureEnabled: false }}
          >
            {(props) => (
              <LoginStack {...props} />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Tab Navigator"
            options={{ headerShown: false, gestureEnabled: false }}
            screenOptions={{
              headerShown: false,
              headerBackTitleVisible: false,
            }}
          >
            {(props) => <TabNavigator {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
