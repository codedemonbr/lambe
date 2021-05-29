import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "./screens/Feed";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import AddPhoto from "./screens/AddPhoto";
import Register from "./screens/Register";
import Splash from "./screens/Splash";

import { FontAwesome as Icon } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthStackNav = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: "Login", headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ title: "Register" }}
            />
        </Stack.Navigator>
    );
};

const ProfileStackNav = () => {
    return (
        <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ title: "Profile", headerShown: false }}
            />
            <Stack.Screen
                name="Auth"
                component={AuthStackNav}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

const BottomTabs = () => {
    const feedOptions = {
        title: "Feed",
        tabBarIcon: ({ tintColor = "#888" }) => (
            <Icon name="home" size={30} color={tintColor} />
        ),
    };
    const addPhotoOptions = {
        title: "Add Picture",
        tabBarIcon: ({ tintColor = "#888" }) => (
            <Icon name="camera" size={30} color={tintColor} />
        ),
    };
    const profileOptions = {
        title: "Profile",
        tabBarIcon: ({ tintColor = "#888" }) => (
            <Icon name="user" size={30} color={tintColor} />
        ),
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

const SplashRouter = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ title: "Splash", headerShown: false }}
            />
            <Stack.Screen
                name="App"
                component={BottomTabs}
                options={{ title: "App", headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <SplashRouter />
        </NavigationContainer>
    );
};

export default MainNavigator;
