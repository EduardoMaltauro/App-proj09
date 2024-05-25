import React from "react" 
import { View } from "react-native"

import Estilo from "../styles/JanelaStyle.js"

export default function Janela(props) {
    return <View style={ Estilo.janela }>
        { props.children }
    </View>
}