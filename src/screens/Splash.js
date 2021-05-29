import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FontLoader from "../common/FontLoader";

export default class Splash extends FontLoader {
    state = {
        fontsLoaded: false,
    };

    componentDidMount = () => {
        this.loadFonts();
        setTimeout(() => {
            this.props.navigation.navigate("App");
        }, 3000);
    };

    render() {
        if (this.state.fontsLoaded) {
            return (
                <View style={styles.container}>
                    <Image
                        source={require("../../assets/imgs/icon.png")}
                        style={styles.image}
                    />
                    <Text style={[styles.header]}>Lambe-Lambe</Text>
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
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: "contain",
    },
    header: {
        fontFamily: "shelter",
        fontSize: 50,
        // fontWeight: "bold",//É incompatível com o font expo
    },
});
