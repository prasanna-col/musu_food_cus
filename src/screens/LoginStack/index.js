import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen"
import CreatePasswordScreen from "./CreatePasswordScreen"
import EnterOTP from "./EnterOTP"
import RegisterScreen from "./RegisterScreen"
import ForgotPasswordScreen from "./ForgotPasswordScreen"
import TabNavigator from "../TabNavigator";

export default function LoginStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={"Welcome"}
            screenOptions={{
                headerShown: true,
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen name="Welcome" options={{ headerShown: false }}>
                {(props) => <WelcomeScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen name="Login Screen" options={{ headerShown: false }}>
                {(props) => <LoginScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen name="CreatePassword Screen" options={{ headerShown: false }}>
                {(props) => <CreatePasswordScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen name="EnterOTP" options={{ headerShown: false }}>
                {(props) => <EnterOTP {...props} />}
            </Stack.Screen>

            <Stack.Screen name="Register Screen" options={{ headerShown: false }}>
                {(props) => <RegisterScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen name="Forgot Password" options={{ headerShown: false }}>
                {(props) => <ForgotPasswordScreen {...props} />}
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
    );
}
