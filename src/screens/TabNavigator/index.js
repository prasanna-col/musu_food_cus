import React, { useEffect, useContext, useRef, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppState, Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Home from "./Home";
import Profile from "./Profile";
import Analytics from "./Analytics";
import SearchAnalytics from "./SearchAnalytics";
import Chat from "./Chat"

import { COLORS } from "../../assets/colors";

import Dashboard from "../../assets/images/Dashboard.png"
import ActiveDashboard from "../../assets/images/ActiveDashboard.png"
import ProfileIcon from "../../assets/images/ProfileIcon.png"
import ActiveProfileIcon from "../../assets/images/ActiveProfileIcon.png"
import SearchIcon from "../../assets/images/SearchIcon.png"
import ActiveSearchIcon from "../../assets/images/ActiveSearchIcon.png"

import AnalysisIcon from "../../assets/images/AnalysisIcon.png"
import ActiveAnalysis from "../../assets/images/ActiveAnalysis.png"
import ActiveChatIcon from "../../assets/images/ActiveChatIcon.png"
import ChatIcon from "../../assets/images/ChatIcon.png"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const iconSize = 30;
const active = COLORS.activeIcon;
const inactive = COLORS.inactiveIcon;

export default function TabNavigator({ navigation, route }) {

    const insets = useSafeAreaInsets();

    //   useEffect(() => {
    //     if (!loggedIn) {
    //       navigation.navigate("Log In");
    //     }
    //   }, [loggedIn]);



    // return (
    //     <Tab.Navigator
    //         initialRouteName="Home"
    //         screenOptions={({ route }) => ({
    //             tabBarIcon: ({ focused, color }) => {
    //                 if (route.name === "Home") {
    //                     return (
    //                         <HomeIcon height={iconSize} color={focused ? active : inactive} />
    //                     );
    //                 } else if (route.name === "Profile") {
    //                     return (
    //                         <ProfileIcon
    //                             height={iconSize - 2}
    //                             width={iconSize}
    //                             color={focused ? active : inactive}
    //                             style={[
    //                                 styles.profileIcon,
    //                                 styles.inactive,
    //                                 focused && styles.active,
    //                             ]}
    //                         />
    //                     );
    //                 } else if (route.name === "Cart") {
    //                     return (
    //                         <LibraryIcon
    //                             height={iconSize}
    //                             color={focused ? active : inactive}
    //                         />
    //                     );
    //                 } else if (route.name === "ActiveOrders") {
    //                     return (
    //                         <HeartIcon
    //                             height={iconSize}
    //                             color={focused ? active : inactive}
    //                         />
    //                     );
    //                 }
    //             },
    //         })}
    //         tabBarOptions={{
    //             showLabel: false,
    //             style: [
    //                 styles.navigator,
    //                 {
    //                     height: insets.bottom > 15 ? 60 + insets.bottom : 80,
    //                     paddingBottom: insets.bottom > 15 ? insets.bottom : 15,
    //                 },
    //             ],
    //         }}
    //     >
    //         <Tab.Screen name="Home" component={Home} options={{ unmountOnBlur: true }} />
    //         <Tab.Screen name="Profile" component={Profile} options={{ unmountOnBlur: true }} />
    //         <Tab.Screen name="Cart" component={Cart} options={{ unmountOnBlur: true }} />
    //         <Tab.Screen name="ActiveOrders" component={ActiveOrders} options={{ unmountOnBlur: true }} />

    //     </Tab.Navigator>
    // );

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({

            })}

            tabBarOptions={{

                showLabel: true,
                style: [
                    styles.navigator,
                    {
                        height: insets.bottom > 15 ? 60 + insets.bottom : 80,
                        paddingBottom: insets.bottom > 15 ? insets.bottom : 15,
                    },
                ],
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image source={focused ? ActiveDashboard : Dashboard} style={{ height: 25, width: 25 }} />
                    )
                }}
            />

            <Tab.Screen name="Analytics" component={Analytics}
                options={{
                    tabBarLabel: 'Analytics',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image source={focused ? ActiveAnalysis : AnalysisIcon} style={{ height: 25, width: 25 }} />
                    ),
                }}
            />
            <Tab.Screen name="SearchAnalytics" component={SearchAnalytics}
                options={{
                    tabBarLabel: 'SearchAnalytics',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image source={focused ? ActiveSearchIcon : SearchIcon} style={{ height: 25, width: 25 }} />
                    ),
                }}
            />

            <Tab.Screen name="Chat" component={Chat}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image source={focused ? ActiveChatIcon : ChatIcon} style={{ height: 25, width: 25 }} />
                    ),
                }}
            />

            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image source={focused ? ActiveProfileIcon : ProfileIcon} style={{ height: 25, width: 25 }} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    active: {
        borderColor: COLORS.activeIcon,
    },
    inactive: {
        borderColor: COLORS.inactiveIcon,
    },
    navigator: {
        height: 80,
        marginTop: 0,
        paddingBottom: 15,
        paddingTop: 15,
    },
    profileIcon: {
        borderRadius: 15,
        borderWidth: 2,
    },
});
