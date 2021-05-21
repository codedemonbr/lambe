import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    createStackNavigator,
    HeaderBackButton,
} from "@react-navigation/stack";
import Feed from "./screens/Feed";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import AddPhoto from "./screens/AddPhoto";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { Alert } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStackNav = () => {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen
                name="Auth"
                component={Login}
                options={{
                    headerShown: true,
                    headerLeft: (props) => (
                        <HeaderBackButton
                            {...props}
                            onPress={() =>
                                Alert.alert(
                                    "Alert title",
                                    "My Alert Msg",
                                    [
                                        {
                                            text: "Cancel",
                                            onPress: () =>
                                                console.log("Cancel Pressed"),
                                            style: "cancel",
                                        },
                                        {
                                            text: "OK",
                                            onPress: () =>
                                                console.log("Ok Pressed"),
                                        },
                                    ],
                                    { cancelable: false }
                                )
                            }
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

const BottomTabs = () => {
    const feedOptions = {
        title: "Feed",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={30} color={tintColor} />
        ),
    };
    const addPhotoOptions = {
        title: "Add Picture",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="camera" size={30} color={tintColor} />
        ),
    };
    const profileOptions = {
        title: "Profile",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="user" size={30} color={tintColor} />
        ),
    };

    const loginOptions = {
        title: "login",
    };

    return (
        <Tab.Navigator
            initialRouteName={"Feed"}
            tabBarOptions={{ showLabel: false }}
        >
            <Tab.Screen name="Feed" component={Feed} options={feedOptions} />
            <Tab.Screen
                name="AddPhoto"
                component={AddPhoto}
                options={addPhotoOptions}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackNav}
                options={profileOptions}
            />
        </Tab.Navigator>
    );
};

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <BottomTabs />
        </NavigationContainer>
    );
};

export default TabNavigator;
