import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.profile}>Profile</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    profile: {
        fontSize: 40,
    },
});
