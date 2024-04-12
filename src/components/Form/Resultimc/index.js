import React from "react";
import {View, Text} from "react-native";
import styles from "./style";

//Aqui demonstra o resultado do imc produzido
export default function Main(props){
    return(
        <View  style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    )
}
