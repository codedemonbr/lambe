import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/user";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    BackHandler,
} from "react-native";

class Login extends Component {
    state = {
        name: "Temporario",
        email: "",
        password: "",
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate("Profile");
        }
    };

    login = () => {
        this.props.onLogin({ ...this.state });
    };
    componentDidMount = () => {
        BackHandler.addEventListener("hardwareBackPress", () => true); //desabilita botao voltar
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
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("Register");
                    }}
                    style={styles.buttom}
                >
                    <Text style={styles.buttomText}>
                        Criar uma nova conta...
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (user) => dispatch(login(user)),
    };
};

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
