import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "./ChatScreen";
import Lobby from "./Lobby"

export default function LoginStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={"Lobby"}
            screenOptions={{
                headerShown: true,
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen name="Lobby" options={{ headerShown: false }}>
                {(props) => <Lobby {...props} />}
            </Stack.Screen>

            <Stack.Screen name="ChatScreen" options={{ headerShown: false }}>
                {(props) => <ChatScreen {...props} />}
            </Stack.Screen>

        </Stack.Navigator>
    );
}
