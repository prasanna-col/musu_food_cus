import React, { useEffect } from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native"
import { COLORS } from "../assets/colors";
import AppContainer from "../components/AppContainer";
import AppSafeAreaView from "../components/AppSafeArea";
const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login Stack")
        }, 3000);
    }, [])

    return (
        <AppSafeAreaView edges={["left", "right", "bottom"]}>
            <ImageBackground source={require("../assets/images/bgimage.png")} resizeMode="cover" style={styles.image}>


                <AppContainer transparent noPaddingHorizontal noPaddingVertical>
                    <View style={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 50, fontWeight: "bold", color: COLORS.appColor }}>𐌌𐌵𐌔𐌵</Text>
                    </View>
                </AppContainer>
            </ImageBackground>
        </AppSafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default Splash;