import React from "react";
import { Text, View } from "react-native"
import AppButton from "../../components/AppButton";
import AppContainer from "../../components/AppContainer";
import AppSafeAreaView from "../../components/AppSafeArea";
const EnterOTP = ({ navigation }) => {
    return (
        <AppSafeAreaView edges={["left", "right", "bottom"]}>
            <AppContainer>
                <Text>OTP enter screen</Text>
                <AppButton
                    title={"Next >"}
                    boldtext
                    onPress={() => { navigation.navigate("CreatePassword Screen") }}
                    small
                    quater
                    style={{ marginTop: 10 }}
                />
            </AppContainer>
        </AppSafeAreaView>
    )
}

export default EnterOTP;