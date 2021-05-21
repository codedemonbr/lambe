import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from "react-native";
import { Gravatar } from "react-native-gravatar";

export default class Profile extends Component {
    logout = () => {
        this.props.navigation.navigate("Auth");
    };

    render() {
        const options = {
            email: "fulano@teste.com",
            secure: true,
        };

        return (
            <SafeAreaView style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>Fulano de Tal</Text>
                <Text style={styles.email}>fulano@teste.com</Text>
                <TouchableOpacity onPress={this.logout} style={styles.buttom}>
                    <Text style={styles.buttomText}>Sair</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100,
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: "bold",
    },
    email: {
        marginTop: 20,
        fontSize: 25,
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: "#4286F4",
        borderRadius: 15,
    },
    buttomText: {
        fontSize: 20,
        color: "#FFF",
    },
});
