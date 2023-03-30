import React from "react";
import { Text, View } from "react-native"
import AppButton from "../../components/AppButton";
import AppContainer from "../../components/AppContainer";
import AppSafeAreaView from "../../components/AppSafeArea";
const Profile = ({ navigation }) => {
    return (
        <AppSafeAreaView edges={["left", "right", "bottom"]}>
            <AppContainer>
                <Text>profile screen</Text>
                {/* <AppButton
                    title={"Next >"}
                    boldtext
                    onPress={() => { navigation.navigate("CreatePassword Screen") }}
                    small
                    quater
                    style={{ marginTop: 10 }}
                /> */}
            </AppContainer>
        </AppSafeAreaView>
    )
}

export default Profile;