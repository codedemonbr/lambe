import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../store/actions/posts";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert,
} from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const noUser = "Você precisa estar logado para adicionar imagens";

class AddPhoto extends Component {
    state = {
        image: null,
        comment: "",
    };

    pickImage = async () => {
        if (!this.props.name) {
            Alert.alert("Falha!", noUser);
            return;
        }

        if (ImagePicker.getMediaLibraryPermissionsAsync()) {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                // base64: true,
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }
        }
    };
    takePicture = async () => {
        if (!this.props.name) {
            Alert.alert("Falha!", noUser);
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            // base64: true,
            quality: 1,
        });

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    save = async () => {
        if (!this.props.name) {
            Alert.alert("Falha!", noUser);
            return;
        }

        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [
                {
                    nickname: this.props.name,
                    comment: this.state.comment,
                },
            ],
        });

        this.setState({ image: null, comment: "" });
        this.props.navigation.navigate("Feed");
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem</Text>
                    <View style={styles.imageContainer}>
                        {this.state.image && (
                            <Image
                                source={{ uri: this.state.image }}
                                style={styles.image}
                            />
                        )}
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity
                            onPress={this.pickImage}
                            style={styles.buttom}
                        >
                            <Icon name="photo" size={32} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.takePicture}
                            style={styles.buttom}
                        >
                            <Icon name="camera" size={32} color="white" />
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        placeholder="Algum comentário para a foto?"
                        style={styles.input}
                        value={this.state.comment}
                        editable={!!this.props.name}
                        onChangeText={(comment) => this.setState({ comment })}
                    />
                    <TouchableOpacity onPress={this.save} style={styles.buttom}>
                        <View style={styles.bottomSave}>
                            <Icon name="save" size={32} color="white" />
                            <Text style={styles.buttomText}>Salvar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (post) => dispatch(addPost(post)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === "ios" ? 50 : 40,
        fontWeight: "bold",
    },
    imageContainer: {
        width: "90%",
        height: Dimensions.get("window").width * (3 / 4),
        backgroundColor: "#333",
        borderRadius: 5,
        margin: 10,
    },
    image: {
        width: "100%",
        height: Dimensions.get("window").width * (3 / 4),
        resizeMode: "contain",
        alignItems: "center",
        alignContent: "center",
        borderRadius: 5,
        // margin: 10,
    },
    bottomContainer: {
        flexDirection: "row",
    },
    buttom: {
        margin: 30,
        padding: 10,
        backgroundColor: "#4286f4",
        borderRadius: 15,
    },
    buttomText: {
        fontSize: 20,
        color: "#fff",
    },
    bottomSave: {
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        marginTop: 20,
        width: "90%",
    },
});
