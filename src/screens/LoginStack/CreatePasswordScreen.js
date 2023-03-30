import React from "react";
import { Text, View } from "react-native"
import AppButton from "../../components/AppButton";
import AppContainer from "../../components/AppContainer";
import AppSafeAreaView from "../../components/AppSafeArea";
const CreatePasswordScreen = ({ navigation }) => {
    return (
        <AppSafeAreaView edges={["left", "right", "bottom"]}>
            <AppContainer>
                <Text>Create Password Screen</Text>

                <AppButton
                    title={"Save & Login"}
                    boldtext
                    onPress={() => { navigation.navigate("Login Screen") }}
                    small
                    half
                    style={{ marginTop: 10 }}
                />
            </AppContainer>
        </AppSafeAreaView>
    )
}

export default CreatePasswordScreen;