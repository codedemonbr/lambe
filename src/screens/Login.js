import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.login}>Login</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    login: {
        fontSize: 40,
    },
});
