import React, {useState} from "react"
import { View, TextInput, Text, TouchableOpacity } from "react-native"
import ResultIMC from "../ResultIMC";
import styles from "./style";

export default function Form() {

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageIMC, setMessageIMC]= useState("Preencha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")
const [infoIMC, setInfoIMC] = useState(null)

function imcCalcular(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalcular()
        resultGeral()
        setHeight(null)
        setWeight(null)
        
        setMessageIMC("Seu IMC é igual: ")
        setTextButton("Calcular Novamente")
        return
    }
    setInfoIMC(null)
    setImc(null)
    setTextButton("Calcular")
    setMessageIMC("Preencha peso e altura")
}

function resultGeral() {
    
    if (imc < 18.5) {
        setInfoIMC("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        setInfoIMC("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        setInfoIMC("Sobrepeso");
    } else if (imc >= 30 && imc < 34.9) {
        setInfoIMC("Obesidade Grau 1");
    } else if (imc >= 35 && imc < 39.9) {
        setInfoIMC("Obesidade Grau 2");
    } else {
        setInfoIMC("Obesidade Grau 3");
    }
}

    return(
        <View style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex. 1.75 m" keyboardType="numbers-and-punctuation"/>
            <Text style={styles.formLabel}>Peso</Text>
            <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex. 67.23 kg" keyboardType="numbers-and-punctuation"/>
            <TouchableOpacity
            style={styles.ButtonCalcular}
                onPress={() => {
                validationImc()
                }}>
                <Text style={styles.textButtonCalcular}>{textButton}</Text>
            </TouchableOpacity>
        </View>

        <View>
            <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc} informationIMC={infoIMC} />
        </View>

        <View></View>
        </View>
    );
}