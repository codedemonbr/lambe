import React, { Component } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";

class Feed extends Component {
    state = {
        posts: [
            {
                id: Math.random(),
                nickname: "Rafael Pereira Filho",
                email: "rafael@teste.com",
                image: require("../../assets/imgs/fence.jpg"),
                comments: [
                    {
                        nickname: "John Ray Sheldon",
                        comment: "Stunning!",
                    },
                    {
                        nickname: "Ana Julia Arruda",
                        comment: "Foto linda!  Onde foi tirada?",
                    },
                ],
            },
            {
                id: Math.random(),
                nickname: "Francisco Leandro Lima",
                email: "franciscolima@teste.com",
                image: require("../../assets/imgs/bw.jpg"),
                comments: [],
            },
            {
                id: Math.random(),
                nickname: "Roberto Carlos",
                email: "roberto@teste.com",
                image: require("../../assets/imgs/boat.jpg"),
                comments: [
                    {
                        nickname: "Ana Maria Braga",
                        comment: "Chama os cachorros!",
                    },
                    {
                        nickname: "João Arthur",
                        comment: "Bora Bahêa minha poha",
                    },
                ],
            },
            {
                id: Math.random(),
                nickname: "Landolfo Rodrigues",
                email: "landolfo@teste.com",
                image: require("../../assets/imgs/gate.jpg"),
                comments: [],
            },
        ],
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item }) => <Post key={item.id} {...item} />}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
});

export default Feed;