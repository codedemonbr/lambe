import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Platform, Image } from "react-native";
import icon from "../../assets/imgs/icon.png";
import FontLoader from "../common/FontLoader";
import { Gravatar } from "react-native-gravatar";

class Header extends FontLoader {
    state = {
        fontsLoaded: false,
    };

    componentDidMount() {
        this.loadFonts();
    }

    render() {
        const name = this.props.name || "Anonymous";
        const gravatar = this.props.email ? (
            <Gravatar
                options={{ email: this.props.email, secure: true }}
                style={styles.avatar}
            />
        ) : null;
        if (this.state.fontsLoaded) {
            return (
                <View style={styles.container}>
                    <View style={styles.rowContainer}>
                        <Image source={icon} style={styles.image} />
                        <Text style={styles.title}>Lambe Lambe</Text>
                    </View>
                    <View style={styles.userContainer}>
                        <Text style={styles.user}>{name}</Text>
                        {gravatar}
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
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
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
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    user: {
        fontSize: 10,
        color: "#888",
    },
    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10,
        borderRadius: 15,
    },
});

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
    };
};

export default connect(mapStateToProps)(Header);
