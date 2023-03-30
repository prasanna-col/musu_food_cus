import React from "react";
import { Text, View } from "react-native"
import AppButton from "../../components/AppButton";
import AppContainer from "../../components/AppContainer";
import AppSafeAreaView from "../../components/AppSafeArea";
const LoginScreen = ({ navigation }) => {
    return (
        <AppSafeAreaView edges={["left", "right", "bottom"]}>
            <AppContainer>
                <Text>Login screen</Text>
                <AppButton
                    title={"Login"}
                    boldtext
                    onPress={() => {
                        navigation.navigate("Tab Navigator")
                    }}
                    small
                    half
                    style={{ marginTop: 10 }}
                />
                <AppButton
                    title={"Forgot password"}
                    boldtext
                    onPress={() => { navigation.navigate("Forgot Password") }}
                    small
                    half
                    style={{ marginTop: 10 }}
                />
            </AppContainer>
        </AppSafeAreaView>
    )
}

export default LoginScreen;