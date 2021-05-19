import React, { Component } from "react";
import { StyleSheet, Text, View, Platform, Image } from "react-native";
import icon from "../../assets/imgs/icon.png";
import FontLoader from "../common/FontLoader";

class Header extends FontLoader {
    state = {
        fontsLoaded: false,
    };

    componentDidMount() {
        this.loadFonts();
    }

    render() {
        if (this.state.fontsLoaded) {
            return (
                <View style={styles.container}>
                    <View style={styles.rowContainer}>
                        <Image source={icon} style={styles.image} />
                        <Text style={styles.title}>Lambe Lambe</Text>
                    </View>
                </View>
            );
        } else {
            return (
                <Text>Component Header not mounted. Fonts is not loaded</Text>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "ios" ? 30 : 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#BBB",
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: "contain",
    },
    title: {
        color: "#000",
        fontFamily: "shelter",
        height: 30,
        fontSize: 28,
    },
});

export default Header;
