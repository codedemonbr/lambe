import React, { Component } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

import { connect } from "react-redux";
import { createUser } from "../store/actions/user";

class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TextInput
                    placeholder="Nome"
                    style={styles.input}
                    autoFocus={true}
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}
                />
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                    value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />

                <TouchableOpacity
                    onPress={() => {
                        this.props.onCreateUser(this.state);
                    }}
                    style={styles.buttom}
                >
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateUser: (user) => dispatch(createUser(user)),
    };
};

export default connect(null, mapDispatchToProps)(Register);

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
