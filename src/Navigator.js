import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./screens/Feed";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import { FontAwesome as Icon } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    const feedOptions = {
        title: "Feed",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={30} color={tintColor} />
        ),
    };
    const loginOptions = {
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

    return (
        <Tab.Navigator
            initialRouteName={"Feed"}
            tabBarOptions={{ showLabel: false }}
        >
            <Tab.Screen name="Feed" component={Feed} options={feedOptions} />
            <Tab.Screen name="Login" component={Login} options={loginOptions} />
            <Tab.Screen
                name="Profile"
                component={Profile}
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
