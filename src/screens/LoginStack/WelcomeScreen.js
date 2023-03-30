import React from "react";
import { Text, View } from "react-native"
import AppButton from "../../components/AppButton";
import AppContainer from "../../components/AppContainer";
import AppSafeAreaView from "../../components/AppSafeArea";
const WelcomeScreen = ({ navigation }) => {
    return (
        <AppSafeAreaView edges={["left", "right", "bottom"]}>
            <AppContainer >
                <Text>Welcome screen</Text>
                <AppButton
                    title={"Login"}
                    boldtext
                    onPress={() => { navigation.navigate("Login Screen") }}
                    small
                    quater
                    style={{ marginTop: 10 }}
                />
                <AppButton
                    title={"New User"}
                    boldtext
                    onPress={() => { navigation.navigate("Register Screen") }}
                    small
                    quater
                    style={{ marginTop: 10 }}
                />
            </AppContainer>

        </AppSafeAreaView>
    )
}

export default WelcomeScreen;