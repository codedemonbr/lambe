import { Component } from "react";
import * as Font from "expo-font";

export default class FontLoader extends Component {

    async loadFonts() {
        await Font.loadAsync({
            // Load a font `shelter` from a static resource
            shelter: require("../../assets/fonts/shelter.otf"),
        });
        this.setState({ fontsLoaded: true });
    }
}
