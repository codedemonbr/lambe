import React from "react";
import { View } from "react-native";
import Header from "./src/components/Header";
import Post from "./src/components/Post";

export default function App() {
    const comments = [
        {
            nickname: "Joana Elena Silva",
            comment: "Excelente Foto!",
        },
        {
            nickname: "Rafael Gustavo Pereira",
            comment: "Muito ruim! Faça melhor...",
        },
    ];
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <Post
                image={require("./assets/imgs/fence.jpg")}
                comments={comments}
            />
        </View>
    );
}
