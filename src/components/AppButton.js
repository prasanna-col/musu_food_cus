import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../assets/colors";
import { AppBorderRadius } from "../constants";
import DropShadow from "react-native-drop-shadow";
import LinearGradient from 'react-native-linear-gradient';


export default function AppButton({
    title,
    onPress,
    half,
    quater,
    small,
    style,
    boldtext
}) {

    return (
        <DropShadow
        // style={styles.newShadow}
        >


            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.7}

            >
                <LinearGradient colors={[COLORS.gradient, COLORS.appColor]}
                    style={[
                        {
                            height: small ? 30 : 50,
                            width: half ? "50%" : quater ? "25%" : "80%",
                            backgroundColor: COLORS.appColor,

                        },
                        styles.static,
                        style
                    ]}
                >
                    <Text style={{ color: COLORS.white, fontWeight: boldtext ? "bold" : "400", fontSize: small ? 15 : 18 }}>{title}</Text>
                </LinearGradient>

            </TouchableOpacity>
        </DropShadow>
    );
}
const styles = StyleSheet.create({
    bottomColorProvider: {
        backgroundColor: COLORS.white,
        bottom: 0,
        height: "50%",
        left: 0,
        position: "absolute",
        right: 0,
        zIndex: -1,
    },
    container: {
        backgroundColor: COLORS.white,
        flexGrow: 1,
        position: "relative",
    },
    static: {
        borderRadius: AppBorderRadius,
        alignItems: "center",
        justifyContent: "center"
    },
    boxShadow: {
        marginBottom: 4,
        padding: 1,
        shadowColor: "red",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: AppBorderRadius,
        elevation: 3,
    },
    newShadow: {
        shadowColor: COLORS.gradient,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: AppBorderRadius,
        elevation: 2
    }
});
