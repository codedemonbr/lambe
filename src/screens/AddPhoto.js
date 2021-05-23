import React, { Component } from "react";
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

export default class AddPhoto extends Component {
    state = {
        image: null,
        comment: "",
    };

    pickImage = async () => {
        if (ImagePicker.getMediaLibraryPermissionsAsync()) {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }
        }
    };

    takePicture = async () => {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    save = async () => {
        Alert.alert("Imagem adicionada!", this.state.comment);
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