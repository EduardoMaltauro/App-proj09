import React from "react"
import { View, Text } from "react-native"

import Estilo from "../styles/GraficoStyle.js"

export default function Grafico(props) {
    return (
        <View style={Estilo.grafico}>

           <View style={[Estilo.graficoBarra, { width: `${props.porcentagem}%` }]}>

                <Text style={Estilo.graficoTexto}>
                    {props.porcentagem + "%"}
                </Text>

            </View>

        </View>
    )
}