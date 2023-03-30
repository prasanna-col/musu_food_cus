import React from "react";
import { Text, View } from "react-native"
import AppButton from "../../components/AppButton";
import AppContainer from "../../components/AppContainer";
import AppSafeAreaView from "../../components/AppSafeArea";
const ForgotPasswordScreen = ({ navigation }) => {
    return (
        <AppSafeAreaView edges={["left", "right", "bottom"]}>
            <AppContainer>
                <Text>Forgot Password Screen</Text>
                <AppButton
                    title={"Send OTP"}
                    boldtext
                    onPress={() => { navigation.navigate("EnterOTP") }}
                    small
                    half
                    style={{ marginTop: 10 }}
                />
            </AppContainer>
        </AppSafeAreaView>
    )
}

export default ForgotPasswordScreen;