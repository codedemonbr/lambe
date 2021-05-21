import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    BackHandler,
} from "react-native";

export default class Login extends Component {
    state = {
        email: "",
        password: "",
    };

    login = () => {
        this.props.navigation.navigate("Profile");
    };
    componentDidMount = () => {
        BackHandler.addEventListener("hardwareBackPress", () => true);
    };

    render = () => {
        return (
            <SafeAreaView style={styles.container}>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    autoFocus={true}
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true}
                    keyboardType="default"
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                />

                <TouchableOpacity onPress={this.login} style={styles.buttom}>
                    <Text style={styles.buttomText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.buttom}>
                    <Text style={styles.buttomText}>
                        Criar uma nova conta...
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    input: {
        marginTop: 20,
        width: "90%",
        backgroundColor: "#DDD",
        height: 40,
        borderWidth: 0.8,
        borderColor: "#333",
        borderRadius: 15,
        paddingLeft: 15,
    },
});
