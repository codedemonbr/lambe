import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Author from "./Author";
import Comments from "./Comments";
import AddComment from "./AddComment";

class Post extends Component {
    render() {
        const img =
            typeof this.props.image === "number"
                ? this.props.image
                : { uri: this.props.image };
        return (
            <View style={styles.container}>
                <Image source={img} style={styles.image} />
                <Author
                    email={this.props.email}
                    nickname={this.props.nickname}
                />
                <Comments comments={this.props.comments} />
                <AddComment postId={this.props.id} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width * (3 / 4),
        resizeMode: "contain",
    },
});

export default Post;
