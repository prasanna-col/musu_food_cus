import React from "react";
import { Text, View } from "react-native"
import AppButton from "../../components/AppButton";
import AppContainer from "../../components/AppContainer";
import AppSafeAreaView from "../../components/AppSafeArea";
const RegisterScreen = ({ navigation }) => {
    return (
        <AppSafeAreaView edges={["left", "right", "bottom"]}>
            <AppContainer>
                <View>
                    <Text>Register Screen</Text>
                </View>
                <AppButton
                    title={"Next >"}
                    boldtext
                    onPress={() => { navigation.navigate("EnterOTP") }}
                    small
                    quater
                    style={{ marginTop: 10 }}
                />
            </AppContainer>

        </AppSafeAreaView>
    )
}

export default RegisterScreen;